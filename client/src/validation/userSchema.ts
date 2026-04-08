import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  language: z.string().min(1, "Language is required"),
  bio: z.string().optional(),
  version: z.number().min(1, "Version must be at least 1"),
  fakeId: z.string().min(1, "fakeId is required"),
});

// Infer the TypeScript type from Zod
export type UserFormData = z.infer<typeof userSchema>;
