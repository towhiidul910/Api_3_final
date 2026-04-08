import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import {
  createE_OTP,
  generateAccessToken,
  generateE_HashToken,
  generateE_OTP,
  generateRefreshToken,
  hashE_OTP,
  hashU_Password,
} from "../middlewares/auth/token.service";
import prisma from "../lib/db";
import { AppError } from "../utils/AppError";
import {
  generateE_VerificationToken,
  generateOutBoxE_VerificationToken,
  sendOTPEmail,
  sendVerificationEmail,
} from "../middlewares/auth/handle.emai.&.auth.service";
import {
  ONE_DAY_MS,
  ONE_MIN_MS,
  waitAMinBroBeforeSendingEmail,
} from "../lib/time";

export const signupOutboxController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { name, email, password } = req.validated?.body;
    const hashedPassword = await hashU_Password(password);
    const emailExists = await prisma.user.findUnique({ where: { email } });

    if (emailExists) {
      throw new AppError("Auth", "Email already exist", 409, {
        code: "VERIFY_ERROR",
      });
    }

    const [user, token] = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          authProvider: {
            create: { provider: "local" },
          },
          verified: false,
        },
      });

      const verificationToken = await generateOutBoxE_VerificationToken(
        tx,
        user.id,
        "SIGNUP",
        ONE_MIN_MS * 10,
      );

      await tx.outboxEvent.create({
        data: {
          type: "SIGNUP_OUTBOX",
          payload: {
            create: {
              userId: user.id,
              email: user.email,
              name: user.name,
              token: verificationToken,
            },
          },
          status: "PENDING",
        },
      });

      return [user, verificationToken];
    });

    res.status(201).json({
      message:
        "Signup successful! please click your email for verification (or resend if needed)",
      userId: user.id,
    });
  } catch (err) {
    next(err);
  }
};

export const processOutbox = async () => {
  console.log("process Outbox is running 🌽");

  const [events] = await prisma.$transaction(async (tx) => {
    //!
    const events = await tx.outboxEvent.findMany({
      where: {
        OR: [{ status: "PENDING" }, { status: "FAILED", retries: { lt: 5 } }],
      },
      include: {
        payload: true,
      },
      take: 10,
      orderBy: { createdAt: "asc" },
    });
    await tx.outboxEvent.updateMany({
      where: { id: { in: events.map((e) => e.id) } },

      data: { status: "PROCESSING" },
    });

    return [events];
  });

  type SignupEmailPayload = {
    email: string;
    name: string;
    token: string;
  };

  for (const event of events) {
    try {
      const { email, name, token } = event.payload as SignupEmailPayload; // because payload is optional in prisma

      if (event.type === "SIGNUP_OUTBOX") {
        await sendVerificationEmail(
          email,
          name,
          token,
          "/signup-verify-email",
          "SIGNUP",
        );
      }

      if (event.type === "LOGIN_OUTBOX") {
        await sendOTPEmail(email, token, "LOGIN");
      }

      // mark as sent
      await prisma.outboxEvent.update({
        where: { id: event.id },
        data: { status: "SENT", processedAt: new Date() },
      });
    } catch (err) {
      await prisma.outboxEvent.update({
        where: { id: event.id },
        data: {
          status: "FAILED",
          retries: { increment: 1 },
        },
      });
    }
  }
};

export const resendVerificationEmailSignupOutboxController: RequestHandler =
  async (req, res, next) => {
    try {
      const { email } = req.validated?.body; // just signup don't need to check password
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) return next(new AppError("Auth", "user not found", 404));
      if (user.verified)
        return next(new AppError("Auth", "user already verified", 400));

      await waitAMinBroBeforeSendingEmail(user.id, "SIGNUP");

      await prisma.$transaction(async (tx) => {
        const verificationToken = await generateE_VerificationToken(
          user.id,
          "SIGNUP",
          ONE_MIN_MS * 10,
        );

        await tx.outboxEvent.create({
          data: {
            type: "SIGNUP_OUTBOX",
            payload: {
              create: {
                userId: user.id,
                email: user.email,
                name: user.name,
                token: verificationToken,
              },
            },
            status: "PENDING",
          },
        });
      });

      res.status(201).json({
        message:
          "Signup successful! please click your email for verification (or resend if needed)",
        userId: user.id,
      });
    } catch (err) {
      next(err);
    }
  };

