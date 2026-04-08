import { User } from "@/types/prismaTypes";
import { CreateUserInput } from "@/types/schema/UserForm";
import {
  UserBodyOptionalInputType,
  UserParamsInput,
} from "@/types/schema/zod.schema.for.patch.5";
import { userSchema } from "@/validation/userSchema";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface UserQuery {
  // why it is not a zod type
  limit?: number;
  page?: number;
  sortBy?: "name" | "language" | "createdAt" | "version";
  order?: "asc" | "desc";
  language?: string;
  minVersion?: number;
  maxVersion?: number;
  search?: string;
}

export const apiSliceZod = createApi({
  reducerPath: "zodApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    // Advance get users
    advanceGetUser: builder.query<User[], UserQuery>({
      query: (params) => {
        return {
          url: "users/advance/get",
          params, // -- why it is return , why params and how it string all the userQuery
        };
      },
    }),
    //Get Users
    simpleGetUsers: builder.query<User[], void>({
      query: () => "users/simple",
      providesTags: ["Users"],
    }),
    // post
    advanceZodPostUser: builder.mutation<User, Partial<CreateUserInput>>({
      query: (newUser) => ({
        url: "users/simple/zod5",
        method: "POST",
        body: newUser,
      }),
      transformResponse: (response: unknown) => userSchema.parse(response),
      invalidatesTags: ["Users"],
    }),
    //* ----------------

    signup: builder.mutation<void,{ name: string; email: string; password: string }> ({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body,
      }),
    }),

    login: builder.mutation< { accessToken: string },{ email: string; password: string }> ({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),
    refresh: builder.mutation<{ accessToken: string }, void>({
      query: () => ({
        url: "/user/refresh",
        method: "POST",
      }),
    }),
    // delete

    // put

    // patch
    SV3PatchUser: builder.mutation<  User,  { params: UserParamsInput; body: UserBodyOptionalInputType }>({
      query: ({ params, body }) => ({
        url: `users/simple/v3/${params.fakeId}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useLazySimpleGetUsersQuery,
  useAdvanceZodPostUserMutation,
  useSV3PatchUserMutation,
  useAdvanceGetUserQuery,
  useRefreshMutation,
  useLoginMutation,
  useSignupMutation
} = apiSliceZod;
