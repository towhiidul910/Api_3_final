// client\src\REDUX&AXIOS\api\apiSlice.ts

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

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  tagTypes: ["UserProfile", "User"],
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
        body: formData
      }), 
      invalidatesTags: ["User"]
    })
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
  useUploadGalleryImagesMutation
} = api;

// body → req.body
// params → req.query
// headers → req.headers

// remember to attach slice to the store client\src\REDUX\store\store.ts
// remember to attach store to provider or store provider
// remember to wrap the app (in layout) with provider or store provider

// flow to make redux store
// first create a store.ts, it just  boiler plate, in reducer : { we store slices }
// how to store slice: there are 2 deferent type of slice, 1: Normal slice, 2: RTK Query slice
// we slice in reducer , and out side of the reducer we attach a middleware to rtk query mandatory , we can store many slices + many APIs in ONE Redux store
// in reducer : reducer store as a big object with  a key: value
//* normal Slice : counter: counterReducer => ` counter is the key well use the counter state.counter.value, ,,,, keyName: counterReducer => ` keyName is the key well use the keyName state.keyName.value, && CounterReducer is from export default counterSlice.reducer this part, because it is default function we can name (import counterReducer from "../features/counter/counterSlice";) it while importing what ever we want

//* api slice :

//* [api.reducerPath]
// export const api = createApi({
//   reducerPath: "api", 👈🏻
//   baseQuery: fetchBaseQuery(...),
//   endpoints: () => ({}),
// });
//*  so : api.reducerPath === "api" , [api]

//* api.reducer
// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery(...),
//   endpoints: () => ({}),
// });
// when we create the api then rtk query auto-generate pi = {  reducer // 👈 THIS middleware, endpoints,  hooks,  util}

//* create normal Slice (createSlice)
// why (createSlice):
// createSlice generates:
// reducer function
// action creators
// action types
// From ONE object.

//* name: "counter"
// prefix action types, labels DevTools, counter/increment <- it just the name redux need under the hood that's it
//*initialState
// redux state must always exist , never be undefined, even 0 is ok
// it is just initial value , like useState(this is initial value)
//* reducers:
// Inside reducers object Reducer function (increment, decrement...) (handles state changes)
// inside reducer function we have 2 parameter , state: current state of the slice, action: action.payload → optional data sent when dispatching while use

// then export all the reducer function export const {increment , decrement, incrementByAmount} = counterSlice.actions // to dispatch and use it
// export default counterSlice.reducer aka the main slice for to store it

// counter slice (export slice reducer, reducer function to dispatch) -> store the slice reducer in configureStore({reducer: {...}}) -> the whole app with provider and then give the store to the provider <provider store={store}>{app}</provider>

//*GPT ----NORMAL SLICE---- https://chatgpt.com/s/t_698ae93f4130819190f3882bd1adf1b4 👇🏻
//* remember to attach slice to the store client\src\REDUX\store\store.ts
//* remember to attach store to provider or store provider
//* remember to wrap the app (in layout) with provider or store provider
// 1️⃣ Create store (store.ts)
// - configureStore is boilerplate
// - reducer object defines state shape
// - middleware is required for RTK Query

// 2️⃣ Two slice types:
// - Normal Slice → UI / local app state
// - RTK Query Slice → server state & cache

// 3️⃣ Reducer object = big state object
// key → state path
// value → reducer function

// Normal slice example:
//* counter: counterReducer
// → state.counter
// → counterReducer comes from default export
// → import name can be anything

// RTK Query slice:
//* [api.reducerPath]: api.reducer
// reducerPath === "api"
// state.api is mandatory for RTKQ to work

// Middleware:
//* middleware: (gDM) => gDM().concat(api.middleware)
// RTK Query WILL NOT WORK without this

// 4️⃣ createSlice (normal slice)
// Why?
// - Generates reducer
// - Generates action creators
// - Generates action types

// name:
// - Prefixes action types (counter/increment)
// - Used in DevTools
// - Does NOT control state location

// initialState:
// - Redux state must always exist
// - Similar to useState initial value

// reducers:
// - Each key is a reducer function
// - Handles state updates
// - Receives (state, action)
// - action.payload contains dispatched data

// Export:
// - counterSlice.actions → action creators (dispatchable)
// - counterSlice.reducer → reducer function (store only)

// 5️⃣ Final flow:
// Slice → store → Provider → app
