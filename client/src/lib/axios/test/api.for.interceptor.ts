import axios, { InternalAxiosRequestConfig } from "axios";
import { setAccessToken } from "./api";
import { useRouter } from "next/navigation";
import Router from "next/navigation";
import {
  enqueueFailedRequest,
  flushQueue,
  getRefreshState,
  refreshAccessToken,
  setRefreshing,
} from "./refresh.manager";

export const api = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true, //  🔥 REQUIRED FOR COOKIES
});

//* basic 1
//* REQUEST
api.interceptors.request.use(
  (config) => {
    const token = setAccessToken.get();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//* RESPONSE

// Helper: centralized logout
export function handleLogout() {
  // const router = useRouter()

  setAccessToken.clear();
  // Any other cleanup: clear redux, caches, localStorage etc.
  // Redirect user to login:
  try {
    // Router.push("/login");
    window.location.href = "/login";
  } catch {
    // If Router isn't available at import time, do a fallback:
    window.location.href = "/login";
  }
}

api.interceptors.response.use(
  (response) => response, // pass-through on success
  (error) => {
    const status = error?.response?.status;
    //* basic 1
    if (status === 401) {
      //401 mean auth problem, so we are gonna logout/delete the old accessToken then (not don yet) well try to make new one with refresh token
      // Unauthorized: token missing/expired or invalid
      handleLogout();
      // Optionally show a toast: "Session expired"
    }

    // Always reject so callers can still handle errors if they want
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    if (status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    // If refresh already in progress -> wait
    if (getRefreshState().isRefreshing) {
      try {
        const token = await enqueueFailedRequest();
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    // First request becomes the leader
    setRefreshing(true);

    try {
      const newToken = await refreshAccessToken();

      flushQueue(null, newToken);
      originalRequest.headers.Authorization = `Bearer ${newToken}`;

      return api(originalRequest);
    } catch (err) {
      flushQueue(err, null);
      handleLogout();
      return Promise.reject(err);
    } finally {
      setRefreshing(false);
    }
  },
);
//* basic 1 :
//* to-do -> haven't done proper request interceptor yet
//* REQUEST

// run before every request
// Reads token
// Injects header automatically
// Backend now receives : Authorization: Bearer <JWT> // and backend need the accessToken to verify user
// and what the accessToken will be it setAccessTokens business and well set it in inter.res

//* Response
// *refresh manager's function :
// processQueue: //?
// refreshAccessToken: upon calling this function it will give use a new accessToken from server. how it work: it makes a post api call /user/refresh -> then res.data.accessToken stores in newToken -> and then setAccessToken.set(newToken) it set the newToken to memory / js run time the variable calls setAccessToken -> so the setAccessToken get new fresh token and we can use it like this setAccessToken.get()
// flushQueue: flushQueue take two parameters error and token (token should be either a sting or null) -> then it send them to the processQueue function (don't get it , because i cant explain to a 5 year old, until i do that i want to be more clear)
// failedQueue is a variable that takes, failed request array, it stores multiple queue with resolve and reject
// enqueueFailedRequest : this function adds the failedQueue to the failedQueue object. and also return it.

// getRefreshState: it tales that if the isRefreshing true or not. and isRefreshing suppose to do is refreshAccessToken function trying to retrieve a newAccessToken,
// setRefreshing: we set the value of isRefreshing here, ( I really don't understand any of the function and how they all works together)

//* interceptors.response.use():
// (response) => response,: i dont know why are we doing this and why not returning the config like the request interceptors
// then we create a async function:
// originalRequest = err.config , we are gonna need the original request to try to resolve it after getting a newToken,
// status: what is teh current status code. is there is any error if there is what is the error status
// if the error is not auth error , and if originalRequest._retry (i dont actually know what it is) my hypothesis : it check if the originalRequest retrying to resolve it or not , and after getting new accessToken if the error still fails then reject the request and return error.
// originalRequest._retry = true, we are setting this true because , at this point the originalRequest has tried with the newToken but it still failed so , the original request has try now reject it by going previous if condition ☝🏻
// this will tell the new request to wait if a refresh already in progress,
// then try {} catch () {} -> if the request reach this point meaning: the request was 401 error // and then originalRequest._retry = true; and setRefreshing(true); was set (we are not checking if these are set or not , we are setting them to use it later)
// get new token, -> then flushQueue(null, token): from here it goes to processQueue here it decide what to do with it resolve it or reject it if the error is null then it go to resolve if the token is null then it goes to error, i still don't know what the hack is failedQueue = [];  and what to do with it -> then we attach the newToken to the originalRequest.headers.Authorization so we can retry the originalRequest with new fresh Bearer token, -> then we return api(originalRequest);

// if that fails then catch error , we flushQueue(err, null) so it goes to the processQueue then reject the request
// finally setRefreshing(false);

//* qna

// what does it mean  revoke: (token: string) => void; <-this void
// what is originalRequest and originalRequest._retry
// where do i setup/give the value to isRefreshing
// return api(originalRequest) what does this mean, is it mean that the request that was failed previously will be try again because we give this originalRequest a new auth header bearer token?
// how does the : flushQueue(null, newToken), flushQueue , processQueue and failedQueue works together it is a bit confusing
// why did we do this failedQueue = []; at the end of this function
// how this makes first request as leader setRefreshing(true);

// * qna 2
// so we are trying to prevent too many refresh calls
// so if one request refresh others to wait, when refresh finishes -> success : retry everyone with the accessToken, fail -> logout everyone, because refresh fails meaning refreshToken not valid or no refreshToken

//* failedQueue- waiting room
// What it really is

// This is not requests
// This is promises waiting to be completed

// Each entry looks like :
// {
//   resolve: (token) => void,
//   reject: (error) => void
// }

// Meaning:
// “Hey, I failed with 401.
// I’ll pause myself.
// When you have a new token → wake me up.”

// These requests are asleep, not dead.

// hwo this works:
// FailedRequest is type {resolve: (token: string) => void; reject: (error: unknown) => void}

// let refreshPromise: Promise<string> | null = null;

// api.interceptors.response.use(
//   // ✅ success goes through untouched
//   (response) => response,

//   // ❌ error handling
//   async (error) => {
//     const originalRequest = error.config;
//     const status = error.response?.status;

//     // ❌ not 401 → just fail
//     if (status !== 401) {
//       return Promise.reject(error);
//     }

//     // ❌ already retried once → fail (loop breaker)
//     if (originalRequest._retry) {
//       return Promise.reject(error);
//     }

//     originalRequest._retry = true; // already tried once

//     try {
//       // 🔒 if no refresh in progress → start one
//       if (!refreshPromise) {
//         refreshPromise = refreshAccessToken(); // returns Promise<string>
//       }

//       // ⏳ everyone waits here
//       const newToken = await refreshPromise; //<- its a promise, we are resolving this by await so we get what it returning

//       // 🔑 attach token & retry request
//       originalRequest.headers.Authorization = `Bearer ${newToken}`;
//       return api(originalRequest);

//     } catch (refreshError) {
//       // ❌ refresh failed → logout everything
//       handleLogout();
//       return Promise.reject(refreshError);

//     } finally {
//       // 🧹 reset for next time
//       refreshPromise = null;
//     }
//   }
// );

// // originalRequest = {
// //   url: "/me",
// //   headers: {...},
// //   _retry: true
// // }
