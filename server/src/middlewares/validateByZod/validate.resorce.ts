// server\src\middlewares\validateByZod\validate.resorce.ts
import {  RequestHandler } from "express";
import { AnyZodObject } from "../../../types/express";
// import { AnyZodObject } from "../../types/express";



export const ValidateR =
  (schema: AnyZodObject): RequestHandler =>
  (req, res, next) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      return next(result.error);
    }

    req.validated = result.data;
    next();
  };
