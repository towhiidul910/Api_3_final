
export class AppError extends Error {
  from: string;
  statusCode: number;
  isOperational: boolean;
  code?: "DB_ERROR" | "AUTH_ERROR" | "VERIFY_ERROR";
  model?: string;
  field?: string;
  details?: object;
  metaFromDBError?: any;

  constructor(
    from: string,
    message: string,
    statusCode: number,
    option?: {
      code?: "DB_ERROR" | "AUTH_ERROR" | "VERIFY_ERROR";
      metaFromDBError?: any;
      model?: string;
      field?: string;
      details?: object;
    }
  ) {
    super(message);
    this.name = "App Error";
    this.statusCode = statusCode;
    this.isOperational = true;

    this.code = option?.code  // it is batter if not optional
    this.field = option?.field;
    this.metaFromDBError = option?.metaFromDBError;
    this.model = option?.model;
    this.from = from;
    this.details = option?.details;
    Error.captureStackTrace(this, this.constructor);
  }
}
