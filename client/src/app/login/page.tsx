"use client";
import React, { useEffect, useState } from "react";
import { ConfirmOTP, RequestOTP } from "./actions";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import api from "@/lib/axios/api";
import { setAccessToken } from "@/lib/axios/api.interceptor";
import LoginPageRedux from "@/components/login.redux";

type LoginStep = "CREDENTIALS" | "OTP";
const RESEND_COOLDOWN = 60; // seconds

const LoginPage = () => {
  const router = useRouter();
  const [step, setStep] = useState<LoginStep>("CREDENTIALS");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  const requestOTP = async () => {
    try {
      setLoading(true);
      setError(null);
      await RequestOTP(email, password);
      setResendCooldown(RESEND_COOLDOWN);
      toast.success("OTP sent. Check your email.");
      setStep("OTP");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          err.response?.data?.message || "Login failed Request OTP";
        console.log(err);
        setError(message);
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };

  // step 2: confirm OTP
  const confirmOTP = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await ConfirmOTP(otp);
      const { accessToken } = res.data;
      setAccessToken.set(res.data.accessToken);

      localStorage.setItem("accessToken", accessToken);
      console.log(setAccessToken.get());
      console.log(accessToken);
      toast.success("Login successful.");
      router.push("/profile");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message = err.response?.data?.message || "Invalid code";
        setError(message);
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.post("/user/out-box/login-resend-otp", {
        email,
        password,
      });
      setResendCooldown(RESEND_COOLDOWN);
      toast.success(res.data?.message);
    } catch (err) {
      if (err instanceof AxiosError) {
        const message = err.response?.data?.error?.message || "Invalid code";
        setError(message);
        toast.error(message);
      }
    } finally {
      setLoading(false);
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
    <div>
      <div className="mx-auto mt-20 w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-center text-2xl font-semibold text-zinc-900">
          Login
        </h1>

        {error && (
          <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
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
              onClick={requestOTP}
              disabled={loading}
              className="w-full cursor-pointer rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending code..." : "Continue"}
            </button>
          </div>
        )}

        {step === "OTP" && (
          <div className="space-y-4">
            <p className="text-center text-sm text-zinc-600">
              Enter the code sent to{" "}
              <span className="font-medium text-zinc-900">{email}</span>
            </p>

            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter Code"
              inputMode="numeric"
              className="w-full rounded-lg border text-black border-zinc-300 px-3 py-2 text-center text-lg tracking-widest outline-none transition focus:border-zinc-900"
            />

            <button
              onClick={confirmOTP}
              disabled={loading || otp.length !== 6}
              className="w-full rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify & Login"}
            </button>
            <button
              onClick={resendOTP}
              disabled={loading || resendCooldown > 0}
              className="w-full enabled:cursor-pointer rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Resending OTP..."
                : resendCooldown > 0
                  ? `Resend OTP in ${resendCooldown}`
                  : `Resend OTP 🫡`}
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
      <LoginPageRedux />
    </div>
  );
};

export default LoginPage;
