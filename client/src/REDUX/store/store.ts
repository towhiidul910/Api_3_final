// client\src\REDUX\features\store.ts

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { api } from "@/REDUX&AXIOS/api/apiSlice";
import { apiR } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    // slice, key : value
    counter: counterReducer,
    // api slice
    [api.reducerPath]: api.reducer,
    [apiR.reducerPath]: apiR.reducer,
    //
  },
  // ✅ RTK Query middleware (MANDATORY)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, apiR.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//! question
// why is the middleware
// how Retry logic work in rtk


// Prefetching (underrated spell) (Hover effects

// Next page preloading

// Anticipated navigation), Manual cache access (advanced), Cache & deduplication magic (automatic) what does it mean, how does it work. , Auto refetches