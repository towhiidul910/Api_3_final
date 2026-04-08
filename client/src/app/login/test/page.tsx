"use client";

import api from "@/lib/axios/api";
import axios from "axios";
import React, { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      await api.post("/user/auth/login-request", {
        email,
        password,
      });
      alert("Check your email for verification ✉️");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        //  alert(`${err.response?.status}`)
        if (err.response?.status === 429) {
          alert(`${err.message}`);
        }
      }
      // alert(`signup failed ${err.response}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black px-4">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900/80 backdrop-blur border border-zinc-800 shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Login to your account
        </h1>
        <p className="text-sm text-zinc-400 mb-6">
          please enter your email and password
        </p>

        <div className="space-y-4">
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
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={login}
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500
                       text-white font-medium py-3 transition disabled:opacity-60"
          >
            {loading
              ? "Sending verification Email"
              : "Send verification email for login"}
          </button>
        </div>

        <p className="text-xs text-zinc-500 mt-6 text-center">
          By signing up, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
