import { z } from "zod";

// ✅ Params Schema (URL parameters)
export const userParamsSchema = z.object({
  fakeId: z.string().cuid("Invalid user ID"), // comes from req.params
});

// ✅ Body Schema (PATCH data) //! Remember we fakeId is in speared schema "userParamsSchema"
const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  language: z.string().min(1, "Language is required"),
  bio: z.string().min(1, "Bio is required"),
  version: z.coerce.number(),
});

// ✅ Make a new schema where version is just number
export const userSchemaWithStrictVersion = userSchema.extend({
  version: z.number(), // override ONLY version
}).partial();

export const userBodySchema = userSchema;

export const userBodySchemaOptional = userSchema.partial();

// Query schemas (optional fields for filtering/searching)

export const userQuerySchemaOptional = userSchema.partial();

// Combine schemas for any route
export const createUserSchemaForRoute = z.object({
  body: userBodySchema,
});

export const updateUserSchemaForRoute = z.object({
  params: userParamsSchema,
  body: userBodySchemaOptional,
});

export const getUserSchemaForRoute = z.object({
  params: userParamsSchema.optional(),
  query: userQuerySchemaOptional.optional(),
});

export const deleteUserSchemaForRoute = z.object({
  params: userParamsSchema,
});

// export const userSchemaForRoute= z.object({
//     params: userParamsSchema,
//     body: userBodySchemaOptional,
//     query: userQuerySchemaOptional
// })

export type UserParams = z.infer<typeof userParamsSchema>;
export type UserBodyOptionalInputType = z.infer<typeof userBodySchemaOptional>;
export type UserBodyOptionalInputTypeRes = z.input<typeof userBodySchemaOptional>;
export type userSchemaWithStrictVersionType = z.infer<typeof userSchemaWithStrictVersion>
export type UpdateUserInput = z.infer<typeof userSchema>;
export type UserParamsInput = z.infer<typeof userParamsSchema>;
