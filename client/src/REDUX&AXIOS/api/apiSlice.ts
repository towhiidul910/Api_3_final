// client\src\REDUX&AXIOS\api\apiSlice.ts

import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithRefresh } from "./baseQuery";

type UserProfile = {
  id: string;
  name: string;
  email: string;
  createAt: Date;
};
type UploadGalleryResponse = {
  message: string;
  cloudUrls: string[];
};

export type getGalleryImageControllerResponse = {
  name: string,
  email: string,
  images: {
    id: string,
    imageUrl: string,
    order: number
  }[]
}

type UserProfileWithAvatar = {
  // res.json(user) // in server user = {id: , name: ... etc} so {id: , name: ... etc}
  // user: { // res.json({user})  // {user =  {id: , name: ... etc}}
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createAt: Date;
  // };
};

type Signup = {
  name: string;
  email: string;
  password: string;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  tagTypes: ["UserProfile", "User"],
  endpoints: (builder) => ({
    loadUserProfile: builder.query<UserProfile, void>({
      query: () => "/user/load-user-profile",
      providesTags: ["UserProfile"],
    }),
    getUserByEmail: builder.query<UserProfileWithAvatar, string>({
      query: (email) => ({
        url: "/user/get-by-email",
        method: "GET",
        params: { email },
      }),
      providesTags: ["UserProfile"],
    }),
    //* ---!POST AUTH---
    signup: builder.mutation<{ message: string; userId: string }, Signup>({
      query: (body) => ({
        url: "/user/out-box/signup-request-otp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["UserProfile"],
    }),
    verifySignup: builder.mutation<{ message: string }, { token: string }>({
      query: ({ token }) => ({
        url: "/user/out-box/signup-confirm-otp",
        method: "POST",
        params: { token },
      }),
    }),
    resendVerificationSignupEmail: builder.mutation<
      { message: string; userId: string },
      { email: string }
    >({
      query: (body) => ({
        url: "/user/out-box/signup-resend-otp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["UserProfile"],
    }),
    login: builder.mutation<
      { message: string; userId: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/user/out-box/login-request-otp",
        method: "POST",
        body,
      }),
    }),
    loginConfirm: builder.mutation<
      { accessToken: string; message: string },
      { token: string; userId: string }
    >({
      query: (body) => ({
        url: "/user/out-box/login-confirm-Too-Many-Req-otp",
        method: "POST",
        body,
      }),
    }),
    resendLoginOTP: builder.mutation<
      { message: string; userId: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/user/out-box/login-resend-otp",
        method: "POST",
        body,
      }),
    }),

    // ---- the query
     uploadGalleryImages: builder.mutation<UploadGalleryResponse, FormData>({
      query: (formData) => ({
        url: "/upload/createGImagesController",
        method: "POST",
        body: formData
      }), 
      invalidatesTags: ["User"]
    }),
    getGalleryImages: builder.query<getGalleryImageControllerResponse, void>({
      query: () => ({
        url: "/upload/getGalleryImageController",
        method: "GET"
      }),
      providesTags: ["User"]
    }),
    deleteGalleryImage: builder.mutation<void, string>({
      query: (imageId) => ({
        url: `/upload/deleteGalleryImageController/${imageId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["User"]
    })
  }),
});

export const {
  useLoadUserProfileQuery,
  useLazyLoadUserProfileQuery,
  useSignupMutation,
  useVerifySignupMutation,
  useResendVerificationSignupEmailMutation,
  useLoginMutation,
  useLoginConfirmMutation,
  useResendLoginOTPMutation,
  useGetUserByEmailQuery,
  // --- query's
  useUploadGalleryImagesMutation,
  useGetGalleryImagesQuery,
  useDeleteGalleryImageMutation
} = api;

// notes\redux-rtk-notes.md