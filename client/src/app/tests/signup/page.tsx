"use client";

import api from "@/lib/axios/api";
import { useState } from "react";
// import api from  "../../lib/axios/api";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const res = await api.post("/user/signup", {
      email,
      password,
      name: "sakurasd",
    });

    console.log(res.data);
    alert("User created");
  };

  return (
    <div>
      <h1>Signup</h1>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signup}>Signup</button>
    </div>
  );
}
