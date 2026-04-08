// client\src\lib\axios\refresh.manager.ts
// import api from "./api";
import api, { setAccessToken } from "./api.interceptor";

type FailedRequest = {
  resolve: (value: string | null) => void;
  reject: (err: unknown) => void;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

export const processQueue = (err: unknown, token: string | null = null) => {
  failedQueue.forEach(({ reject, resolve }) => {
    if (err) reject(err);
    else resolve(token);
  });
  failedQueue = [];
};

export const refreshAccessToken = async (): Promise<string | null> => {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    });
  }

  isRefreshing = true;

  try {
    const res = await api.post("/user/get-new-access-token");
    const newToken = res.data.accessToken;

    setAccessToken.set(newToken);
    processQueue(null, newToken);

    return newToken;
  } catch (err) {
    processQueue(err, null);
    setAccessToken.clear();

    // window.location.href = "/login"

    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }

    throw err;
  } finally {
    isRefreshing = false;
  }
};
