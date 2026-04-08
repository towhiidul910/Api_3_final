import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
// import { useRouter } from "next/navigation";
// enterprise
export const api = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true, //  🔥 REQUIRED FOR COOKIES
});

//? Cookies won’t be sent by browser unless client uses credentials. Axios needs withCredentials: true (or fetch needs credentials: 'include'). Also enable CORS on server with credentials: true and correct origin.

// api.interceptors.request.use(config => {
//     const token = localStorage.getItem("accessToken");
//     if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
//     return config;
// })
// every request passes here , No request escape this , centralized auth logic.

let failedQueue: Array<{
  resolve: (value?: InternalAxiosRequestConfig) => void;
  reject: (error: unknown) => void;
}> = []; // queue to hold request while refreshing


let accessToken: string | null = null;

export const setAccessToken = {
  get() {
    return accessToken;
  },
  set(token: string) {
    accessToken = token; // what does it mean
  },
  clear() {
    accessToken = null;
  },
};


api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // const accessToken = localStorage.getItem("accessToken");
    // attach the access token if available
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    // add additional enterprise headers
    if (config.headers) {
      config.headers["X-Request-ID"] = crypto.randomUUID(); // unique ID for each request
      config.headers["X-Client-Version"] = "1.0.0"; // example: version of frontend
    }

    // check if token is currently refreshing
    // if (isRefreshing) {
    //   // return a promise that will resolve when token refresh is done
    //   return new Promise((resolve, reject) => {
    //     failedQueue.push({ resolve, reject });
    //   }).then(() => config);
    // }
    // ✅ Return the config as-is if nothing is blocking
    return config;
  },

  (error: AxiosError) => {
    // handle request creation errors
    return Promise.reject(error);
  }
);

// --------------------------
// Helper: process queued requests after refresh
// --------------------------
export const processQueue = (
  error: unknown,
  config: InternalAxiosRequestConfig
) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else if (config) {
      resolve(config);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    // const router = useRouter();
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResp = await api.post("/user/refresh"); // cookie sent automatically
        const newAccessToken = refreshResp.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshErr) {
        // refresh failed: redirect to login
        window.location.href = "/login";
        // router.push("/login");
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(err);
  }
);

// api.interceptors.request.use((config) => {
//   console.log("Hi im interceptor And Request is going out:", config.url);
//   return config;
// });

// api.interceptors.response.use((response) => {
//   console.log("Hi im interceptor And Response come back", response.status)

//   return response
// })

export default api;

// Component → HTTP request → Server → HTTP response → Component

//* interceptor
// Component
//    ↓
// [ Request Interceptor ]   ← before request leaves
//    ↓
// Server
//    ↓
// [ Response Interceptor ]  ← after response comes back
//    ↓
// Component

//* why we need it : because component should not care about auth , retries , headers or the refresh logic, we do that here for all the req and res

//* interceptors.request
// runs before every request
// sees the config
// must return the config (or request dies)

//* interceptors.response
// Error normalization
// Retry
// Refresh
// Redirects

//* have to check these out
// Axios interceptors:
// Attach headers
// Retry requests
// Refresh tokens
// Handle 401 globally
// Redux middleware:
// React to actions
// Trigger side effects
// Update state

//*qna
// fully understand interceptors
// after understanding interceptors then try to understand the tokenStore , get, set, clear
// can i create interceptors with redux ? or it just a axios thing
// make a route in client fully secure , like real app, advance real app
// get a bit knowledge about retry
// why we are not using .env for axios ? and can we use the axios interceptor with rtk
// is it only for auth logic only or it has other uses?

//* use case:
// Authentication
// Retry logic (VERY IMPORTANT)
// Global error handling
// Request / response logging
// Environment-based behavior
// Response normalization
// Request cancellation & deduplication (Advance stuff) , prevent spamming the same endpoint, debounce calls, cancel duplicate calls

//* ADVANCE INTERCEPTOR
// without interceptor: Component → axios.get() → server → response → component
// with interceptor:
// Component
//   ↓
// Request Interceptor (modify request)
//   ↓
// Network
//   ↓
// Response Interceptor (inspect / fix / retry)
//   ↓
// Component

