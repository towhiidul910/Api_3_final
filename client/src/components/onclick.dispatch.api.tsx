"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/REDUX/store/hooks";
import { api } from "@/REDUX&AXIOS/api/apiSlice";

export default function ButtonFetchProfile() {
  const dispatch = useAppDispatch();

  // Select the cached data (if any) from RTK Query
  const profileCache = useSelector(api.endpoints.loadUserProfile.select());

  const handleClick = () => {
    if (!profileCache.data) {
      // Prefetch will check cache and only fetch if empty
      dispatch(
        api.util.prefetch("loadUserProfile", undefined, { force: false })
      );
      
    } else {
      console.log("Using cached data:", profileCache.data);
    

    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Profile Button Fetch</h1>

      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Load User Profile
      </button>

      <div className="mt-4">
        {profileCache.isLoading && <p>Loading...</p>}
        {profileCache.isError && <p className="text-red-500">Error loading user</p>}
        {profileCache.data && (
          <div className="p-2 border rounded">
            <h2 className="font-semibold">{profileCache.data.name}</h2>
            <p>{profileCache.data.email}</p>
            <p className="text-sm text-gray-500">
              Joined: {new Date(profileCache.data.createAt).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
