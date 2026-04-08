import z, { string } from "zod";

const stringField = (field: string) =>
  z.string().trim().min(1, `${field} is required`).trim();

const numberField = (field: string) =>
  z.number().min(1, `${field} must be number`);

const optionalString = (field: string) =>
  z.string(`${field} mast be a string`).trim().min(1).optional();

const emailSchema = z
  .string()
  .email("Invalid email address")
  .transform((val) => val.toLocaleLowerCase());

const urlSchema = z
  .string()
  .url("Must be a valid url")
  .or(
    z
      .string()
      .startsWith("www.", "Must be starts with www.")
      .endsWith(".com", "Must be ends with .com"),
  )
  .optional();

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");

const providerSchema = z.enum(["local", "google", "github"]);

export const signUpSchema = z.object({
  name: stringField("Name"),
  email: emailSchema,
  password: passwordSchema,
  language: optionalString("Language"),
});

export const bodySignUpSchema = z.object({
  body: signUpSchema,
});

// export const queryString = z.object({
//   token: z.string()
// })

// export const bodyQuerySignUpVerifySchema = z.object({
//   body: signUpSchema,
//   query: queryString,
// })

export const verifyQuerySchema = z.object({
  query: z.object({
    token: z.string(),
  }),
});

export const emailBodySchema = z.object({
  body: z.object({
    email: emailSchema,
  }),
});
export const emailCodeBodySchema = z.object({
  body: z.object({
    email: emailSchema,
    code: stringField("Code")
  }),
});
export const tokenBodySchema = z.object({
  body: z.object({
    token: stringField("Code")
  }),
});
export const tokenBodyTooManyTrySchema = z.object({
  body: z.object({
    token: stringField("Code"),
    userId: stringField("User ID")
  }),
});

export const loginSchema = z.object({
  email: emailSchema,
  password: stringField("Password"),
});

export const bodyLoginSchema = z.object({
  body: loginSchema,
});


export const loadUserProfileSchema = z.object({
  headers: z.object({
    authorization: z
      .string()
      .startsWith("Bearer ", "Authorization must start with Bearer "),
  }),
});


export const oauthSchema = z.object({
  provider: providerSchema,
  providerId: stringField("Provider ID"),
  email: emailSchema.optional(),
  name: stringField("Name"),
});

export const addressSchema = z.object({
  street: stringField("Street"),
  city: stringField("City"),
  zipcode: stringField("Zipcode"),
});

export const createPostSchema = z.object({
  title: stringField("Title").max(200),
  body: stringField("Body"),
});

export const createCommentSchema = z.object({
  postId: z.number(),
  name: stringField("Name"),
  email: emailSchema,
  body: stringField("Comment"),
});

export const refreshTokenSchema = z.object({
  token: stringField("Token"),
});

export const sessionSchema = z.object({
  expiresAt: z.date(),
});

export const testSchema = z.object({
  body: z.object({
    title: stringField("Title").min(4, "At least 4 letter required"),
    age: numberField("Age"),
  }),

  params: z.object({
    id: stringField("ID"),
  }),

  query: z.object({
    search: optionalString("Search"),
    sort: stringField("Sort"),
    page: stringField("Page"),
  }),
});
