import bcrypt from "bcrypt";
import crypto from "crypto";

//* signup controller with email verification

import { RequestHandler } from "express";
import prisma from "../../lib/db";
// import {
//   createVerificationToken,
//   hashToken,
//   sendVerificationEmail,
// } from "../middlewares/auth/test/handle.email.verification.service";
import { AppError } from "../../utils/AppError";
import {
  createE_OTP,
  generateAccessToken,
  generateE_HashToken,
  generateE_OTP,
  generateRefreshToken,
  hashE_OTP,
  hashU_Password,
} from "../../middlewares/auth/token.service";
import {
  generateE_VerificationToken,
  sendOTPEmail,
  sendVerificationEmail,
} from "../../middlewares/auth/handle.emai.&.auth.service";
import {
  ONE_DAY_MS,
  ONE_MIN_MS,
  waitAMinBroBeforeSendingEmail,
} from "../../lib/time";
import { optional } from "zod";

const LOGIN_TOKEN_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes
// const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const RESEND_COOLDOWN_MS = 60 * 1000; // 1 minute
const MAX_ATTEMPTS = 5;

//* signup

export const signupController: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req.validated ?? {};
    const { name, email, password } = body;

    const emailExists = await prisma.user.findUnique({ where: { email } });
    if (emailExists) {
      return next(new AppError("Auth", "Email already registered", 409));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        authProvider: {
          create: {
            provider: "local",
          },
        },
        verified: false,
      },
    });

    const rawToken = await generateE_VerificationToken(user.id, "SIGNUP"); // it will create a verificationToken in db (with hashed = generateE_HashToken(rawToken);) and return rawToken
    await sendVerificationEmail(
      user.email,
      user.name,
      rawToken,
      "/signup-verify-email",
      "SIGNUP",
    );

    res.status(201).json({
      message: "verification email sended!",
      userId: user.id,
    });
  } catch (err) {
    next(err);
  }
};

