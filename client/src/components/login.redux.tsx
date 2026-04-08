"use client";

import {
  useLoginMutation,
  useResendLoginOTPMutation,
} from "@/REDUX&AXIOS/api/apiSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BackendErrorResponse } from "./signup.redux.axios";
import { useLoginConfirmMutation } from "@/REDUX&AXIOS/api/apiSlice";
import { setAccessToken } from "@/REDUX&AXIOS/auth/tokenStore";
import { useRouter } from "next/navigation";
// const [loading, setLoading] = useState(false)
// const [error, setError] = useState<string | null>(null)

export default function LoginPageRedux() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"CREDENTIALS" | "OTP">("CREDENTIALS");
  const [otp, setOtp] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [message, setMessage] = useState("");
  const [login, { isLoading: isLoginLoading, isError, error, isSuccess }] =
    useLoginMutation();
  const [resndEmailOTP, { isLoading: isResendOTPloading }] =
    useResendLoginOTPMutation();
  const [
    loginConfirm,
    { isLoading: isConfirmLoading, isSuccess: isLoginConfirmSuccess },
  ] = useLoginConfirmMutation();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null)
  const handleRequestOTP = async () => {
    try {
      setLoading(true);
      const res = await login({ email, password }).unwrap();
      setUserId(res.userId)
      console.log("this is userId", userId)
      setStep("OTP");
      setResendCooldown(60);
      toast.success("OTP sent. Check your email.");
      setMessage("Email has sended check your Email");
    } catch (err) {
      console.log("Raw error", err);
      const fetchError = err as FetchBaseQueryError;
      const ErrorData = fetchError.data as BackendErrorResponse;
      const ErrorMessage =
        ErrorData.error.message ?? ErrorData.message ?? "Something went wrong";
      console.log(ErrorMessage);
      toast.error(ErrorMessage);
      setMessage(ErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmOTP = async () => {
    try {
      setLoading(true);
          setLoading(true);
    // if (!userId) {
    //   // Handle the case where userId is null
    //   console.error("userId is null");
    //   return;
    // }
      const res = await loginConfirm({ token: otp, userId: userId! }).unwrap();
      
      setAccessToken.set(res.accessToken);
      setMessage(res.message);

      console.log(setAccessToken.get());
      toast.success(`Login Success ${message}`);
      router.push("/profile");
    } catch (err) {
      console.log("Raw error", err);
      const fetchError = err as FetchBaseQueryError;
      const ErrorData = fetchError.data as BackendErrorResponse;
      const ErrorMessage =
        ErrorData.error.message ?? ErrorData.message ?? "Something went wrong";
      console.log(ErrorMessage);
      toast.error(ErrorMessage);
      setMessage(ErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      setLoading(true);
      await resndEmailOTP({ email, password }).unwrap();
      setResendCooldown(60);
      toast.success("OTP sent. Check your email.");
      setMessage("Email has sended check your Email");
      
    } catch (err) {
      console.log("Raw error", err);
      const fetchError = err as FetchBaseQueryError;
      const ErrorData = fetchError.data as BackendErrorResponse;
      const ErrorMessage =
        ErrorData.error.message ?? ErrorData.message ?? "Something went wrong";
      console.log(ErrorMessage);
      toast.error(ErrorMessage);
      setMessage(ErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Updated userId", userId)
  }, [userId])

  useEffect(() => {
      if (resendCooldown <= 0) return;
  
      const interval = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [resendCooldown]);

  return (
    <div className="mx-auto mt-20 w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-center text-2xl font-semibold text-zinc-900">
        Login with Redux
      </h1>
      {isError && (
        <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
          {message}
        </p>
      )}
      {step === "CREDENTIALS" && (
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full text-black rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full text-black rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
          />

          <button
            onClick={handleRequestOTP}
            disabled={loading || resendCooldown > 0 || isSuccess}
            className="w-full cursor-pointer rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Sending code..."
              : isSuccess
                ? "Check your email"
                : "Continue"}
          </button>
        </div>
      )}
      {step === "OTP" && (
        <div className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            inputMode="numeric"
            maxLength={6}
            minLength={6}
            placeholder="OTP"
            className="w-full text-black rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
          />

          <button
            onClick={handleConfirmOTP}
            disabled={loading || otp.length !== 6}
            className="w-full cursor-pointer rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify & Login"}
          </button>

          <button
            onClick={handleResendOTP}
            disabled={loading || resendCooldown > 0}
            className="w-full enabled:cursor-pointer rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isConfirmLoading
              ? "confirming otp"
              : loading
                ? "Sending otp.."
                : resendCooldown > 0
                  ? `wait ${resendCooldown}`
                  : isResendOTPloading
                    ? "Resending OTP..."
                    : "Resend OTP"}{" "}
          </button>
          <button
            onClick={() => setStep("CREDENTIALS")}
            className="w-full text-sm text-zinc-500 hover:text-zinc-900"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