export const verifyEmailSignupOutboxController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { token } = req.validated?.query;
    if (!token) return next(new AppError("Auth", "Token required", 400));
    const hashedToken = generateE_HashToken(token);
    const record = await prisma.verificationToken.findUnique({
      where: { token: hashedToken, type: "SIGNUP" },
    });

    if (!record) return next(new AppError("Auth", "Invalid token", 400));

    if (record.used)
      return next(new AppError("Auth", "Token already used", 400));

    if (record.expiresAt < new Date())
      return res.status(400).json({ message: "Token has expired" });
    await prisma.$transaction([
      prisma.user.update({
        where: { id: record.userId },
        data: {
          verified: true,
        },
      }),
      prisma.verificationToken.update({
        where: { id: record.id },
        data: { used: true },
      }),
    ]);

    await prisma.verificationToken.deleteMany({
      where: {
        userId: record.userId,
        id: { not: record.id },
      },
    });
    return res.json({ message: "Email verified successfully" });
  } catch (err) {
    next(err);
  }
};

//* login

export const loginOutboxController: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.validated?.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user)
      throw new AppError("Auth", `User does not exist with this ${email}`, 401);
    if (!user.password)
      throw new AppError("Auth", "No password in this user", 401);
    if (!user.verified)
      throw new AppError("Auth", "Please complete your sighup", 403);

    const match = await bcrypt.compare(password, user.password);

    if (!match) return next(new AppError("Auth", "Invalid credentials", 401));
    await waitAMinBroBeforeSendingEmail(user.id, "LOGIN");

    const rawOTP = generateE_OTP();
    const hashedOTP = hashE_OTP(rawOTP);

    await prisma.$transaction([
      prisma.verificationToken.create({
        data: {
          token: hashedOTP,
          userId: user.id,
          type: "LOGIN",
          expiresAt: new Date(Date.now() + ONE_MIN_MS * 10),
          locked: false,
        },
      }),
      prisma.outboxEvent.create({
        data: {
          type: "LOGIN_OUTBOX",
          payload: {
            create: {
              userId: user.id,
              email: user.email,
              name: user.name,
              token: rawOTP,
            },
          },
        },
      }),
    ]);

    const userId = user.id;
    res.status(200).json({ message: "success", userId: userId });
  } catch (err) {
    next(err);
  }
};

export const verifyOutboxLoginController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { token, userId } = req.validated?.body;
    if (!token || !userId)
      throw new AppError("Auth", "Token did not reach server", 401);
    console.log("userId 🍭🍭", userId);

    const hashed = generateE_HashToken(token);
    const record = await prisma.verificationToken.findUnique({
      where: { token: hashed },
      include: {
        user: {
          include: {
            verificationTokens: true,
          },
        },
      },
    });

    if (!record) throw new AppError("Auth", "Invalid token", 400);
    if (record?.attempts >= 5)
      throw new AppError(
        "Auth",
        "you used your 5th attempts request a new OTP",
        400,
      );
    if (record.used) throw new AppError("Auth", "Token already used", 400);
    if (record.type !== "LOGIN")
      throw new AppError("Auth", "Token type mismatch", 400);
    if (record.expiresAt < new Date())
      throw new AppError("Auth", "Token expired", 400);

    await prisma.verificationToken.update({
      where: { id: record.id },
      data: { used: true },
    });

    const accessToken = generateAccessToken(record.userId);
    const refreshToken = generateRefreshToken(record.userId);

    const hashedRefreshToken = generateE_HashToken(refreshToken); //!
    await prisma.refreshToken.create({
      data: {
        token: hashedRefreshToken, //!
        userId: record.userId,
        expiresAt: new Date(Date.now() + ONE_DAY_MS * 7),
        revoked: false,
      },
    });

    await prisma.verificationToken.deleteMany({
      where: { userId: record.userId, id: { not: record.id }, type: "LOGIN" },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      expires: new Date(Date.now() + ONE_DAY_MS * 7),
    });

    return res.json({ accessToken, message: "Login completed" });
  } catch (err) {
    next(err);
  }
};
export const verifyOutboxLoginTooManyTryController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { token, userId } = req.validated?.body;
    if (!token || !userId)
      throw new AppError("Auth", "Token did not reach server", 401);
    console.log("userId 🍭🍭", userId);

    const hashedInput = generateE_HashToken(token);
    const record = await prisma.verificationToken.findFirst({
      // find unique only works for when @id @unique @@unique([...])
      where: { userId, type: "LOGIN" },
      orderBy: { createdAt: "desc" },
    });

    if (!record) throw new AppError("Auth", "Invalid token", 400);
    if (record?.attempts >= 5)
      throw new AppError(
        "Auth",
        "you used your 5th attempts request a new OTP",
        400,
      );
    if (record.used) throw new AppError("Auth", "Token already used", 400);

    if (record.expiresAt < new Date())
      throw new AppError("Auth", "Token expired", 400);

    if (hashedInput !== record.token) {
      await prisma.verificationToken.update({
        where: { id: record.id, type: "LOGIN" },
        data: {
          attempts: { increment: 1 },
        },
      });
      throw new AppError("Auth", "OTP didn't match", 400);

    }

    await prisma.verificationToken.update({
      where: { id: record.id, type: "LOGIN" },
      data: { used: true },
    });

    const accessToken = generateAccessToken(record.userId);
    const refreshToken = generateRefreshToken(record.userId);

    const hashedRefreshToken = generateE_HashToken(refreshToken); //!
    await prisma.refreshToken.create({
      data: {
        token: hashedRefreshToken, //!
        userId: record.userId,
        expiresAt: new Date(Date.now() + ONE_DAY_MS * 7),
        revoked: false,
      },
    });

    await prisma.verificationToken.deleteMany({
      where: { userId: record.userId, id: { not: record.id }, type: "LOGIN" },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      expires: new Date(Date.now() + ONE_DAY_MS * 7),
    });

    return res.json({ accessToken, message: "Login completed" });
  } catch (err) {
    next(err);
  }
};

