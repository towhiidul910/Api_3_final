import { randomUUID } from "crypto";
import { ErrorRequestHandler, RequestHandler } from "express";

export const GlobalErrorHandler: ErrorRequestHandler = (
  err: any,
  req,
  res,
  next
) => {
  console.log("🌎 Global Error Handler", err);

  let statusCode = err.statusCode || 500;

  const response = {
    success: false,
    error: {
      errorId: err.errorId || randomUUID(),
      from: err.from || "unknown",
      time: new Date().toLocaleDateString(),
      name: err.name,
      message: err.message || "Internal server Error",
      statusCode,
      isOperational: err.isOperational ?? false,
      metaFromDBError: err.metaFromDBError,
      field: err.field,
      details: err.details,
      code: err.code
    },
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  };
  return res.status(statusCode).json(response);
};
