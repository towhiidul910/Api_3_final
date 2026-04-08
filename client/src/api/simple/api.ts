import { User } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


// type User = {
//     name: string
//     email: string
//     age: number
// }

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ["Users", "Users2"],

    endpoints: (builder) => ({
        //Get Users
        simpleGetUsers: builder.query<User[], void>({
            query: () => "users/simple",
            providesTags: ["Users"]
        }),
        
        // post
        simplePostUser: builder.mutation<User, Partial<User>>({
            query: (newUser) => ({
                url: "users/simple",
                method: "POST",
                body: newUser
            }),
            invalidatesTags: ["Users"]
        }),
       
        // delete
        simpleDeleteUser: builder.mutation<User, string>({
            query: (fakeId) => ({
                url: `users/simple/${fakeId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Users"]
        }),
        // put
        simpleUpdateUser: builder.mutation<User, Partial<User>>({
            query: ({fakeId, data}) => ({
                url: `users/simple/${fakeId}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Users"]
        })
    })
})

export const {
    useSimpleGetUsersQuery,
    useSimplePostUserMutation,
    useSimpleDeleteUserMutation,
    useSimpleUpdateUserMutation
} = apiSlice


// questions: 
//1️⃣ createApi 
// caching
// Automatic invalidation of cached data 
// Integration with Redux

//4️⃣ tagTypes: ["Users"]
//RTK Query automatically refetches any queries that depend on "Users".

//9
// explain the React’s render life cycle 



// ans: https://chatgpt.com/s/t_69880e60b6648191a209a33530ec335d 
// https://chatgpt.com/s/t_69880d9706b88191bafe84c32e4434dd
// so when get some user , the rtk create a redux slice and store api result in redux state, so if i call the user with same api slice again any where in same app , that call does not go to the server because our redux state already store the result in it and the apiSlice get the result form the stored results and the place the redux store store the result call cash?