//* signup 2 step 1
export const signupControllerOutBOX: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { name, email, password } = req.validated?.body;
    const hashedPassword = await hashU_Password(password);

    const emailExists = await prisma.user.findUnique({ where: { email } });
    if (emailExists) {
      return next(
        new AppError("Auth", "Email already registered", 409, {
          code: "VERIFY_ERROR",
        }),
      );
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

      const tokenValue = crypto.randomBytes(6).toString("hex");
      const verificationToken = await tx.verificationToken.create({
        data: {
          userId: user.id,
          token: tokenValue,
          type: "SIGNUP",
          expiresAt: new Date(Date.now() + ONE_MIN_MS * 10),
          attempts: 0,
          locked: false,
        },
      });

      await tx.outboxEvent.create({
        data: {
          type: "SIGNUP_OUTBOX",
          payload: {
            create: {
              userId: user.id,
              email: user.email,
              name: user.name,
              token: tokenValue,
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

//* signup 2 step 2 aka background worker
export const processOutbox = async () => {
  console.log("🚀 entered processOutbox");

  const events = await prisma.outboxEvent.findMany({
    where: { status: "PENDING" },
    include: {
      payload: true,
    },
  });

  type SignupEmailPayload = {
    email: string;
    name: string;
    token: string;
  };
  for (const event of events) {
    try {
      const { email, name, token } = event.payload as SignupEmailPayload;

      await sendVerificationEmail(
        email,
        name,
        token,
        "/signup-verify-email",
        "SIGNUP",
      );

      // Mark as sent
      await prisma.outboxEvent.update({
        where: { id: event.id },
        data: { status: "SENT", processedAt: new Date() },
      });
    } catch (err) {
      // retry logic
      await prisma.outboxEvent.update({
        where: { id: event.id },
        data: { status: "FAILED", retries: { increment: 1 } },
      });
    }
  }
};

//* signup 2 step 3 resend verification Controller for signup
export const resendVerificationEmailSignupController2: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email } = req.validated?.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return next(new AppError("Auth", "User not found", 404));
    if (user.verified)
      return next(new AppError("Auth", "user already verified", 400));

    const tokenValue = generateE_OTP();
    await prisma.$transaction(async (tx) => {
      // Delete all old token
      await tx.verificationToken.deleteMany({
        where: { userId: user.id, type: "SIGNUP" },
      });

      //Insert new token

      await tx.verificationToken.create({
        data: {
          userId: user.id,
          token: tokenValue,
          type: "SIGNUP",
          expiresAt: new Date(Date.now() + ONE_MIN_MS * 10),
          locked: false,
        },
      });

      res.status(200).json({ message: "Verification email resent!" });
    });
  } catch (err) {
    next(err);
  }
};

export const verifyEmailSignupController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { query } = req.validated ?? {};

    const { token } = query;

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
        data: { verified: true },
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

// this is for signup because we are checking if user verified, so verified user wont get a verification mail with this controller
export const resendVerificationEmailSignupController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { body } = req.validated ?? {};
    const { email } = body;
    if (!email) {
      return next(new AppError("Auth", "Email Required", 400));
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return next(
        new AppError(
          "Auth",
          "user not found, try signup again or try check email again",
          400,
        ),
      );
    }

    if (user.verified)
      return next(
        new AppError(
          "Auth",
          "user is already verified, cant send verified email again please try to login",
          400,
        ),
      );

    const last = await prisma.verificationToken.findFirst({
      where: { userId: user.id, type: "SIGNUP" },
      orderBy: { createdAt: "desc" },
    });

    if (last && Date.now() - last.createdAt.getTime() < RESEND_COOLDOWN_MS) {
      return res.status(429).json({
        message: `Please wait ${Math.ceil((RESEND_COOLDOWN_MS - (Date.now() - last.createdAt.getTime())) / 1000)}s before resending`,
      });
    }

    const rawToken = await generateE_VerificationToken(
      user.id,
      "SIGNUP",
      ONE_DAY_MS,
    );

    await sendVerificationEmail(
      user.email,
      user.name ?? "",
      rawToken,
      "/signup-verify-email",
      "SIGNUP",
    );

    res.json({ message: "Verification email resent" });
  } catch (err) {
    next(err);
  }
};

//* login

export const loginRequestController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { body } = req.validated ?? {};
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return next(new AppError("Auth", "Invalid email or password", 401));
    }

    if (!user.verified)
      return next(new AppError("Auth", "User not verified", 400));

    if (!user.password) {
      return next(
        new AppError(
          "Auth",
          "This account use social login, use Google/GitHub login",
          400,
        ),
      );
    }

    // rate-limit: check last login-type token
    const last = await prisma.verificationToken.findFirst({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    if (last && Date.now() - last.createdAt.getTime() < RESEND_COOLDOWN_MS) {
      const waitSec = Math.ceil(
        (RESEND_COOLDOWN_MS - (Date.now() - last.createdAt.getTime())) / 1000,
      );
      return res.status(429).json({
        message: `Please wait ${waitSec}s before resending`,
      });
    }

    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //   return next(new AppError("Auth", "Invalid email or Password", 401));
    // }

    const rawToken = await generateE_VerificationToken(
      user.id,
      "LOGIN",
      LOGIN_TOKEN_EXPIRY_MS,
    ); // for mail verify

    // const refreshToken = generateRefreshToken(user.id);

    // await prisma.refreshToken.create({
    //   data: {
    //     token: refreshToken,
    //     userId: user.id,
    //     expiresAt: new Date(Date.now() + 7 * 86400000),
    //     revoked: false,
    //   },
    // });

    await sendVerificationEmail(
      user.email,
      user.name ?? "",
      rawToken,
      "/login-verify-email",
      "LOGIN",
    );

    res.status(201).json({
      message: "Login code sent to your email!",
      userId: user.id,
    });
  } catch (err) {
    next(err);
  }
};

export const resendLoginCodeController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { body } = req.validated ?? {};
    const { email } = body;
    if (!email) {
      return next(new AppError("Auth", "Email Required", 400));
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return next(
        new AppError(
          "Auth",
          "user not found, try signup again or try check email again",
          404,
        ),
      );
    }

    if (!user.verified)
      return next(
        new AppError(
          "Auth",
          "user is unverified please verify your account and complete your signup then try to login",
          400,
        ),
      );

    const last = await prisma.verificationToken.findFirst({
      where: { userId: user.id, type: "LOGIN" },
      orderBy: { createdAt: "desc" },
    });

    if (last && Date.now() - last.createdAt.getTime() < RESEND_COOLDOWN_MS) {
      return next(
        new AppError(
          "Auth",
          `Please wait ${Math.ceil((RESEND_COOLDOWN_MS - (Date.now() - last.createdAt.getTime())) / 1000)}s before resending`,
          429,
        ),
      );
    }

    const rawToken = await generateE_VerificationToken(
      user.id,
      "LOGIN",
      LOGIN_TOKEN_EXPIRY_MS,
    );

    await sendVerificationEmail(
      user.email,
      user.name ?? "",
      rawToken,
      "/login-verify-email",
      "LOGIN",
    );

    res.json({ message: "Verification email resent" });
  } catch (err) {
    next(err);
  }
};

