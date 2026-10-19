import { RequestHandler } from "express";
import { AppError } from "../../utils/AppError";
import jwt from "jsonwebtoken";
import prisma from "../../lib/db";
import { generateAccessToken, generateE_HashToken } from "./token.service";

export const accessMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("auth header", authHeader);
    if (!authHeader?.startsWith("Bearer ")) {
      throw new AppError("Auth", "Missing token", 401, { code: "AUTH_ERROR" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      throw new AppError("Auth", "Token missing after Bearer", 401, {
        code: "AUTH_ERROR",
      });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    }; // payload or decoded

    req.user = { id: payload.userId };

    next();
  } catch (err) {
    next(err);
  }
};

//* sessionCheck is for, client route protection, it check if the refresh token exist and if it valid or not, this connected to nextjs middleware
// no need for
// ❌ generate access token
// ❌ rotate refresh token
// ❌ modify authentication
export const sessionCheck: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      throw new AppError("Auth", "No refresh token", 401);
    }

    const hashedToken = generateE_HashToken(token);

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
      throw new AppError("Auth", "Invalid session", 401);
    }

    //* -------------
    const accessToken = generateAccessToken(tokenExist.userId);

    console.log(accessToken)

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/"
    });
    //* -------------

    res.status(200).json({
      authenticated: true,
    });
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
    const hashedToken = generateE_HashToken(token);
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

    console.log("accessToken sended to the clinet", accessToken);

    res.cookie("accessToken", accessToken, {
      // This is a http only cookie, so javascript cant read that:
      //! no: console.log(document.cookie);
      //* yes: fetch(_URL, {credentials: "include"})
      // added this bc the EventSource can't have header so cant send barrier accessToken, but can send cookie
      //! I didn't this in login controller
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    // res.cookie("session", "1", {
    //   // so this session cookie can be access byk javascript
    //   //* yes: console.log(document.cookie);
    //   //* yes: fetch(_URL, {credentials: "include"})
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   path: "/", // visible to all Next.js routes
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 day same as refresh token lifetime
    // });

    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
};
