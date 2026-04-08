// client\src\store\store.ts
import { configureStore } from "@reduxjs/toolkit";

// Import Slice

// Import API
import { apiSlice } from "@/api/simple/api";
import { apiSliceZod } from "@/api/advance/zod.api";


export const store = configureStore({
  // reducers
  reducer: {
    // slice

    // api slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiSliceZod.reducerPath]: apiSliceZod.reducer

  },
  // middleware
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(apiSlice.middleware)
    .concat(apiSliceZod.middleware),

});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;