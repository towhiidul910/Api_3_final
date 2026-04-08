
import { RequestHandler } from "express";
import prisma from "../../lib/db";
import { transporter } from "../../lib/mailer";
import { generateE_HashToken, generateE_RawToken } from "./token.service";
import { Prisma } from "../../generated/prisma/client";

const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000; //24 h
const RESEND_COOLDOWN_MS = 60 * 1000; // 1 min
const CLIENT_URL = process.env.CLIENT_URL ?? "http://localhost:3000";


export async function generateE_VerificationToken(userId: string, type: "SIGNUP" | "LOGIN", expiryMs = 24 * 60 * 60 * 1000) {
 

  const rawToken = generateE_RawToken();
  const hashedToken = generateE_HashToken(rawToken);
  const expiresAt = new Date(Date.now() + expiryMs);

  await prisma.verificationToken.create({
    data: {
      token: hashedToken,
      userId,
      type,
      expiresAt,
      locked: false,
      attempts: 0
    },
  });

   // remove old token
  await prisma.verificationToken.deleteMany({
    where: { userId, type, used: false, expiresAt: { lt: new Date() } },
  });

  return rawToken;
}
export async function generateOutBoxE_VerificationToken(tx: Prisma.TransactionClient, userId: string, type: "SIGNUP" | "LOGIN", expiryMs = 24 * 60 * 60 * 1000) {
 

  const rawToken = generateE_RawToken();
  const hashedToken = generateE_HashToken(rawToken);
  const expiresAt = new Date(Date.now() + expiryMs);

  await tx.verificationToken.create({
    data: {
      token: hashedToken,
      userId,
      type,
      expiresAt,
      locked: false,
      attempts: 0
    },
  });

   // remove old token
  await tx.verificationToken.deleteMany({
    where: { userId, type, used: false, expiresAt: { lt: new Date() } },
  });

  return rawToken;
}


export const sendVerificationEmail = async (
    toEmail: string,
    userName: string,
    rawToken: string,
    VERIFY_PATH: "/signup-verify-email" | "/login-verify-email",
    tokenType: "SIGNUP" | "LOGIN"
) => {
    const verifyUrl = `${CLIENT_URL}${VERIFY_PATH}?token=${rawToken}`

    const expiryText = tokenType === "LOGIN" ? "This code expires in 1- min" : "This link will expires in 24 hours"
    const actionText = tokenType === "LOGIN" ? "login" : "verify your email to sign up"
    const linkText = tokenType === "LOGIN" ? "Complete login" : "Verify my email to sign up"

    const html = `
     <div style="font-family: Arial, sans-serif; line-height:1.5;">
      <h2>Verify your email</h2>
      <p>Hi ${userName || "there"},</p>
      <p>Click the link below to ${actionText}.</p>
      <p><a href="${verifyUrl}">${linkText}</a></p>
      <p>If the link doesn't work, copy-paste this URL into your browser:</p>
      <pre>${verifyUrl}</pre>
      <p>${expiryText}</p>
      <hr />
      <small>If you didn't request this, ignore this email.</small>
    </div>
    `

      await transporter.sendMail({
        from: process.env.EMAIL,
        to: toEmail,
        subject: tokenType === "LOGIN" ? "YOUR LOGIN CODE" : "verify your email",
        html
      })
    // if (VERIFY_PATH === "/signup-verify-email") {
    //     await transporter.sendMail({
    //         from: process.env.EMAIL,
    //         to: toEmail,
    //         subject: 'verify your email for signup',
    //         html: htmlSignup
    //     })
    // }
    // if (VERIFY_PATH === "/login-verify-email") {
    //     await transporter.sendMail({
    //         from: process.env.EMAIL,
    //         to: toEmail,
    //         subject: 'verify your email for login',
    //         html: htmlLogin
    //     })
    // }
}

export async function sendOTPEmail(email:string, code: string, purpose: "LOGIN" | "SIGNUP") {
  const text = purpose === "LOGIN" ? "Use the code below to complete your login." : "Use the code below to verify your email"

  await transporter.sendMail({
    to: email,
    from: process.env.EMAIL,
    subject: "Your verification code",
    html: `  <h2>${text}</h2>
      <p style="font-size: 24px; letter-spacing: 4px;">
        <strong>${code}</strong>
      </p>
      <p>This code expires in 10 minutes.</p>
      <small>If you didn’t request this, ignore this email.</small>`
  })
}





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//* crypto = https://chatgpt.com/s/t_697e021d4b6481919557365fd9cbdfc1
