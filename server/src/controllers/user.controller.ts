import { RequestHandler } from "express";
import prisma from "../lib/db";
import { AppError } from "../utils/AppError";
import { stringify } from "querystring";

export const userProfile: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.user?.id;

    if (!userId) throw new AppError("Auth", "user does not exist", 401);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        avatarUrl: true,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUserByEmail: RequestHandler = async (req, res, next) => {
  try {
    // console.log(req.body, req.params, req.query);
    const email = req.query.email as string;
    if (!email) throw new AppError("Upload", "Email is not here", 400);
    const user = await prisma.user.findFirst({
      where: { email },
    });

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
