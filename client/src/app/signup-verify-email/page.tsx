// client/src/app/verify-email/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useVerifySignupMutation } from "@/REDUX&AXIOS/api/apiSlice";

export type VerifyEmailPageProps = {
  searchParams: {
    token?: string;
  };
};

export default function VerifyEmailPag({ searchParams }: VerifyEmailPageProps) {
  const token = searchParams.token;
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );
  const [verifySignup] = useVerifySignupMutation();
  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    const verifyEmail = async () => {
      try {
        await verifySignup({ token }).unwrap();

        setStatus("success");
      } catch (err) {
        console.log(err);
        setStatus("error");
      }
    };
    verifyEmail();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {status === "loading" && <p>Verifying your email...</p>}
      {status === "success" && <p>Email verified </p>}
      {status === "error" && <p>Invalid or expired token ❌</p>}
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useVerifySignupMutation } from "@/REDUX&AXIOS/api/apiSlice";

// export function useVerifyEmail(token: string) {
//   const [status, setStatus] = useState<"loading" | "success" | "error">(
//     "loading",
//   );

//   const [verifySignup] = useVerifySignupMutation()

//   useEffect(() => {
//     if (!token) {
//       setStatus("error");
//       return;
//     }

//     const verifyEmail = async () => {
//       try {
//         await verifySignup({token}).unwrap()
//         setStatus("success");
//       } catch (err) {
//         console.log(err);
//         setStatus("error");
//       }
//     };
//     verifyEmail();
//   }, [token]);

//   return status;
// }

// export function verifySignupDynamicPage({ searchParams }: VerifyEmailPageProps) {

// }
