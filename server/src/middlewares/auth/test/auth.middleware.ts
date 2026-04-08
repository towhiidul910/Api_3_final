import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { AppError } from "../../../utils/AppError";
// import { AppError } from "../errors/AppError";

export const requireAuth: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(
      new AppError("Auth", "Unauthorized aka No token in with request", 401),
    );
  }

  const token = authHeader.split(" ")[1]; // why this is where token stay what actually is authHeader
  const [header, payload, signature] = token.split(".");
  console.log({ header, payload, signature });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
      iat: number;
    };

    //, iat: number, exp: number

    console.log({ payload });
    req.user = { id: payload.userId }; //* we cant send a property in req that isn't include in the Request typing in express.d.ts

    next();
  } catch {
    return next(new AppError("Auth", "Invalid or expired token aka same", 401));
  }
};
