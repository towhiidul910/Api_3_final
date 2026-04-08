// client\src\lib\axios\api.interceptor.ts
import { InternalAxiosRequestConfig } from "axios";
// import api from "./api";
import { refreshAccessToken } from "./refresh.manager";

import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});



let accessToken: string | null = null;

export const setAccessToken = {
  get() {
    return accessToken;
  },
  set(token: string) {
    accessToken = token;
  },
  clear() {
    accessToken = null;
  },
};

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = setAccessToken.get();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.headers) {
      config.headers["X-Request-ID"] = crypto.randomUUID(); // unique ID for each request
      config.headers["X-Client-Version"] = "1.0.0"; // example: version of frontend
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest: InternalAxiosRequestConfig = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/user/get-new-access-token")
    ) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshAccessToken();
        console.log("res interceptor after refreshToken:", newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        if (!newToken) {
          throw new Error("No access token returned from refresh");
        }
        return await api(originalRequest);
      } catch (error) {
        throw error;
      }
    }

    throw error;
  },
);
export default api;