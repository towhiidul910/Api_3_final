// client\src\REDUX&AXIOS\api\apiSlice.ts

// the store -> // client\src\REDUX\features\store.ts

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

// --- video upload ---
type VideoSingedUrlResponse = {
  data: {
    timestamp: string;
    signature: string;
    folder: string;
    cloudName: string;
    apiKey: string;
  };
};

type SaveVideoArg = {
  videoUrl: string;
  videoPublicId: string;
  duration?: number;
  zone?: "zone1" | "zone2" | "zone3";
};

type SaveVideoResponse = {
  data: {
    id: string;
    videoUrl: string;
    thumbnailUrl: string | null;
    duration: number | null;
    order: number;
    zone: string;
  };
};

// -- get Video
type GetVideosResponse = {
  data: {
    id: string;
    videoUrl: string;
    thumbnailUrl: string | null;
    duration: number | null;
    title: string | null;
    order: number;
    zone: string;
    createAt: string;
  }[];
};

type GetMuxVideosResponse = {
  data: {
    id: string;
    playbackId: string;
    title: string | null;
    duration: number | null;
    order: number;
    status: string;

    createdAt: string;
    thumbnailUrl: string | null; // ✅ add this
  }[];
};

type GetMuxUploadUrlResponse = {
  data: {
    uploadUrl: string;
    uploadId: string;
    videoId: string;
  };
};

type GetMuxUploadUrlArg = {
  title?: string;
};

export type MuxStatus =
  | "video-processing"
  | "video-ready"
  | "video-error"
  | "sse-connected";

export type MuxSSEMessageMV = {
  status: MuxStatus;
  videoId: string;
};

type MuxVideoStatusMV3 = "video-processing" | "video-ready" | "video-error";

type MuxSSEMessageMV3 = {
  status: MuxVideoStatusMV3;
  videoId: string;
};

