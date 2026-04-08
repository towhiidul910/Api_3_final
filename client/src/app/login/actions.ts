import api from "@/lib/axios/api";

export const RequestOTP = async (email: string, password: string) => {
  return api.post("/user/out-box/login-request-otp", {
    email,
    password,
  });
};

export const ConfirmOTP = async (token: string) => {
  return api.post("/user/out-box/login-confirm-otp", {
    token,
  });
};
