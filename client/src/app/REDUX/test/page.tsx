"use client";
import React, { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../../REDUX/store/store";
import Counter from "@/components/counter.component";
import { useLazyGetAllUsersQuery } from "@/REDUX/features/api/apiSlice";
import ProfileHoverPage from "@/components/hover.component";
import ButtonFetchProfile from "@/components/onclick.dispatch.api";
import ButtonFetchProfileSkip from "@/components/onclick.reguler.query.hook";

export default function AppRoot() {
  const dispatch = useDispatch()
  // const {data, isLoading, isError} = useGetAllUsersQuery()
  const [fetchUsers, { data, isLoading, isError, error }] =
    useLazyGetAllUsersQuery(); // <- if this out side of the provider then it wont work
    
const [isHovering, setIsHovering] = useState(false);
    // Prefetch on hover





  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>Error loading user</p>;

  return (
    <Provider store={store}>
      <div className="p-2">
        <h1>Redux + TypeScript — Deep comments example</h1>
        <Counter />

        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">All Users (Manual Fetch)</h1>

          {/* --------------------------------------------
          Button to fetch users
      -------------------------------------------- */}
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => fetchUsers()}
          >
            Load Users
          </button>

          {/* --------------------------------------------
          Loading state
      -------------------------------------------- */}
          {isLoading && <p>Loading users...</p>}

          {/* --------------------------------------------
          Error state
      -------------------------------------------- */}
          {isError && (
            <p className="text-red-500">Error: {JSON.stringify(error)}</p>
          )}

          {/* --------------------------------------------
          Data display
      -------------------------------------------- */}
          {data && (
            <div>
              <h2 className="font-semibold mt-2">Verified Users</h2>
              <ul className="list-disc ml-6">
                {data.verifiedUsers.map((user) => (
                  <li key={user.id}>
                    {user.name} ({user.email})
                  </li>
                ))}
              </ul>

              <h2 className="font-semibold mt-4">Unverified Users</h2>
              <ul className="list-disc ml-6">
                {data.unVerifiedUsers.map((user) => (
                  <li key={user.id}>
                    {user.name} ({user.email})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <ProfilePage/> */}
        <ProfileHoverPage/>
        <ButtonFetchProfile/>
        <ButtonFetchProfileSkip/>
      </div>
    </Provider>
  );
}

