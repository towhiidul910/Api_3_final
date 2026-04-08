import { AppError } from "./AppError";

export class DatabaseError extends AppError {
  target?: string;

  constructor(
    message: string,
    statusCode: number,
    meta?: any,
    target?: string
  ) {
    super("DatabaseError", message || "Database Error", statusCode, {
      metaFromDBError: meta,
      field: target,
    });
    this.name = "Database Error";
  }
}
