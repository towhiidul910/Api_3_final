// import api from  "@/lib/axios/api.3.interceptor";
// import React, { useState } from "react";
// type LoginStep = "CREDENTIALS" | "OTP";

// const ConfirmOTP = () => {
//   const [step, setStep] = useState<LoginStep>("CREDENTIALS");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   setLoading(true);
//   setError(null);
//   await api.post("/auth/login-request-otp", {
//     email,
//     password
//   });
//   setStep("OTP");

//   return (
//     // JSX code here
//   );
// };

// export default ConfirmOTP;