export const resendOutboxLoginController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email, password } = req.validated?.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user || !user.password)
      return next(new AppError("Auth", "Invalid credential", 401));
    if (!user.verified)
      return next(
        new AppError(
          "Auth",
          "User not verify please complete your signup",
          403,
        ),
      );

    await waitAMinBroBeforeSendingEmail(user.id, "LOGIN");

    const match = await bcrypt.compare(password, user.password);

    if (!match) return next(new AppError("Auth", "Invalid credentials", 401));

    const token = generateE_OTP();
    const hashedToken = hashE_OTP(token);

    await prisma.$transaction([
      prisma.verificationToken.create({
        data: {
          token: hashedToken,
          type: "LOGIN",
          locked: false,
          userId: user.id,
          expiresAt: new Date(Date.now() + ONE_MIN_MS * 15),
        },
      }),
      prisma.outboxEvent.create({
        data: {
          type: "LOGIN_OUTBOX",
          payload: {
            create: {
              userId: user.id,
              email,
              name: user.name,
              token,
            },
          },
          status: "PENDING",
        },
      }),
    ]);

    res.status(201).json({
      message: "Verification email has sended check your email",
      userId: user.id,
    });
  } catch (err) {
    next(err);
  }
};
//* signup

//1. const name, email , password from body
//2. make the password hashed -> then check the user by email -> throw error if email exist
//3. make a prisma.$transaction and in there run a async function
//4. in function , create user verified: verified filed
//5. create verificationToken and return rawToken
//6. create outboxEvent => type : signup_email, payload (is a json we can put here what ever we wont, well put userId, email, name), //* status "PENDING"
//7. return the user and rawToken
//8. res success with user id

//* processOutbox for cron

//1. make events find all the "PENDING" and retires lt: 5 and well take 10 at once, orderBy: {createAt: "asc"}
//2. update all the outboxEvent where : {id: {id: event.map((e) => e.id)}}, and make there status: "PROCESSING"
//3. ran a for loop, make every events object of array as event ,  and run this loop for every event (event here just a name don't over think it)
//4. payload (type json in prisma we crate so we can put what ever we want) in signup //6 we put userId, email, name these in that json type, now we want them, so event.payload as the type what we want so ts don't throw any error
//5. send Verification email with the token we get from the event.payload aka we crate that in the in the outbox in step signup//6 aw we create the user and we get the token form generateE_VerificationToken aka the raw token  //! prisma transaction are for db only because if once email sent successfully and then db update fail only db update can rollback not the email so we don't use transaction here
//6. then update for outboxEvent : where: id: event.id, //* status: "SENT", processedAt: new Date()
//7. catch error {make the status failed and retries: {increment: 1}}
