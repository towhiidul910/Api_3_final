"use client";
import { useGetUserByEmailQuery } from "@/REDUX&AXIOS/api/apiSlice";
import Image from "next/image";
import React, { useState } from "react";
// import { useGetUserByEmailQuery } from "@/redux/api";

export default function UserAvatarDisplay() {
  const [email, setEmail] = useState("");
  const [fetchEmail, setFetchEmail] = useState("");
  // fetch user when email is provided
  const {
    data,
    isLoading,
    isError,
  } = useGetUserByEmailQuery(fetchEmail, {
    skip: !fetchEmail, // don't fetch until we have email
  });

  const handleClick = () => {
    if (!email) return alert("enter an email");

    setFetchEmail(email);
  };

  console.log(data)

  return (
    <div className="p-4">
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Show Avatar
      </button>
      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-500">Error loading user</p>}

      {data && (
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold">{data.name}</p>
          {data.avatar ? (
            <Image
              src={`http://localhost:3002${data.avatar}`}
              alt={`${data.name} avatar`}
              className="w-24 h-24 rounded-full object-cover border"
              width={240} // The width of the image
              height={240} // The height of the image
              quality={90} // The quality of the image
              priority // Whether the image is a priority load
            />
          ) : (
            <p>No user.avatar</p>
          )}
        </div>
      )}
    </div>
  );
}
