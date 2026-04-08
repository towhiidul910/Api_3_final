"use client";

import React, { useState } from "react";

import { useLoadUserProfileQuery } from "@/REDUX&AXIOS/api/apiSlice";


export default function ButtonFetchProfileSkip() {
  const [clicked, setClicked] = useState(false);

  const { data, isLoading, isError, error } = useLoadUserProfileQuery(
    undefined,
    {
      skip: !clicked, // only fetch when clicked = true
    },
  );

  const handleClick = () => {
    setClicked(true); //trigger query
    console.log(clicked)
  }

  return (
    <div className="p-4">
        <h1 className="text-xl font-bold mb-4">User profile Button Fetch (skip)</h1>

        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Load User Profile
        </button>

        <div className="mt-4">
            {isLoading && <p>Loading...</p>}
        {isError && <p className="text-red-500">Error: {JSON.stringify(error)}</p>}
        {data && (
          <div className="p-2 border rounded">
            <h2 className="font-semibold">{data.name}</h2>
            <p>{data.email}</p>
            <p className="text-sm text-gray-500">
              Joined: {new Date(data.createAt).toLocaleDateString()}
            </p>
          </div>
        )}
        </div>
    </div>
  )
}