export const LoginConfirmController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { query } = req.validated ?? {};
    const { token } = query;

    if (!token) return res.status(400).json({ message: "NO token provided" });

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

    if (!record) return next(new AppError("Auth", "Invalid token", 400));
    if (record.used)
      return next(new AppError("Auth", "Token already used", 400));
    if (record.type !== "LOGIN")
      return next(new AppError("Auth", "Token type mismatch", 400));
    if (record.expiresAt < new Date())
      return next(new AppError("Auth", "Token expired", 400));

    // mark used
    await prisma.verificationToken.update({
      where: { id: record.id },
      data: { used: true },
    });

    // issue token
    // const accessToken = generateAccessToken(record.userId)
    // const user = record.user;
    // const latestVerificationToken = await prisma.refreshToken.findFirst({
    //   where: { userId: user.id },
    //   orderBy: {
    //     createdAt: "desc",
    //   },
    // });

    // if (!latestVerificationToken)
    //   return next(new AppError("Auth", "latest token not found", 400));
    // if (latestVerificationToken.revoked)
    //   return next(new AppError("Auth", "Token has been revoked", 400));
    // if (latestVerificationToken.expiresAt < new Date())
    //   return next(new AppError("Auth", "token has expired", 400));

    const accessToken = generateAccessToken(record.userId);
    const refreshToken = generateRefreshToken(record.userId);

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: record.userId,
        expiresAt: new Date(Date.now() + 7 * 86400000),
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
      expires: new Date(Date.now() + 7 * 86400000),
    });

    return res.json({ accessToken, message: "Login Completed" });
  } catch (err) {
    next(err);
  }
};

export const loginRequestOTPController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email, password } = req.validated?.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return next(new AppError("Auth", "User not found in db", 401));
    if (!user.password)
      return next(new AppError("Auth", "No password in this user", 401));
    if (!user.verified)
      return next(new AppError("Auth", "Email not verified", 403));

    await waitAMinBroBeforeSendingEmail(user.id, "LOGIN");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return next(new AppError("Auth", "Invalid credentials", 401));

    const code = await createE_OTP(user.id, "LOGIN", 10 * ONE_MIN_MS);
    await sendOTPEmail(user.email, code, "LOGIN");

    return res.status(202).json({
      message: "Verification code sent to email",
    });
  } catch (err) {
    next(err);
  }
};

export const verifyLoginOTPController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email, code } = req.validated?.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return next(new AppError("Auth", "Invalid request", 400));
    await waitAMinBroBeforeSendingEmail(user.id, "LOGIN");
    const hashed = hashE_OTP(code);

    const record = await prisma.verificationToken.findFirst({
      // where: {
      //   userId: user.id,
      //   token: hashed,
      //   type: "LOGIN",
      //   used: false,
      //   expiresAt: { gt: new Date() },
      // },

      where: {
        userId: user.id,
        type: "LOGIN",
        used: false,
        expiresAt: { gt: new Date() },
      },
    });

    if (!record) {
      return next(new AppError("Auth", "Invalid or expired code", 400));
    }
    if (!record?.locked)
      return next(
        new AppError("Auth", "Too many attempts. Request a new code", 429),
      );

    if (hashed !== record.token) {
      const attempts = record.attempts + 1;

      await prisma.verificationToken.update({
        where: { id: record.id },
        data: {
          attempts,
          locked: attempts >= MAX_ATTEMPTS, // if attempts is getter then MAX_ATTEMPTS then true
        },
      });
    }

    await prisma.verificationToken.update({
      where: { id: record.id },
      data: { used: true },
    });

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(Date.now() + 7 * ONE_DAY_MS),
    });

    return res.json({
      accessToken,
      message: "Login successful",
    });
  } catch (err) {
    next(err);
  }
};

export const resendLoginOTPController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email, password } = req.validated?.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password)
      return next(new AppError("Auth", "Invalid Email", 401));
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
    const code = await createE_OTP(user.id, "LOGIN", 10 * ONE_MIN_MS);
    await sendOTPEmail(user.email, code, "LOGIN");
    return res.status(202).json({
      message: "Verification Code sent to email",
    });
  } catch (err) {
    next(err);
  }
};
// ! -----------------------------------------------------

export const testDeleteByEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.delete({
      where: { email },
    });
    res.status(200).json({ user, message: "deleted success fully" });
  } catch (err) {
    next(err);
  }
};
