// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import api from "@/lib/axios/api";
import api, { setAccessToken } from "@/lib/axios/api.interceptor";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const login = async () => {
    const res = await api.post("/user/login", { email, password });

    // 🔥 THIS IS IMPORTANT
    // localStorage.setItem("accessToken", res.data.accessToken);
    setAccessToken.set(res.data.accessToken);

    console.log("Access token:", res.data.accessToken);
    alert("Logged in");
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

// what does revoked mean, how do we use Logout, axios setups is easy but we need redux , and the login and signup is simplest auth right? , and how about protected route ? what is the use of Auth Middleware (requireAuth), what is the use case of the requireAuth
// ans: https://chatgpt.com/s/t_695c9bcb6f688191ae87229ad9d11e12

// so this mean , revoking means = this refresh token is no longer trusted, even if it hasn’t expired yet.  .. //* revoked: true; means the token is no longer trusted

// how do we revoke

// wanna make a logout font end and backend

//** signup */
//1. get the data and then create no magic here

//** login */

//1. get the email and password from body
//2. match the email first by findUnique
//3. see if password exist
//4. then check the hashed password see if it matches or not
//5. if password doesn't match then 401
//6. create a accessToken jwt.sign(payload/userId, secretOrPrivateKeyFromEnv, option/expiresIn/15m)
//7. then create refreshToken, jwt.sign(payload/userId, secretOrPrivateKeyFromEnv, option/expiresIn/7d)
//8. then insert the refreshToken in the db, in the refreshToken table that are connect to the user it must be 1:M relation
// inside it we create  insert the refreshToken it self , userId , expireAt , revoked: false

//9. then we send 2 res one is cookie and one as json , res.cookie(name, value/theRefreshToken, cookieOption ), then as json what ever you wanna send
//some of cookie options (_, _, { httpOnly: , secure , sameSite: "strict/lax", expires/whenTheCookieSupposeToBeExpireFromBrowserStorage })

//** logout */

//1. get the token from req, req.cookies.refreshToken
//2. if token exist then , update the token with updateMany in the refresh token , where: {token}, the data: {revoke: true}
//3. res.clearCooke("refreshToken") and res.status(204).send()
//? font end part
//4. create a async function
//5. make a api call to,  await api.post("user/logout"), it will make the refresh token as revoked in the backend
//6. alert
//7. redirect to what ever you want/login page

//** gatekeeper */
//1. get authHeader = req.headers.authorization; explain: read Header:
// authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
// content-type: application/json
// user-agent: Mozilla/5.0
// cookie: abc=123

//2. if authHeader exist and starts with Bearer then continue or Missing token
//3. token = authHeader.split(" ")[1]; explain: authHeader = "Bearer eyJhbGciOiR5cCI6IkpXVCJ9..."
// authHeader.split(" ") = ["Bearer", "eyJhbGciOiIkpXVCJ9..."]  an array
// token = authHeader.split(" ")[1] = "eyJhbGciOiIkpXVCJ9..."
//4. now that we have the token , we can verify it jwt.verify(token, secretOrPublicKey , option)
// options: I don't know yet
//5. req.user = {id: payload.userId}  // i really dont know why is it and why jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string; }.. why is as {userId: sting} i dont get it , how and why //?- answered: // i send the user.id in the the requireAuth , and now we are using it here , or we have to extract the user id from the JWT again (Read header -> Extract token -> Verify JWT -> Parse payload) or we could have send that in body
// //! why JWT_SECRET exist , hwo and why , and what other cases what other way we need it , my JWT_SECRET="dev_super_secret_change_later" is this, why does it matter
//6. next() , continue to the next controller
