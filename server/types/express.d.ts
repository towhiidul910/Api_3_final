import "express";
import { ZodObject, z } from "zod";
import "express-session";

export type AnyZodObject = ZodObject<any, any, any>;


declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
      validated?: {
        body?: any;
        params?: any;
        query?: any;
        // we did not add header because: Headers are not business data, They’re huge, dynamic, and inconsistent, Only specific headers matter (like Authorization), Validating all headers adds noise, not safety, but we could if we want it's not illegal
      };
    }
  }
}

declare module "express-session" {
  interface SessionData {
    userId?: string; // now TypeScript knows this exists
  }
}

export {}