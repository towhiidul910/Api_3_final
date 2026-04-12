// client\src\app\profile\page.tsx
"use client";
import AvatarDrop from "@/components/upload/get/DragAndDropReact";
import AvatarPage from "@/components/upload/get/AvatarPage";
import api from "@/lib/axios/api.interceptor";
// import { api } from "@/lib/axios/test/api.3.interceptor";
// import api from "@/lib/axios/api"
import React, { useEffect, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { Point } from "framer-motion";
import AvatarTest from "@/components/upload/get/test/AvatarPage.test.";
import AvatarPageA3 from "@/components/upload/UploadAdvance/UploadAvatar3";
import GalleryUploader from "@/components/upload/UploadG/UploadGallery";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export default function UserProfile() {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/user/load-user-profile");
        setProfile(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Failed to load profile</p>;

  function setZoom(zoom: number): void {
    throw new Error("Function not implemented.");
  }

  function setCrop(location: Point): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      <AvatarDrop />
      <AvatarPage />

      <AvatarTest/>
      <AvatarPageA3/>

      <h1>Gallery Upload</h1>
      <GalleryUploader/>
    </div>
  );
}

// // const fetchAccessToken = async () => {
// //   try {
// //     const res = await api.post("/user/get-new-access-token");
// //     const newToken = res.data.accessToken;
// //     setAccessToken.set(newToken);
// //     console.log("fetchAccessToken", newToken)
// //   } catch (err) {
// //     console.log("Cannot refresh Token", err);
// //   }
// // };

// const fetchUserProfile = async () => {
//   return await api.get("/user/load-user-profile");
// };

// const UserProfile = () => {
//   const [profile, setProfile] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   const initialize = async () => {
//   //     if (!setAccessToken.get()) {
//   //       await fetchAccessToken();
//   //     }
//   //     fetchUserProfile(); // then fetch profile
//   //   };
//   //   initialize();
//   // }, []);

//   useEffect(() => {
//     // if (!setAccessToken.get()) return
//     const fetchUsers = async () => {
//       try {
//         const response = await fetchUserProfile()
//         const data = response.data;
//         console.log("data",data);
//         setProfile(data);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   if (loading) return <p>Loading User...</p>;
//   if (!profile) return <p>Some thing went wrong... profile: {profile}</p>;

//   return (
//     <div className="p-6 space-y-8">
//       {" "}
//       <section>
//         <h2 className="text-xl font-bold text-green-600 mb-3">
//           {profile?.name}&apos;s profile
//         </h2>
//         <li key={profile?.id}>
//           <p>
//             <b>{profile?.name}</b>
//           </p>
//           <p>{profile?.email}</p>
//         </li>
//       </section>
//     </div>
//   );
// };

// export default UserProfile;

// Timeline (important 👇)

// First render

// loading = false

// UI renders as “not loading” (even though data hasn’t been fetched)

// useEffect runs after paint

// setLoading(true) → triggers second render

// UI flips to “Loading…”

// Request finishes

// setLoading(false) → third render

// That’s 3 renders and a brief moment where the UI lies.
