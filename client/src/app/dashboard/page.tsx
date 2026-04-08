"use client";

// import api from  "@/lib/axios/api";
import api from "@/lib/axios/api";
// import api from  "@/lib/axios/api.for.interceptor";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const loadMe = async () => {
    // const token = localStorage.getItem("accessToken");

    const res = await api.get(
      "/user/me",
      //   , {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    // ;it sending header with a cookie where refreshToken exist and this is what making this auth

    console.log(res.data);
  };
  // log out function
  const logout = async () => {
    try {
      await api.post("user/logout");
      localStorage.removeItem("accessToken");
      alert("Logged out successfully");

      // redirect to login page
      // window.location.href = "/login";

      router.push("/login");
    } catch (err) {
      console.log(err);
      alert("Logout failed");
    }
  };

  const getAccessToken = async () => {
    try {
      const token = await api.post("user/refresh");

      console.log(token);
    } catch (err) {
      console.log(err);
      alert("Get access token failed");
    }
  };

  return (
    <div>
      <h1>Dashboard (Protected)</h1>
      <p></p>
      <button onClick={loadMe}>Load Profile</button> <hr />
      <Link href={"/signup"}>Signup</Link> <hr />
      <Link href={"/login"}>login</Link> <hr />
      <Link href={"/users"}>users</Link> <hr />
      <Link href={"/resend-verification-email-signup"}>
        resend-verification-email-signup
      </Link>{" "}
      <hr />
      <button onClick={logout}>Logout</button> <hr />
      <button onClick={getAccessToken}>get access token</button>
    </div>
  );
}

export const page = () => {
  let isRefreshing = false;
  isRefreshing = true;

  type FailedRequest = {
    resolve: (token: string | null) => void;
    reject: (error: unknown) => void;
  };
  let failedQueue: FailedRequest[] = [];

  const processQueue = (error: unknown, token: string | null = null) => {
    failedQueue.forEach(({ resolve, reject }) => {
      if (error) reject(error);
      else resolve(token);
    });
    failedQueue = [];
  };
  processQueue(null, "spider");
  console.log(failedQueue);
  console.log("ok 1");

  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      console.log(reject, resolve);
      failedQueue.push({ resolve, reject });
      console.log(reject, resolve);
      resolve("spider");
    }).then((value) => {
      console.log(value);
    });
  }

  isRefreshing = true;
  console.log("ok 2");
  return <div>page</div>;
};
page();
