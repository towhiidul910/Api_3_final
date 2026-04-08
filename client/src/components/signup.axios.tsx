"use client";

import SignupPageComponent from "@/components/signup.redux.axios";
import api from "@/lib/axios/api";
import { ONE_MIN_MS } from "@/lib/time";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SignupPageAxios = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  const requestVerification = async () => {
    try {
      setLoading(true);
      await api.post("/user/out-box/signup-request-otp", {
        email,
        password,
        name,
      });
      setResendCooldown(3);
      // alert("Check your email for verification ✉️");
      toast.success("Verification Sended Check your email");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          (err.response?.data?.message as string) ||
          "Verification Email send fail";
        setError(message);
        console.log(err);
        toast.error(message);
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  };

  const resendVerificationEmail = async () => {
    try {
      setLoading(true);
      await api.post("/user/out-box/signup-resend-otp", { email });
      setResendCooldown(3);

      toast.success("verification email sended check your email");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          (err.response?.data?.message as string) ||
          "Verification Email send fail";
        setError(message);
        console.log(err);
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // explain https://chatgpt.com/s/t_6984717bbabc8191bbd026e9581d58b4
    if (resendCooldown <= 0) return;

    const interval = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [resendCooldown]);

  return (
    
      <div className="w-full max-w-md rounded-2xl bg-zinc-900/80 backdrop-blur border border-zinc-800 shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Create account vis Axios
        </h1>
        <p className="text-sm text-zinc-400 mb-6">Sign up to get started</p>

        <div className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Email */}
          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Password */}
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={requestVerification}
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500
                       text-white font-medium py-3 transition disabled:opacity-60"
          >
            {loading
              ? "Creating account..."
              : resendCooldown > 0
                ? `Wait ${resendCooldown}s before resending`
                : "Create account"}
          </button>
          <button
            onClick={resendVerificationEmail}
            disabled={loading || resendCooldown > 0}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500
                       text-white font-medium py-3 transition disabled:opacity-60"
          >
            {loading ? "Resending verification Email..." : "Resend Email"}
          </button>
        </div>

        <p className="text-xs text-zinc-500 mt-6 text-center">
          By signing up, you agree to our Terms & Privacy Policy
        </p>
        
      </div>
      
      
  
  );
};

export default SignupPageAxios;
