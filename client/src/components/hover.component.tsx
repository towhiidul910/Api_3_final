"use client";

import React, { useState } from "react";
import { api, useLoadUserProfileQuery } from "@/REDUX&AXIOS/api/apiSlice";
import { useAppDispatch } from "@/REDUX/store/hooks";

export default function ProfileHoverPage() {
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const [isHovering, setIsHovering] = useState(false);

  // Hook to get profile if fetched or after click
  const { data, isLoading, isError, error } = useLoadUserProfileQuery(
    undefined,
    {
      skip: !isHovering, // skip if not hovering
    },
  );

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };
  // Hover handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
    dispatch(
      api.util.prefetch("loadUserProfile", undefined, {
        force: false, // only prefetch if not cached, 👈🏻 this shit is global not component-local
      }),
    );
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hover Prefetch Example</h1>

      {/* Hover Button */}
      <div className="relative inline-block">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Hover to Preview Profile
        </button>

        {/* Floating Preview Card */}
        {isHovering && (
          <div
            style={{
              position: "fixed", // fixed so it follows cursor globally
              top: coords.y + 15, // offset so cursor is not covered
              left: coords.x + 15,
            }}
            className="bg-white p-3 shadow-lg rounded border z-50 text-gray-500"
          >
            {isLoading && <p className="text-gray-500">Loading preview...</p>}
            {isError && (
              <p className="text-red-500">Error: {JSON.stringify(error)}</p>
            )}
            {data && (
              <div>
                <h2 className="font-semibold mb-1 text-gray-500">
                  {data.name}
                </h2>
                <p className="text-sm text-gray-600">{data.email}</p>
                <p className="text-xs text-gray-400">
                  Joined: {new Date(data.createAt).toLocaleDateString()}
                </p>
              </div>
            )}
            Preview Panel
          </div>
        )}
      </div>
    </div>
  );
}
