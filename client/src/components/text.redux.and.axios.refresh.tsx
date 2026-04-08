import { useLoadUserProfileQuery } from "@/REDUX&AXIOS/api/apiSlice";

import React from "react";

const ProfilePage = () => {
  const { data, error, isLoading } = useLoadUserProfileQuery();
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile</p>;

  if (!data) return <p>No data available</p>;
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
};

export default ProfilePage;
