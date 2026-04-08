//✅✅✅✅✅✅
// lib/refreshManager.ts
// import { setAccessToken } from "./test/api.2.interceptor";
import { api, setAccessToken } from "./api.3.interceptor";
// import api from  "./test/api.2.interceptor";

type FailedRequest = {
  resolve: (value: string | null) => void;
  reject: (err: unknown) => void;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

export const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve(token);
  });
  failedQueue = [];
};

export const refreshAccessToken = async (): Promise<string | null> => {
  if (isRefreshing) {
    // Already refreshing → return a Promise that waits
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    }); // this thing will also return a token or a error, instead of make a cll to the server again
  }

  isRefreshing = true;

  try {
    const res = await api.post("/user/get-new-access-token"); // refresh token endpoint
    const newToken = res.data.accessToken;

    console.log("newToken", newToken, res.data?.refreshToken);

    setAccessToken.set(newToken);
    processQueue(null, newToken);

    return newToken;
  } catch (err) {
    processQueue(err, null);
    setAccessToken.clear();

    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    throw err;
  } finally {
    isRefreshing = false;
  }
};

//  why don't we use setAccessToken.get()
