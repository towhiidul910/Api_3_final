"use client";
import { createPortal } from "react-dom";

import { useSignupMutation } from "@/REDUX&AXIOS/api/apiSlice";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useResendVerificationSignupEmailMutation } from "@/REDUX&AXIOS/api/apiSlice";
// types/api-error.ts

export interface BackendErrorResponse {
  success: false;
  error: {
    from: string;
    message: string;
    statusCode: number;
    isOperational: boolean;
    details?: {
      field: string;
      message: string;
    }[];
  };
  message: string;
  statusCode: string;
  from: string;
}

const SignupPageRedux = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createSignupPost, { isLoading, isSuccess, isError }] =
    useSignupMutation();
  const [resendVerification] = useResendVerificationSignupEmailMutation();
  const [message, setMessage] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    console.log("handleMouseMove", coords, isHovering);

    setCoords({ x: e.clientX, y: e.clientY });
  };
  const handleMouseEnter = () => {
    console.log("handleMouseEnter", coords, isHovering);

    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    console.log("handleMouseLeave", coords, isHovering);

    setIsHovering(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSignupPost({ name, email, password }).unwrap();
      setPassword("");
      setName("");
      setMessage("Verification email sent!");
      console.log("Post created successfully!");
      setResendCooldown(60);
    } catch (err) {
      console.log("RAW ERROR:", err);

      const fetchError = err as FetchBaseQueryError;
      const ErrData = fetchError.data as BackendErrorResponse;
      const ErrorMassage =
        ErrData?.error?.message ?? ErrData?.message ?? "something went wrong";
      setMessage(ErrorMassage);
      console.log(ErrorMassage, ErrData.from);
    }
  };

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resendVerification({ email }).unwrap();

      setMessage("Verification Email Re-sended Successfully!");
      setResendCooldown(60);
    } catch (err) {
      console.log("Raw Error", err);
      const fetchError = err as FetchBaseQueryError;
      const ErrData = fetchError.data as BackendErrorResponse;
      const ErrorMessage =
        ErrData.error.message ??
        ErrData.message ??
        "Something went wrong while re-sending verification Mail";
      console.log(ErrorMessage);
      setMessage(ErrorMessage);
    }
  };

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const interval = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [resendCooldown]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl bg-zinc-900/80 backdrop-blur border border-zinc-800 shadow-xl p-8"
    >
      <h1 className="text-2xl font-semibold text-white mb-2">
        Create account via Redux
      </h1>
      <p className="text-sm text-zinc-400 mb-6">Sign up to get started</p>

      <div className="space-y-4">
        <input
          className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full rounded-xl bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500
                       text-white font-medium py-3 transition disabled:opacity-60"
          type="submit"
          disabled={isLoading || resendCooldown > 0 || isSuccess}
        >
          {isLoading
            ? "Sending Email..."
            : isSuccess
              ? "Check your email"
              : "Signup"}
        </button>
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500
               text-white font-medium py-3 transition disabled:opacity-60"
            onClick={handleResend}
            disabled={isLoading || resendCooldown > 0}
          >
            {isLoading
              ? "Re-Sending Email..."
              : resendCooldown > 0
                ? `wait ${resendCooldown}s before retry`
                : "Resend Email"}
          </button>
        </div>

        {isHovering &&
          createPortal(
            <div
              style={{
                position: "fixed",
                top: coords.y + 15,
                left: coords.x + 15,
              }}
              className="bg-white p-3 shadow-lg rounded border text-gray-500 z-[9999] pointer-events-none"
            >
              Preview Panel
            </div>,
            document.body,
          )}

        {message && <p>{message}</p>}
      </div>
      <p className="text-xs text-zinc-500 mt-6 text-center">
        By signing up, you agree to our Terms & Privacy Policy
      </p>
    </form>
  );
};

export default SignupPageRedux;