// component never touch the auth logic again


//* REQUEST Interceptor

// 1. fist we are going store/run the accessToken in the memory  , let accessToken: string | null = null
// 2. a function to set the so we can get the accessToken as a response form the server and store it to memory. export const setAccessToken = {set(token: string) {accessToken = token}}
// 3. now we are gonna create a interceptors.request.use() the we create a async function. with a config as a parameter type as InternalAxiosRequestConfig.
// 4. inside the async function well // attach the accessToken with the headers if it available. // if (accessToken && config.headers exist) {config.headers.Authorization = `Bearer ${accessToken}`} //? where are we checking the accessToken to exist so we can attach it to the headers . because previously we check into the localStorage. but now where. It doesn't exist any where in the browser storage. hypothesis: it store in the memory but i don't actually understand properly how long and how did it stays. And it should stay because it is fast and efficient to verify by accessToken , so that's why our browser should keep it in memories and we should send it headers.Authorization here
//*---- ANS ----
// let accessToken: string | null = null;
// This variable lives in JavaScript memory, not browser storage.
//JS memory -> ram, inside the js runtime, scoped to your app bundle. It dies when -> Page refresh, tab close, app crashes
//* lifecycle
// Page refresh
// ↓
// accessToken lost
// ↓
// Interceptor sends request → no Authorization
// ↓
// Server returns 401
// ↓
// Response interceptor calls /refresh
// ↓
// Refresh token cookie sent automatically
// ↓
// Server returns new accessToken
// ↓
// setAccessToken(newToken)
// ↓
// Retry original request

//*-------------

// 5. Add additional enterprise headers
// if config.headers goes with the request. then add x-request-id and x-client-version why? just for fun. config.headers['X-Request-ID'] = crypto.randomUUID(); config.headers['X-Client-Version'] = "1.0.0" example: version of frontend; 
//*----ANS----
// these are good for debugging
// every request gets a unique ID.
// this matter because: 
// Imagine this situation:
// User reports: "Something broke"
// Backend logs show 10000 request per minute
// which one is the user?

// with x-request-id ::
// frontend logs: Request failed -> ID: abc-123
// then backend logs: Error -> ID: abc-123

// X-Client-Version (Which frontend version made this request?) use case: 
// You deploy frontend v1.1.0
// Suddenly backend errors spike
// Backend checks logs:

//*-----------

// 6. let isRefreshing = false. if isRefreshing true then return new Promise() //? i don't understand what and how it is doing.

//*----ANS----
//without this:
// AccessToken expires
// 10 api request are sent at once
// All get 401 unauthorized //? why. is it because we are sending too many at once ant they are overlapping or something
// Spammed /refresh
// Created 10 new access tokens
// Possibly revoked tokens incorrectly
// Risked DB race conditions
// Melted your auth system
// This is called a refresh token stampede

// solution: isRefreshing
// is thee already a refresh request in progress?
// fist request hits 401
// isRefreshing === false
// set isRefreshing = true
// call /refresh
// while refresh is happening
 // if other request arrive \/
// if (isRefreshing) {
//   return new Promise((resolve) => {
    // wait
//   });
// }
// They WAIT instead of refreshing again
//* Why return new Promise()? (THIS IS CRUCIAL)
// What this actually does:
// It pauses the request pipeline.
// Axios waits until:
// resolve(config) is called

// if (isRefreshing) { // if refreshing tre then , return new promise
//   return new Promise((resolve) => {
//     subscribeTokenRefresh((newToken) => {
//       config.headers.Authorization = `Bearer ${newToken}`;
//       resolve(config);
//     });
//   });
// }

// means: request is frozen, refresh finishes, token is updated, request resumes with new token


//*-----------
// qna
//1. how do we know if it refreshing = true

//*----------

// 7. return config.

// 8. the if it is a AxiosError then reject promise. (error: AxiosError) => {return Promise.reject(error)}

// 9. i don't know what is processQueue is and how , and why it is doing