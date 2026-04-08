import jwt from "jsonwebtoken";
import crypto from "crypto";
import bcrypt from "bcrypt";
import prisma from "../../lib/db";
export const generateAccessToken = (userId: string) => {
  //!
  return jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET!, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (userId: string) => {
  //!
  return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: "7d",
  });
};

export function generateE_HashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}
export function generateE_RawToken() {
  return crypto.randomBytes(48).toString("hex");
}

export function generateE_OTP(): string {
  // return Math.floor(100000 + Math.random() * 900000).toString();
  return crypto.randomInt(100000, 999999).toString(); //!
}

export function hashE_OTP(code: string): string {
  return crypto.createHash("sha256").update(code).digest("hex");
}

export async function hashU_Password(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function createE_OTP(
  userId: string,
  type: "LOGIN" | "SIGNUP",
  expiryMinutes: number,
) {
  const code = generateE_OTP();
  const hashed = hashE_OTP(code);

  const expiresAt = new Date(Date.now() + expiryMinutes);

  await prisma.verificationToken.create({
    data: {
      token: hashed,
      userId,
      type,
      expiresAt,
      locked: false,
    },
  });

  return code;
}
