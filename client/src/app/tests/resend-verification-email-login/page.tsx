"use client";
import api from "@/lib/axios/api.3.interceptor";
import { AxiosError } from "axios";
import React, { useState } from "react";

const ResendVerificationEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const resentMail = async () => {
    try {
      setLoading(true);
      await api.post("/user/auth/resend-login-code", {
        email,
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(
          `${err.response?.data?.error?.message || "something went wrong 🍭"}`,
        );
        console.log(err);
      } else {
        alert(`something wet wrong`);
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black px-4">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900/80 backdrop-blur border border-zinc-800 shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Resend Verification Mail
        </h1>
        <p className="text-sm text-zinc-400 mb-6">Resend verification Mail</p>

        <div className="space-y-4">
          {/* Email */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={resentMail}
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500
                       text-white font-medium py-3 transition disabled:opacity-60"
          >
            {loading ? "Email sending please wait..." : "Resend Email"}
          </button>
        </div>

        <p className="text-xs text-zinc-500 mt-6 text-center">
          By signing up, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default ResendVerificationEmail;
