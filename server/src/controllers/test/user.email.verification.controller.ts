import express, { RequestHandler } from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import prisma from "../../lib/db";
import { transporter } from "../../lib/mailer";

const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours
const RESEND_COOLDOWN_MS = 60 * 1000; // 1 minute between resends (adjust as needed)
const SERVER_URL = process.env.SERVER_URL ?? "http://localhost:3000"; // change for prod
const VERIFY_PATH = "/verify-email"; // route that will handle verification
export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function createVerificationToken(userId: string) {
  // remove old unused tokens optionally
  await prisma.verificationToken.deleteMany({
    where: { userId, used: false, expiresAt: { lt: new Date() } },
  });

  const rawToken = crypto.randomBytes(48).toString("hex");
  const hashed = hashToken(rawToken);

  const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MS);

  await prisma.verificationToken.create({
    data: {
      token: hashed,
      userId,
      expiresAt,
      locked: false,
      type: "SIGNUP"
    },
  });

  return rawToken;
}

export const sendVerificationEmail = async (
  toEmail: string,
  userName: string,
  rawToken: string,
) => {
  const verifyUrl = `${SERVER_URL}${VERIFY_PATH}?token=${rawToken}`;

  const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.5;">
      <h2>Verify your email</h2>
      <p>Hi ${userName || "there"},</p>
      <p>Click the link below to verify your email address. This link expires in 24 hours.</p>
      <p><a href="${verifyUrl}">Verify my email</a></p>
      <p>If the link doesn't work, copy-paste this URL into your browser:</p>
      <pre>${verifyUrl}</pre>
      <hr />
      <small>If you didn't request this, ignore this email.</small>
    </div>`;

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: toEmail,
    subject: "Verify your email",
    html,
  });
};

/**
 * Controller to call after successful signup (create user)
 * - creates token, sends email
 */

export const sendVerificationOnSignup: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { userId, email, name } = req.body;

    const rawToken = await createVerificationToken(userId);
    await sendVerificationEmail(email, name ?? "", rawToken);

    res.status(201).json({ message: "Verification email sent" });
  } catch (err) {
    next(err);
  }
};

/**
 * Verification endpoint: GET /verify-email?token=...
 */

export const verifyEmailController: RequestHandler = async (req, res, next) => {
  try {
    const token = String(req.query.token ?? "");
    if (!token) return res.status(400).json({ message: "No token provided" });

    const hashed = hashToken(token);
    const record = await prisma.verificationToken.findUnique({
      where: { token: hashed },
      include: { user: true },
    });

    if (!record)
      return res.status(400).json({ message: "Invalid or expired token" });
    if (record.used)
      return res.status(400).json({ message: "Token already used" });
    if (record.expiresAt < new Date())
      return res.status(400).json({ message: "Token expired" });

    // Mark user verified and token used (do both in transaction)
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

    // Optionally delete other tokens for this user
    await prisma.verificationToken.deleteMany({
      where: { userId: record.userId, id: { not: record.id } },
    });

    // Redirect to frontend success page or respond JSON
    // res.redirect(`${FRONTEND_URL}/verify-success`);
    res.json({ message: "Email verified successfully" });
  } catch (err) {
    next(err);
  }
};

/**
 * Resend verification email
 * Body: { email }
 */

export const resendVerificationController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email } = req.body as { email?: string };
    if (email) return res.status(400).json({ message: "Email required" });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "Email Required" });

    // simple cooldown: check last token created
    const last = await prisma.verificationToken.findFirst({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    if (last && Date.now() - last.createdAt.getTime() < RESEND_COOLDOWN_MS) {
      return res
        .status(429)
        .json({
          message: `Please wait ${Math.ceil((RESEND_COOLDOWN_MS - (Date.now() - last.createdAt.getTime())) / 1000)}s before resending`,
        });
    }

    const rawToken = await createVerificationToken(user.id);
    await sendVerificationEmail(user.email, user.name ?? "", rawToken);

    res.json({ message: "Verification email resent" });
  } catch (err) {
    next(err);
  }
};

//1. create the transporter , service and auth in lib

//2. make hashToken function, it will create take a token and then return a hashed version of it using crypto

//3. createVerificationToken, it will create the token and details in db & it will return the raw token, that will be send in email so we can verify it
//3.1 remove old unused token , delete many verificationToken form db, where: userid, used: false, expired less then this time
//3.2 create a rawToken using crypto randomBytes(48) to sting hex
//3.3 hash the rawToken using hashToken(rawToken) that we create earlier
//3.4 expiresAt, when it suppose to expire 24H latter,
//3.5 create new verificationToken in db, data {hashedToken, userId, expireAt}
//3.6  then return rawToken

//4. sendVerificationEmail, it will send an email to the user mail with token  and the frontend url that we can use the token to
//4.1 crate the verifyUrl = `${server_url}${verify_path}?token${rawToken}` //?
//4.2 crate a nice html with all the details and data for mail to look good to user
//4.3 send the mail by using transporter that we created in lib , transporter.sendMail({from: , to: , subject: , html})

//5. now make a controller to sendVerificationOnSignup , it will send a verification Email on signup
//5.1 get the userId , email, name from the body
//5.2 crate a rawToken using crateVerificationToken(userId)
//5.3 sendVerificationEmail(email, name ?? "", rawToken)
//5.4 res.status(201).json({ message: "Verification email sent" });

//6. verifyEmailController , it will check if the token is eligible -> then it will verify the email -> delete used token from record -> redirect to the successPage in frontend
//6.1 take the token form query / url , the user suppose to click the link
//6.2 if token does not exist then status 400 and no token
//6.3 hashed the token using hashToken(token) function
//6.4 find the verificationToken in db (verificationToken table) prisma.verificationToken.findUnique where: {token: hashed}, include: {user: true}
//6.5 then run butch of checks like it the record exist , if record.used exist, it the record.expiresAt still bigger then current date (if it is expired or not)
//6.6 make a user verified and token used (make used true) (transaction means ✅ All queries succeed → commit ❌ One query fails → rollback (undo all previous ones)), we need to do both
//6.7 (Optional) delete tokens for this user, delete many where : userId: record.userId, id: {not: record.id} //?
//6.8 Redirect to frontend success page or respond JSON , res.redirect(`${FRONTEND_URL}/verify-success`); //?
//6.8 res.json({ message: "Email verified successfully" });

//7. resendVerificationController, resend verification email
//7.1 take the email form body
//7.2 find user by the email,
//7.3 check if the user exist or not
//7.4 simple cooldown check last token created , find first in verificationToken, where : userId: user.id orderBy: "decs", because we want the latest / last token only
//7.5 then check if last and (Date.now() - last.createAt.getTime()) < RESEND_COOLDOWN_MS (if now date and the time when the last verificationToken was crate are less then RESEND_COOLDOWN_MS which is 1min then wait the fuck up mf),  `because we want to send next email after 1 min we don't want to user to spam email` . if it is true then tell user to wait { message: `Please wait ${Math.ceil((RESEND_COOLDOWN_MS - (Date.now() - last.createdAt.getTime()))/1000)}s before resending` }
//7.6 then create a rawToken using createVerificationToken(user.id)
//7.7 then sendVerificationEmail using sendVerificationEmail(user.email, user.name ?? "", rawToken)
//7.8 res.json({message: "Verification email resent"})

//* still this point we are not creating the user
//* so this will send a link to the user email not a code that well enter in the frontend and click verify to verify the email, and