type MuxSSEStatusesMV3 = Record<string, MuxVideoStatusMV3>;

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  tagTypes: ["UserProfile", "User", "MuxVideos"],
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
    //* --- video upload ---
    //* --- get Videos ---
    getVideoSignedUrl: builder.query<VideoSingedUrlResponse, void>({
      query: () => ({
        url: "/upload/video/signed-url",
        method: "GET",
      }),
    }),

    //* --- upload ---
    saveVideo: builder.mutation<SaveVideoResponse, SaveVideoArg>({
      query: (body) => ({
        url: "/upload/video/save",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // --- get videos  ---
    getVideos: builder.query<GetVideosResponse, void>({
      query: () => ({
        url: "/upload/video/getAll",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    // --- Delete ---
    deleteVideo: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/upload/video/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    // -- using mux ---
    getMuxVideos: builder.query<GetMuxVideosResponse, void>({
      query: () => ({
        url: "/upload/mux/videos",
        method: "GET",
      }),
      providesTags: ["MuxVideos"],
    }),

    getMuxUploadUrl: builder.mutation<
      GetMuxUploadUrlResponse,
      GetMuxUploadUrlArg
    >({
      query: (body) => ({
        url: "/upload/mux/upload-url",
        method: "POST",
        body,
      }),
      invalidatesTags: ["MuxVideos"],
    }),
    deleteMuxVideo: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/upload/mux/video/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MuxVideos"],
    }),
    updateMuxThumbnail: builder.mutation<
      { data: { id: string; thumbnailUrl: string } },
      { id: string; thumbnailUrl: string; thumbnailPublicId: string }
    >({
      query: ({ id, thumbnailUrl, thumbnailPublicId }) => ({
        url: `/upload/mux/video/${id}/thumbnail`,
        method: "PATCH",
        body: { thumbnailUrl, thumbnailPublicId },
      }),
      invalidatesTags: ["MuxVideos"],
    }),
    // signed playback
    getMuxSignedToken: builder.query<{ data: { token: string } }, string>({
      query: (id) => ({
        url: `/upload/mux/video/${id}/token`,
        method: "GET",
      }),
    }),
    getMuxSignedUploadUrl: builder.mutation<
      GetMuxUploadUrlResponse,
      GetMuxUploadUrlArg
    >({
      query: (body) => ({
        url: "/upload/mux/upload-signed-url-3",
        method: "POST",
        body,
      }),
    }),
    getMuxPlaybackToken: builder.query<{ data: { token: string } }, string>({
      query: (id) => ({
        url: `/upload/mux/video/${id}/PlaybackToken`,
        method: "GET",
      }),
    }),
    deleteMuxVideoController2: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/upload/mux/video/deleteMuxVideoController3/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MuxVideos"],
    }),
    // SSE
    testSSE2: builder.query<unknown, void>({
      query: () => ({
        url: "/sse/upload/test2-sse",
        method: "GET",
      }),
    }),
    testSSE22: builder.query<string[], void>({
      queryFn: () => ({ data: [] }),

      keepUnusedDataFor: 0, // without this the

      async onCacheEntryAdded(_arg, { updateCachedData, cacheEntryRemoved }) {
        const eventSource = new EventSource(
          "http://localhost:3002/sse/upload/test5-sse",
          {
            withCredentials: true,
          },
        );

        eventSource.onmessage = (event) => {
          updateCachedData((draft) => {
            draft.push(event.data);
          });
        };

        await cacheEntryRemoved;

        eventSource.close();
      },
    }),

    muxSSEMV2: builder.query<MuxSSEMessageMV | null, void>({
      queryFn: () => ({
        data: null,
      }),

      keepUnusedDataFor: 0, // without this the

      async onCacheEntryAdded(
        _arg,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch },
      ) {
        await cacheDataLoaded;

        const eventSource = new EventSource(
          "http://localhost:3002/sse/upload/muxSSEControllerMV",
          {
            withCredentials: true,
          },
        );

        eventSource.addEventListener("sse-connected", (event) => {
          const message = JSON.parse((event as MessageEvent).data);

          const { status, videoId } = message.data as MuxSSEMessageMV;

          updateCachedData(() => ({
            status,
            videoId,
          }));
        });

        eventSource.addEventListener("video-status", (event) => {
          const message = JSON.parse((event as MessageEvent).data);

          const { status, videoId } = message.data as MuxSSEMessageMV;

          // console.log("Received video status:", status, videoId);

          updateCachedData(() => ({
            status,
            videoId,
          }));

          if (status === "video-ready" || status === "video-error") {
            dispatch(api.util.invalidateTags(["MuxVideos"]));
          }
        });

        eventSource.onerror = (err) => {
          console.error("Mux SSE error:", err);
        };

        await cacheEntryRemoved;
        eventSource.close();
      },
    }),
    MuxSSEMV3: builder.query<MuxSSEStatusesMV3, void>({
      queryFn: () => ({ data: {} }),

      async onCacheEntryAdded(
        _arg,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch },
      ) {
        await cacheDataLoaded;

        const eventSource = new EventSource(
          "http://localhost:3002/sse/upload/muxSSEControllerMV",
          {
            withCredentials: true,
          },
        );

        console.log("eventSource from MuxSSEMV3 😂:", eventSource);

        eventSource.addEventListener("sse-connected", (event) => {
          console.log("SSE connected:", (event as MessageEvent).data);
        });

        eventSource.addEventListener("video-status", (event) => {
          try {
            const message = JSON.parse((event as MessageEvent).data) as {
              data: MuxSSEMessageMV3;
            };

            console.log("message 😂", message);

            const { status, videoId } = message.data;

            updateCachedData((draft) => {
              draft[videoId] = status;
            });

            if (status === "video-ready" || status === "video-error") {
              dispatch(api.util.invalidateTags(["MuxVideos"]));
            }
          } catch (error) {
            console.error("Failed to parse Mux SSE event:", error);
          }
        });

        eventSource.onerror = (error) => {
          console.error("Mux SSE error:", error);
        };

        await cacheEntryRemoved;
        eventSource.close();
      },
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
  useCleanupFailedUploadsControllerMutation,
  // -- direct video upload
  useLazyGetVideoSignedUrlQuery,
  useSaveVideoMutation,
  useGetVideosQuery,
  useDeleteVideoMutation,
  // --- mux video upload ---
  useGetMuxVideosQuery,
  useGetMuxUploadUrlMutation,
  useDeleteMuxVideoMutation,
  useUpdateMuxThumbnailMutation,
  useLazyGetMuxSignedTokenQuery,
  useGetMuxSignedUploadUrlMutation,
  useLazyGetMuxPlaybackTokenQuery,
  useDeleteMuxVideoController2Mutation,
  // ---- SSE ----
  useTestSSE2Query,
  useTestSSE22Query,
  useMuxSSEMV2Query,
  useMuxSSEMV3Query,
} = api;

// notes\redux-rtk-notes.md
