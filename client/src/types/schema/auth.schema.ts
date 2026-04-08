import z, { string } from "zod";

const stringField = (field: string) =>
  z.string().trim().min(1, `${field} is required`).trim();


const emailSchema = z
  .string()
  .email("Invalid email address")
  .transform((val) => val.toLocaleLowerCase());


const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");


export const signUpSchema = z.object({ // ✅
  name: stringField("Name"),
  email: emailSchema,
  password: passwordSchema
});


export const loginSchema = z.object({ // ✅
  email: emailSchema,
  password: stringField("Password"),
});


export type SignupInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>