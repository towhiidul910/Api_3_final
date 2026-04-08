// client\src\REDUX&AXIOS\api\baseQuery.ts

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { tokenStore } from "@/auth/token";
import { refreshAccessToken } from "../auth/refresh";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { setAccessToken } from "../auth/tokenStore";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = setAccessToken.get();
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export const baseQueryWithRefresh: BaseQueryFn = async (args, api, extra) => {
  let result = await baseQuery(args, api, extra);

  if (result.error?.status === 401) {
    try {
      const newToken = await refreshAccessToken();
      if (!newToken) throw new Error("Refresh failed");

      // Retry original request
      result = await baseQuery(args, api, extra);
    } catch {
      setAccessToken.clear();
      window.location.href = "/login";
    }
  }


  return result;
};



// https://chatgpt.com/s/t_698a90695a448191806453efca348c87