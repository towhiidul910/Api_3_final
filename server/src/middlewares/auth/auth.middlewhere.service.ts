import { RequestHandler } from "express";
import { AppError } from "../../utils/AppError";
import jwt from "jsonwebtoken";
import prisma from "../../lib/db";
import { generateAccessToken, generateE_HashToken } from "./token.service";

export const accessMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("auth header", authHeader)
    if (!authHeader?.startsWith("Bearer ")) {
      throw new AppError("Auth", "Missing token", 401, { code: "AUTH_ERROR" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      throw new AppError("Auth", "Token missing after Bearer", 401, {code: "AUTH_ERROR"});
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    req.user = { id: payload.userId };

    next();
  } catch (err) {
    next(err);
  }
};

// refreshToken is to get new accessToken in headers
export const refreshToken: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      throw new AppError("Auth", "No refresh token please login", 401);
    }
    const hashedToken = generateE_HashToken(token)
    const tokenExist = await prisma.refreshToken.findUnique({
      where: {
        token: hashedToken,
      },
    });

    if (
      !tokenExist ||
      tokenExist.revoked ||
      tokenExist.expiresAt < new Date()
    ) {
      res.send("Invalid refresh token");
      throw new AppError("Auth", "Invalid refresh token", 403);
    }

    const accessToken = generateAccessToken(tokenExist.userId);

    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
};
