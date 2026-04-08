// client/src/app/verify-email/page.tsx
"use client";
import api from "@/lib/axios/api";
import { useEffect, useState } from "react";

type VerifyEmailPageProps = {
  searchParams: {
    token?: string;
  };
};

export default function VerifyEmailPag({ searchParams }: VerifyEmailPageProps) {
  const token = searchParams.token;
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    const verifyEmail = async () => {
      try {
        await api.post(`/user/auth/login-confirm?token=${token}`);

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
