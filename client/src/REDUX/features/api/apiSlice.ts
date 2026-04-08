import api from "@/lib/axios/api";
import { GetUserResponse } from "@/types/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

type ServerUser = {
  id: string;
  name: string;
  email: string;
  verified: string;
};

type GetAllUsersResponse = {
  verifiedUsers: ServerUser[];
  unVerifiedUsers: ServerUser[];
};
type UploadAvatarResponse = {
  message: string;
  cloudUrl: string;
};

export const apiR = createApi({
  reducerPath: "apiR",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["User", "Post"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<GetAllUsersResponse, void>({
      query: () => "/user/getAllUsers",
      providesTags: ["User"],
    }),
    UploadAvatar: builder.mutation<UploadAvatarResponse, FormData>({
      query: (fromData) => ({
        url: "/upload/uploadCloudinaryController",
        method: "POST",
        body: fromData,
      }),
    }),
    uploadAvatarDeletePrev: builder.mutation<UploadAvatarResponse, FormData>({
      query: (formData) => ({
        url: "/upload/uploadCloudinaryAndReplacePrevAndStoreDBController",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    getProfile: builder.query<GetUserResponse, void>({
      query: () => "/user/load-user-profile",
      providesTags: ["User"],
    }),
    uploadAvatarProgress: builder.mutation<
      UploadAvatarResponse,
      { formData: FormData; onProgress?: (percent: number) => void }
    >({
      async queryFn({ formData, onProgress }) {
        try {
          const { data } = await api.post(
            "/upload/uploadCloudinaryAndReplacePrevAndStoreDBController",
            formData,
            {
              onUploadProgress: (progressEvent) => {
                if (progressEvent.total && onProgress) {
                  const percent = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total,
                  );

                  onProgress(percent);
                }
              },
            },
          );

          return { data };
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            return {
              error: {
                status: error.response?.status ?? 500,
                data: error.response?.data,
              },
            };
          }

          return {
            error: {
              status: 500,
              data: "Unknown error occurred",
            },
          };
        }
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useUploadAvatarMutation,
  useUploadAvatarDeletePrevMutation,
  useGetProfileQuery,
  useUploadAvatarProgressMutation
} = apiR;

//! questions

// is the cache live in memory (and if i refresh the page does the cache data get deleted) or local storage,
// but im not going to store the accessToken in local Storage ill store it in memories

//* https://chatgpt.com/s/t_698968287db88191995b96d81adb1fee
//<GetAllUsersResponse, void> <- why this void , because we are going to pass nothing when well use hooks useAppDispatch is a hooks and export const {useEndpoint} = apiSliceZod; useEndpoint is a hooks, and when we are going to use the useEndpoint hooks we dont have to pass anything const { data, isLoading } = useEndpoint(); <- we pass nothing, if we pass any thing we put the type there

//* why useGetAllUsersQuery,  useLazyGetAllUsersQuery this two ? ans \|/
// https://chatgpt.com/s/t_69896d78c6388191a6cac6a0bddc0d77


//* Quic recap for rtk query
// https://chatgpt.com/s/t_69a953c4710c819198f4b6ee8dc19d55