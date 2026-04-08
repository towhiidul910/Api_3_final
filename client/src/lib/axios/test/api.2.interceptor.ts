//* async explain important https://chatgpt.com/s/t_696f06fe308081918f4493d20b9efa4e
//* https://chatgpt.com/s/t_696f7fcd2c308191a321c18e170a5e44

import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { refreshAccessToken } from "./refresh.2.manager";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

// let failedQueue: Array<{
//   resolve: (value?: InternalAxiosRequestConfig) => void;
//   reject: (error: unknown) => void;
// }> = [];

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

// Response interceptor with refresh token handling
api.interceptors.response.use(
  (response) => response, // pass through successful responses
  async (error) => {
    const originalRequest = error.config;

    // Only handle 401s
    if (
      (error.response?.status === 401 &&
        originalRequest &&
        !originalRequest._retry,
      !originalRequest.url?.includes("/user/refresh"))
    ) {
      originalRequest._retry = true; // prevent infinite loop

      try {
        // Call refresh endpoint
        const res = await api.post("/user/refresh");
        const newToken = res.data.accessToken;

        // Update memory
        setAccessToken.set(newToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return await api(originalRequest);
      } catch (refreshError) {
        // Refresh failed → logout
        setAccessToken.clear();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

api.interceptors.request.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return await api(originalRequest);
      } catch (error) {
        throw error;
      }
    }

    throw error;
  },
);

// first request send to the server but the server return error
//1. and in the interceptor we take the error to a async function, async (error) => {}
//2. then we take the originalRequest from error.config const originalRequest = error.config
//3. then we check if the error comes with 401 `is it auth error or not` && does we have the originalRequest ot not && is originalRequest._retry = false or not `original request false mean this request first retry, if it second retry then originalRequest._retry would be true because we are about to set it as true`
//3. here are we set originalRequest._retry = true;
//4. now we try to get newToken because what ever comes here is 401/auth error means it wasn't able to provide accessToken or right accessToken to the server
//4.1 in refreshAccessToken():
//4.2 refreshAccessToken function will return a Promise which in resolve will give us newToken. `the newToken comes by tow different way , if isRefreshing false then it will make a request to server for new accessToken, if isRefreshing true then it suppose return the token for each failedQueue that are waiting to get a AccessToken const newToken = await refreshAccessToken() here`
//4.3 so thats hwo we do it :
//4.4 if (isRefreshing) { <- we check if any refreshing is currently inprogress or not
//*4.5(false) if (isRefreshing === false) `that means it the first req in the pipeline` then ignore the `if` and continue with to the function
//5.6 make isRefreshing = true `now isRefreshing true in this moment if 401 error still coming in the pipeline then they will see //*isRefreshing === true`
//5.7 then try to make a req for newAccessToken
//5.8 store the token in newToken
//5.9 setAccessToken.set(newToken)
//5.10 then ran processQueue(null, newToken) `fill with the token so it resolve the promise with the newToken` //? explained down blow at :4.6.1, 4.5.3: this number
//5.11 if we get error to get the accessToken then catch the error
//5.12 ran the processQueue(err, null) `fill it will error so it reject the promise with the error` //? explain down blow at :4.6.1, 4.5.6: this number
//*4.5(true) if (isRefreshing === true) ` then it means already a 401 in progress to get a newAccessToken, if it get then this 401 failed api call will get the newAccessToken without making a refresh call to the server`
//4.5.1 now well create a Promise((resolve, reject) => {}) now we are not going to resolve or reject the promise hre we are going to first store the reject and resolve function as a object in a array call //*failedQueue and return or resolve the promise help of the stored function in the object elsewhere (processQueue()) ..... 👇🏻
//  now the request will wait at const newToken = await refreshAccessToken() here until refreshAccessToken return something, '''It waits until ONE of the stored resolve / reject functions is called''''
// and this Promise will return error or token , ```` The Promise resolves with token OR rejects with error It never “returns both”  and the `await refreshAccessToken() `````` await will be complete
//*4.5.2 so inside the new Promise well store the reject and resolve function as a object in the failedQueue.push({resolve, reject})
//4.5.2.1 the let failedQueue: FailedRequest[] = []; accept FailedRequest type object : FailedRequest is a object type that accept resolve: function (with value type sting or null) => void; or reject: function (with a value type unknown) => void
//* 4.5.3 now we have the failedQueue now what? -> now the failedQueue will wait to fetish the const res = await api.post("/user/refresh"); to complete , -> now you will notice in `//5.10` here we did processQueue(null, newToken); this , we are running the processQueue function after the refresh req complete -> and this function will decide the fate of the stored failedQueue {resolve: function , reject: function} objects
//4.5.4 in the processQueue function we take 2 parameters error: unknown and token: string | null
//*4.5.5 and for each failedQueue we check if we have error or not ,
//4.5.6 if we get error with processQueue(error, null) then run reject function from the for every failedQueue object, -> the the  const newToken = await refreshAccessToken() will get an error because here this promise return new Promise((resolve, reject) => { returns error same thing happens all the  object that was stored in failedQueue here -> then failedQueue = []; this will empty the failedQueue because every object is rejected and we don't want them to be hre anymore
//4.5.7 if we get token because the  const res = await api.post("/user/refresh"); this is successfully got a newAccessToken form server and the we are running the processQueue(null, newToken); function here and passing the token  then the error is null so  if (error) reject(error); will fail and else else resolve(token); will do its job <- this will resolve the promise and return the token for every object that was stored in the failedQueue -> and for every waited 401 error will get a newToken const `newToken = await refreshAccessToken()` without calling the server again -> then well  empty the failedQueue failedQueue = []; , because at this point every stored object is resolved with the new token. and const newToken = await refreshAccessToken() got new token
//4.6 finally make the isRefreshing false

//5 now if the newToken has a newAccessToken the store the token in the originalRequest.headers.Authorization = `Bearer ${newToken}`;

//6 retry the request again with new Fresh token
//7 if we get error then catch it and and throw error

//

// then : make isRefreshing = true
// //4.6 the try { make a request for new AccessToken with refreshToken in the cookie
// //4.7 set in the setAccessToken.set(newToken)
// //* 4.8 processQueue(null, newToken)
// //4.8.1 in processQueue it demand 2 parameters, error and token.
// //*4.8.2 and inside failedQueue()
// //4.8.2.1 it check if there is any "promise stored" in it or not to resolve.
// //4.8.2.2 if there is any Promise then for each failedQueue resolve or reject
// //4.8.2.3
// //4.9 return newToken;
