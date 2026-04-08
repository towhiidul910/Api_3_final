import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "Name required"),
  language: z.string().min(4, "Language required"),
  fakeId: z.string().min(1, "fakeId required"),
  bio: z.string().min(1, "Bio required"),
  version: z.coerce.number().min(0, "Version must be at least 0")
  .max(10, "Version cannot exceed 10") ,
 // Change this line to use z.number() instead of z.number().min(1, "Version must be at least 1")

});
export type CreateUserInput = z.input<typeof createUserSchema>;
export type CreateUserOutput = z.infer<typeof createUserSchema>;

// export const createUserSchema2 = z.object({
//   name: z.string().min(1, "Name required"),
//   language: z.string().min(1, "Language required"),
//   fakeId: z.string().min(1, "fakeId required"),
//   bio: z.string().min(1, "Bio required"),
//   version: z.number(),
//  // Change this line to use z.number() instead of z.number().min(1, "Version must be at least 1")

// });