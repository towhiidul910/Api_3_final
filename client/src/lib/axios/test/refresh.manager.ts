import api from "../api";
import { setAccessToken } from "./api";
// import api from "./api.for.interceptor";

type FailedRequest = {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
};
let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

function processQueue(error: unknown, token: string | null) {
  //?
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });

  failedQueue = [];
}

export function enqueueFailedRequest(): Promise<string> {
  return new Promise((resolve, reject) => {
    failedQueue.push({ resolve, reject });
  });
}

export function flushQueue(error: unknown, token: string | null) {
  processQueue(error, token);
}

export function getRefreshState() {
  return { isRefreshing };
}

export function setRefreshing(value: boolean) {
  // why is this
  isRefreshing = value;
}

export async function refreshAccessToken(): Promise<string> {
  try {
    const res = await api.post("/user/refresh"); // cookie-based
    const newToken = res.data.accessToken;

    setAccessToken.set(newToken);
    return newToken;
  } catch (err) {
    throw err;
  }
}

//* let failedQueue: FailedRequest[] = []; : first , An array where every item must look like FAiledRequest
//* FailedRequest : {resolve: function, reject: function}
// so by let failedQueue = [] we create an empty array, nothing inside yet, now waiting room is empty

//* how things get into the array
// failedQueue.push({resolve, reject});  : these 2 function
//* where do resolve and reject come from:

// return new Promise((resolve, reject) => {
//   failedQueue.push({ resolve, reject });
// });

// when you crate a promise :  new Promise((resolve, reject) => { ... }) //? where does these two function come from
// JavaScript gives you two functions:
// resolve() → marks the Promise as successful
// reject() → marks the Promise as failed
// And we save those function in the array

//* So after 3 failed request:

// failedQueue = [
//   { resolve: fn1, reject: fn1 },
//   { resolve: fn2, reject: fn2 },
//   { resolve: fn3, reject: fn3 }
// ]

// these are NOT request, These are buttons to resume paused requests

//* Why an array?

// Because:
// We don’t know how many requests will fail
// Arrays can grow dynamically
// We want to process all waiting requests later
// This is the simplest correct structure.

// what "waiting" actually means:
// When a request does this:

//* That request:

// Stops executing
// Does NOT block JS
// Does NOT retry yet
// Just waits
// Think:
// “I’ll continue when someone calls my resolve.”

//* How request are woken up:
// later after refresh:
// failedQueue.forEach((p) => {
//   p.resolve(token);
// });

//*explain:
// make a function that takes error and token -> then we take the failedQueue array and forEach element run a function, (well call each element prom) => if (token comes as the parameter but not the error) { `then` prom.resolve(token) `what is happening: every array element has 2 function resolve and reject , we take the resolve function for every element and call it "prom.resolve(token)" for every element with the new refresh token we got after first request got the access token and we stored it setAccessToken`} ->

//* This does:
// Call resolve(token) //? what resolve token mean
// The Promise finishes
// The await unpauses
// Request continues
// Token is attached
// Request retries
// That’s the entire trick.

//* question:
// if (status !== 401 || originalRequest._retry) {
//     return Promise.reject(error); <- where does this going , and wat promise.reject(error) or promise.resolve(token) means and why the token
//   }

// api.interceptor:

//? what does (response) => response, this mean,
// 👇🏻 here only the error request will come , not the resolved request, that's why every thing is connected to error here
//2. then async function
//3. originalRequest = error.config;
//4. status = error.response.status
//.5 check if the error is 401 or not, ir it not 401 or if the error (the lead error) complete a retry circle but still it is a error then return it as a reject promise
//6. if the error (first) is a 401 error then originalRequest._retry = true .
//7. then check if any request (first one) is refreshing (try to get a newAccessToken) or not. if a request

//?8. if (getRefreshState().isRefreshing) { .. isRefreshing happening for a request? if it is true then do some stuff   i dont get it , 👇🏻
// const token = await enqueueFailedRequest();
//       originalRequest.headers.Authorization = `Bearer ${token}`;
//       return api(originalRequest);
// ? hwo and what are doing here ,  i know the purpose is to make other request to wait by storing the request in let failedQueue: FailedRequest[] = [];, but how
// setRefreshing(true) // we are making the first request refreshing true thw what about originalRequest
// then well try to get a newAccessToken, then, flushQueue(null, newToken) -> then theNewToken goes refresh.manager -> then processQueue(null, newToken) ->  then the processQueue will see the error: null and token: newToken -> then wll take all the waiting req in the failedQueue and for each element in the fail queue/waitingQueue well well check 2 thing if the token came then resolve the resolve the promise prom.resolve(token) with the new token, //?how come the prom = promise
// else the token is null then well prom.reject(error)
// and failedQueue = [] , make the waiting room empty again.
// then back to the interceptor again , and we if get error then catch the error and -> flushQueue(err, null) -> handleLogout() `because the oldAccessToken and reqToken can be expired or wrong so re remove them` -> then finally { setRefreshing(false) }

//? and if we are declaring that refresh is active by doing setRefreshing(true); this , but why originalRequest._retry = true; this then and what the hack is _retry

//* ans:

//* interceptors.response.use(
//   onSuccess,
//   onError
// )

// | Thing          | Purpose                                  |
// | -------------- | ---------------------------------------- |
// | `isRefreshing` | Global lock (only one refresh at a time) |
// | `_retry`       | Per-request safety (no infinite loop)    |

// Means:
// “If this request already tried refreshing once and STILL failed — stop.”
// So:
// _retry = true → only ONE refresh attempt per request

//* is it work like
//* refreshPromise = refreshAccessToken();
// when we do this then in the refreshAccessToken function runs
// in the refreshAccessToken function const res = await api.post("/user/refresh"); this sends a api post request send to the server  await pauses all the function down blow blow nothing else inside refreshAccessToken runs until the server response , when the response comes with the data
// then const newToken = res.data.accessToken; <- newToken get the newAccessToken
// then setAccessToken.set(newToken) store that newToken so now setAccessToken has the newToken in this file at his point we can access that by setAccessToken.get()
// then we return newToken in the  refreshAccessToken()
// then back to the interceptor we do this :
//  if (!refreshPromise) {
//         refreshPromise = refreshAccessToken(); // returns Promise<string>
//       }
// it check if the refreshPromise is empty or not // does it has a promise or not
// then we await refreshPromise:
// const newToken = await refreshPromise;
// now newToken has the has the thing that refreshAccessToken returned in that async function

// and //  if (!refreshPromise) {
//         refreshPromise = refreshAccessToken(); // returns Promise<string>
//       } this line
// if we dont do const newToken = await refreshPromise this in the interceptor we wont get the accessToken because refreshPromise only retuning a promise
// but the refresh.manager.ts setAccessToken will still have the newAccessToken, well still see the newAccessToken setAccessToken.get() here
