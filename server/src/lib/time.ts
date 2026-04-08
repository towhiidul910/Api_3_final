import express from 'express';
import { AppError } from "../utils/AppError";
import prisma from "./db";

// time.ts
export const ONE_MIN_MS = 60 * 1000;
export const ONE_HOUR_MS = 60 * ONE_MIN_MS;
export const ONE_DAY_MS = 24 * ONE_HOUR_MS;


export const waitAMinBroBeforeSendingEmail = async (
  userId: string,
  type: "LOGIN" | "SIGNUP"
) => {
  const last = await prisma.verificationToken.findFirst({
    where: { userId, type },
    orderBy: { createdAt: "desc" },
  });

  if (last) {
    const elapsed = Date.now() - last.createdAt.getTime();

    if (elapsed < ONE_MIN_MS) {
      const remaining = Math.ceil((ONE_MIN_MS - elapsed) / 1000);

      throw new AppError(
        "Auth",
        `Please wait ${remaining}s before resending`,
        429
      );
    }
  }
};
