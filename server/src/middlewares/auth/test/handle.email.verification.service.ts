import crypto from "crypto";
import { RequestHandler } from "express";
import prisma from "../../../lib/db";
import { transporter } from "../../../lib/mailer";

const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000; //24 h
const RESEND_COOLDOWN_MS = 60 * 1000; // 1 min
const SERVER_URL = process.env.SERVER_URL ?? "http://localhost:3000";
// const VERIFY_PATH = "/signup-verify-email";

export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function createVerificationToken(userId: string) {
  // remove old unused tokens
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
    },
  });

  return rawToken;
}

export const sendVerificationEmail = async (
  toEmail: string,
  userName: string,
  rawToken: string,
  VERIFY_PATH: "/signup-verify-email" | "/login-verify-email",
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
    </div>
    `;

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: toEmail,
    subject: "verify your email",
    html,
  });
};







// test get all users
export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    //   const verifiedUsers = await prisma.user.findMany({
    //     where: { verified: true },
    //   });

    //   const unVerifiedUsers = await prisma.user.findMany({
    //     where: {verified: false}
    //   })

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        verified: true,
      },
    });

    const verifiedUsers = users.filter((u) => u.verified);
    const unVerifiedUsers = users.filter((u) => !u.verified);

    res.status(200).json({ verifiedUsers, unVerifiedUsers });
  } catch (err) {
    next(err);
  }
};
