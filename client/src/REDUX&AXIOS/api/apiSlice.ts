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

type GImageDTO = {
  name: string;
  email: string;
  beforeReorder: number;
  afterReOrder: number;
  beforeReOrderImageUrl: string;
  afterReOrderImageUrl: string;
};
type GImageReorderDTOResponse = {
  message: string;
  GImageDTO: GImageDTO[];
};

export type getGalleryImageControllerResponse = {
  name: string;
  email: string;
  images: {
    id: string;
    imageUrl: string;
    order: number;
  }[];
};
export interface GImage {
  id: string;
  imageUrl: string;
  imagePublicId: string;
  userId: string;
  order: number;
  createdAt: string;
}
export interface ReorderGalleryResponse {
  message: string;
  beforeImage: GImage[];
  afterImages: GImage[];
}

export interface ReorderGalleryArg {
  id: string;
  order: number;
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

// ---- direct cloudinary uploader type -------
type SignedUrlResponse = {
  data: {
    timestamp: number;
    signature: string;
    folder: string;
    cloudName: string;
    apiKey: string;
  };
};

type SaveGImagesV2Response = {
  data: {
    name: string;
    email: string;
    images: {
      id: string;
      imageUrl: string;
      order: number;
      zone: string;
      createAt: string;
    };
  };
};

type SaveGImagesV2Arg = {
  images: { imageUrl: string; imagePublicId: string }[];
  zone: "zone1" | "zone2" | "zone3";
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
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    getGalleryImages: builder.query<getGalleryImageControllerResponse, void>({
      query: () => ({
        url: "/upload/getGalleryImageController",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    deleteGalleryImage: builder.mutation<void, string>({
      query: (imageId) => ({
        url: `/upload/deleteGalleryImageController/${imageId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    reorderGallery: builder.mutation<
      ReorderGalleryResponse,
      ReorderGalleryArg[]
    >({
      query: (images: { id: string; order: number }[]) => ({
        url: "/upload/recorderGalleryController",
        method: "PATCH",
        body: { images },
      }),
    }),
    reorderGallery2: builder.mutation<
      GImageReorderDTOResponse,
      ReorderGalleryArg[]
    >({
      query: (images) => ({
        url: "/upload/recorderGalleryController2",
        method: "PATCH",
        body: { images },
      }),
    }),
    // --------- direct client cloudinary upload ---------
    getGallerySignedUrl: builder.query<SignedUrlResponse, void>({
      query: () => ({
        url: "/upload/gallery/signed-url",
        method: "GET",
      }),
    }),
    saveGImageV2: builder.mutation<SaveGImagesV2Response, SaveGImagesV2Arg>({
      query: (body) => ({
        url: "/upload/gallery/save",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    cleanupFailedUploadsController: builder.mutation<
      { message: string },
      { publicIds: string[] }
    >({
      query: (body) => ({
        url: `/upload/gallery/failed/cleanup`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["User"],
    }),
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
  useDeleteGalleryImageMutation,
  useReorderGalleryMutation,
  useReorderGallery2Mutation,
  // -- direct
  useLazyGetGallerySignedUrlQuery,
  useSaveGImageV2Mutation,
  useCleanupFailedUploadsControllerMutation
} = api;

// notes\redux-rtk-notes.md
