import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../utils/AppError";
import prisma from "../../lib/db";

export const authMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return next(new AppError("Auth", "Missing token", 401));
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    req.user = { id: payload.userId }; // attach the user.id request typing

    next();
  } catch (err) {
    next(new AppError("Auth", "Invalid token", 401));
  }
};

export const refreshController2: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWpzM2twcGwwMDAwNDQyaThra3NpeXlpIiwiaWF0IjoxNzY3MTAwMzQ5LCJleHAiOjE3Njc3MDUxNDl9.MmcXzPyfr45zHpA2EIy5ZHa_57qctyi2AcgnByvNhtg";

    if (!token) {
      throw new AppError("Auth", "No refresh token", 401);
    }

    const stored = await prisma.refreshToken.findUnique({
      where: { token },
    });

    if (!stored || stored.revoked || stored.expiresAt < new Date()) {
      res.send("Invalid refresh token");
      throw new AppError("Auth", "Invalid refresh token", 403);
    }

    const accessToken = jwt.sign(
      { userId: stored.userId },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" }
    );
    console.log(accessToken)
    // res.send({accessToken})
    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
};