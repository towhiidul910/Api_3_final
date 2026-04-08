import { ErrorRequestHandler } from "express";
import { Prisma } from "../../generated/prisma/client";
import { DatabaseError } from "../../utils/dbErrorType";

export const dbErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return next(
          new DatabaseError(
            "Duplicate field value unique constraint",
            409,
            err.meta,
            err.meta?.target as string
          )
        );

      case "P2025":
        return next(
          new DatabaseError("Record not found for this given query", 404)
        );

      case "P2003":
        return next(new DatabaseError("Foreign key constrain failed", 400));
    }
  }

  return next(err)
};
