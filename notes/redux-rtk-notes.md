# Redux & RTK Query — Notes

---

## The Full Flow (Big Picture)

```
Create Slice
    ↓
Store the slice reducer in configureStore({ reducer: {...} })
    ↓
Wrap the whole app with <Provider store={store}>
    ↓
Use state and dispatch anywhere in the app
```

---

## The Store — `store.ts`

**Why:** One central place that holds all state for the entire app.

**How:** `configureStore` is just boilerplate. Inside `reducer` we store all our slices as key-value pairs.

```ts
configureStore({
  reducer: {
    counter: counterReducer,       // normal slice
    [api.reducerPath]: api.reducer // RTK Query slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // mandatory for RTK Query
})
```

> ⚠️ RTK Query **will not work** without the middleware line.

---

## Two Types of Slices

| | Normal Slice | RTK Query Slice |
|---|---|---|
| What it handles | UI state / local app state | Server state & cache |
| Created with | `createSlice` | `createApi` |
| Example | counter, modal open/close | fetch user, upload image |

---

## Normal Slice — `createSlice`

**Why:** Instead of writing a reducer, action creators, and action types separately — `createSlice` generates all three from one object.

**The parts:**

### `name`
```ts
name: "counter"
```
- Prefixes all action types → `counter/increment`, `counter/decrement`
- Shows up in Redux DevTools
- Does **not** control where state lives — that is controlled by the key in `configureStore`

### `initialState`
```ts
initialState: { value: 0 }
```
- Redux state must always exist — never `undefined`
- Same idea as `useState(0)` — just the starting value

### `reducers`
```ts
reducers: {
  increment: (state, action) => { state.value += 1 },
  incrementByAmount: (state, action) => { state.value += action.payload }
}
```
- Each key is a reducer function that handles one type of state change
- `state` = current state of the slice
- `action.payload` = optional data sent when dispatching

### Exports
```ts
// action creators — used to dispatch
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// reducer function — stored in configureStore
export default counterSlice.reducer
```

---

## RTK Query Slice — `createApi`

**Why:** Handles all server communication — fetching, caching, invalidating — automatically.

### `reducerPath`
```ts
reducerPath: "api"
```
- This is the key RTK Query uses internally
- `api.reducerPath === "api"`
- Must be stored in the store as `[api.reducerPath]: api.reducer`

### `api.reducer`
When you call `createApi(...)`, RTK Query auto-generates the whole api object:
```ts
api = {
  reducer,      // ← store this in configureStore
  middleware,   // ← attach this in middleware
  endpoints,
  hooks,        // ← useGetUserQuery, useMutation etc.
  util
}
```

### `tagTypes`
```ts
tagTypes: ["UserProfile", "User"]
```
- Tags are used to link queries and mutations together
- When a mutation `invalidatesTags: ["User"]` — all queries with `providesTags: ["User"]` automatically re-fetch

### `endpoints`
Two types of endpoints:

**`builder.query`** — for fetching data (GET)
```ts
getGalleryImages: builder.query<ResponseType, void>({
  query: () => ({ url: "/upload/getGalleryImageController", method: "GET" }),
  providesTags: ["User"]   // re-fetches when "User" tag is invalidated
})
```

**`builder.mutation`** — for changing data (POST, PUT, DELETE)
```ts
uploadGalleryImages: builder.mutation<ResponseType, FormData>({
  query: (formData) => ({
    url: "/upload/createGImagesController",
    method: "POST",
    body: formData
  }),
  invalidatesTags: ["User"]  // tells all "User" queries to re-fetch
})
```

---

## Types in Endpoints

```ts
builder.query<ResponseType, ArgType>
//            ↑              ↑
//     what comes back    what you pass in
//     from the server    when calling the hook

builder.query<UserProfile, void>     // no argument needed
builder.query<UserProfile, string>   // pass a string (e.g. email)
builder.mutation<{ message: string }, FormData>  // pass FormData, get message back
```

---

## Request Fields

```ts
query: (body) => ({
  url: "/some/endpoint",
  method: "POST",
  body,     // → req.body   in Express
  params,   // → req.query  in Express
  headers,  // → req.headers in Express
})
```

---

## Hooks — How to Use in Components

RTK Query auto-generates hooks from endpoint names:

```ts
// from loadUserProfile → useLoadUserProfileQuery
// from uploadGalleryImages → useUploadGalleryImagesMutation
// from deleteGalleryImage → useDeleteGalleryImageMutation

const { data, isLoading } = useGetGalleryImagesQuery()
const [uploadImages] = useUploadGalleryImagesMutation()
const [deleteImage] = useDeleteGalleryImageMutation()
```

---

## Checklist — Things to Never Forget

```
✅ Create the slice / api
✅ Store the reducer in configureStore
✅ Attach api.middleware in middleware (RTK Query only)
✅ Wrap the app with <Provider store={store}> in layout
```

---

## Tags Flow — Invalidation Example

```
User uploads image
  → useUploadGalleryImagesMutation fires
  → invalidatesTags: ["User"]
        ↓
RTK Query sees "User" tag is dirty
  → finds all queries with providesTags: ["User"]
  → automatically re-fetches getGalleryImages
        ↓
UI updates with fresh data — no manual re-fetch needed
```
