// client\src\REDUX\store\counter\counterSlice.ts




import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // simple increment action no payload needed
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
        // without payload is above actions, but here is a increment by 5 action 
        incrementByFive(state) {
            state.value += 5
        }
    }
})

export const {increment , decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer


//! questions
// what is payload, why we need it , i dont understand incrementByAmount(state, action: PayloadAction<number>) {
        //     state.value += action.payload
        // }
        // hypotheses: is action is like a parameter tha will be given when ill use this function, or action.payload is like a parameter

// what is the difference between api slice, normal slice, auth slice

//* ans
// A action =
// {
//   type: "counter/incrementByAmount",
//   payload: 5
// }

//* action and state
// state → current slice state
// action → an object sent by dispatch()

//* Normal Slice vs Auth Slice vs API Slice
//* auth slice and normal slice same
// Auth slice just:
// lives longer
// affects routing
// interacts with APIs more
// But technically? Same thing.

// But 
//* API Slice (RTK Query) is NOT a normal slice.
// It:
// Fetches data
// Caches data
// Deduplicates requests
// Handles loading/error
// Auto-refetches
// Normalizes state
// You do not write reducers for it.


// 9️⃣ When to Use What (Enterprise Rule)
// ✅ Normal/Auth slice
// Modals
// Auth flags
// Theme
// Permissions
// App-level logic
// ✅ API slice
// Fetching backend data
// Caching
// Pagination
// Refetch on focus
// Multi-component shared data
// ❌ Don’t fetch data in normal slices in 2026 unless you have a reason.