import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../../utils/AppError";
import prisma from "../../../lib/db";


// check accessToken
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

    req.user = { id: payload.userId };

    next();
  } catch (err) {
    next(err);
  }
};

export const refreshController: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;

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

    res.json({ accessToken });
  } catch (err) {
    next(err)
  }
};
