import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import prisma from "../../lib/db";
import crypto from "crypto";
import {
  createVerificationToken,
  sendVerificationEmail,
} from "./user.email.verification.controller";

export const signupController: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req.validated ?? {};
    const { name, email, password } = body;

    const emailExists = await prisma.user.findUnique({ where: { email } });
    if (emailExists) {
      return res.status(409).json({ message: "Email already registered" });
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

    const rawToken = await createVerificationToken(user.id);
    const mail = await sendVerificationEmail(user.email, user.name, rawToken); // don't return mail

    res.status(201).json({
      message: "User send verification token!",
      userId: user.id,
      user,
      mail,
    });
  } catch (err) {
    next(err);
  }
};

export const verifyEmailController: RequestHandler = async (req, res, next) => {
  try {
    const { query } = req.validated ?? {};
    const { token } = query;
    // const token = String(req.query.token ?? "");
    if (!token) return res.status(400).json({ message: "Token required" });

    const hashed = crypto.createHash("sha256").update(token).digest("hex");

    const record = await prisma.verificationToken.findUnique({
      where: { token: hashed },
    });

    if (!record)
      return res.status(400).json({ message: "Invalid or expired token" });
    if (record.used)
      return res.status(400).json({ message: "Token already used" });
    if (record.expiresAt < new Date())
      return res.status(400).json({ message: "Token expired" });

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

    // Redirect to front-end success page or send JSON
    return res.json({ message: "Email verified successfully" });
  } catch (err) {
    next(err);
  }
};

export const getVerifiedUser: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email, verified: true },
    });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
