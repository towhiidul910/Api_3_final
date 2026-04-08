import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { AppError } from "../../utils/AppError";

export const zodErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const formattedError = err.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));

    const error = new AppError("Zod Error Handler", "Validation Failed", 400, {
      metaFromDBError: undefined,
      model: "ZodValidation",
      field: undefined,
      details: formattedError,
    });

    return res.status(400).json({
      success: false,
      error: {
        from: "ZodErrorHandler",
        message: error.message,
        statusCode: error.statusCode,
        isOperational: true,
        details: formattedError,
      },
    });
  }

  next(err);
};
