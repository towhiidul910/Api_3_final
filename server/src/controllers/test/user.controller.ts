import { RequestHandler } from "express";
import prisma from "../../lib/db";
import bcrypt from "bcrypt";
import { AppError } from "../../utils/AppError";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../middlewares/auth/token.service";
import { verify } from "node:crypto";

export const getAUser: RequestHandler = async (req, res, next) => {
  try {
    const r = req.validated ?? {};

    const user = await prisma.user.findUnique({
      where: { email: "user_1765857032141@gmail.com" },
    });
    res.status(200).json({
      user,
      body: req.body,
      headers: req.headers,
      validate: req.validated,
      body2: req.validated?.body,
      params: req.validated?.params,
      query: req.validated?.query,
    });
  } catch (err) {
    next(err);
  }
};
export const testController: RequestHandler = async (req, res, next) => {
  try {
    // const { body, params, query } = req.validated ?? {};
    const r = req.validated ?? {};

    res.status(200).json({
      message: "Validation fully working!",
      body: r.body,
      params: r.params,
      query: r.query,
    });
  } catch (err) {
    next(err);
  }
};

export const createUserController: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req.validated ?? {};

    const user = await prisma.user.create({
      data: {
        name: body.name,
        password: body.password,
        // email: body.email ?? `user_${Date.now()}@gmail.com`
        email: body.email ?? `user_${Date.now()}@gmail.com`,
      },
    });

    res.status(201).json({ message: "created", user });
  } catch (err) {
    next(err);
  }
};

export const signupController: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req.validated ?? {};

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: `user_${Date.now()}@gmail.com`,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created!", userId: user.id, user });
  } catch (err) {
    next(err);
  }
};

// user_1765857032141@gmail.com
// 12345Abcdefg
// "$2b$10$3RM.a2dkpATWBsjdZpvr4ORR0l5G1RkXZVtX84AUgh.vYiStdOdg6"
// John
// id cmj81ombv00005g2iv8a1xkkz
// fid : 3
// do cube solving

export const signInController: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req.validated ?? {};
    const { email, password } = body;

    // 1. find user

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return next(new AppError("Auth", "Invalid email or password", 401));
    }

    // user exists but has no password (OAuth account)
    if (!user.password) {
      return next(
        new AppError(
          "Auth",
          "This account uses social login. Use Google/GitHub login.",
          400,
        ),
      );
    }
    // 2. compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(new AppError("Auth", "Invalid email or password", 401));
    }

    res.status(201).json({
      message: "Login successful",
      userId: user.id,
      user,
    });
  } catch (err) {
    next(err);
  }
};

//* Simple login controller (JWT Access Token only for now), **Access Token**

export const loginControllerBasic: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req.validated ?? {};
    const { email, password } = body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      return next(new AppError("Auth", "Invalid email or password", 401));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(new AppError("Auth", "Invalid email or password", 401));
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" },
    );

    res.status(200).json({
      message: "Logged in!",
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const authMeController: RequestHandler = async (req, res, next) => {
  try {
    res.json({
      message: "You are authenticated",
      userId: req.user?.id, //? body will be empty if we don't send anything with body, duh
      header: req.headers, //? header will be full of stuff, like: if we include our own key values, authorization,
    });
  } catch (err) {
    next(err);
  }
};

export const authMeUserDataController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    if (!req.user?.id) {
      return next(new AppError("Auth", "Unauthorized", 401));
    }

    const user = await prisma.user.findUnique({
      // select: Prisma ONLY fetches these fields . include: include adds relations
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        fakeId: true,
        createdAt: true,
      },
    });
    // const iat =

    res.json({
      message: "You are authenticated",
      userId: req.user?.id,

      user,
    });
  } catch (err) {
    next(err);
  }
};

//* latter understand
// export const statefulLogin: RequestHandler = async (req, res, next) => {
//   try {
//     const { body } = req.validated ?? {};
//     const { email, password } = body;
//     const user = await prisma.user.findUnique({
//       where: {
//         email: email,
//       },
//     });

//     if (!user) return res.status(401).json({ message: "Invalid credentials" });
//     if (!user.password) {
//       return next(
//         new AppError(
//           "Auth",
//           "This account uses social login. Use Google/GitHub login.",
//           400
//         )
//       );
//     }
//     const match = await bcrypt.compare(password, user.password);

//     if (!match) return res.status(401).json({ message: "Invalid credentials" });

//     req.session.userId = user.id;

//     res.json({ message: "Logged in with session!" });
//   } catch (err) {
//     next(err);
//   }
// };

// export const profileSession: RequestHandler = async (req, res, next) => {
//   try {
//     if (!req.session.userId)
//       return res.status(401).json({ message: "Not authenticated" });

//     const user = await prisma.user.findMany({
//       where: {
//         id: req.session.userId,
//       },
//     });
//     res.json({ message: "Session profile", user });
//   } catch (err) {
//     next(err);
//   }
// };

//* Access Token + Refresh Token
export const signupController2: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req.validated ?? {};
    const { name, email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        authProvider: {
          create: {
            provider: "local",
          },
        },
      },
    });

    res.status(201).json({
      message: "user created",
      userId: user.id,
    });
  } catch (err) {
    next(err);
  }
};

// step gy step login

export const loginController2: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.validated?.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      throw new AppError("Auth", "Invalid credentials", 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new AppError("Auth", "Invalid credentials", 401);
    }

    const accessToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" },
    );

    // https://chatgpt.com/s/t_695acefb83508191bd01a39070d12a45 JWT expiresIn vs DB expiresAt
    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" },
    );

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 86400000),
        revoked: false,
      },
    });
    //* made change here for frontend
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      // secure: true,
      secure: false,
      // sameSite: "strict",
      sameSite: "lax",
      // added expires, or add max-age
      expires: new Date(Date.now() + 7 * 86400000),
      // expires: new Date(Date.now() + 10 * 1000),
    });

    res.json({
      accessToken,
      refreshToken,
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const logoutController: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken; // how this work

    if (token) {
      await prisma.refreshToken.updateMany({
        where: { token },
        data: { revoked: true },
      });
    }

    res.clearCookie("refreshToken");
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

//!----------------------<--**-->---------------------!//
export const loginController: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.validated?.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || !user.password) {
      throw new AppError("Auth, logOut", "Email doesn't match", 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new AppError("Auth, password", "Invalid password", 401);
    }

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    //! we are not creating the refresh token here that the problem
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 86400000),
        revoked: false,
      },
    });
    const secret = process.env.JWT_SECRET;
    //* what does cookie option does I don't know yet
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      // expires: new Date(Date.now() + 10 * 1000)
      expires: new Date(Date.now() + 7 * 86400000),
    });
    res.json({ accessToken, refreshToken, secret });
  } catch (err) {
    next(err);
  }
};

export const refreshController: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) throw new AppError("Auth", "No refresh token", 401);

    // verify signature first
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET as string) as {
        userId: string;
      }; // because this payload will return userId and lat , exp
    } catch (err) {
      throw new AppError(
        "Auth",
        "Invalid refresh token , token does not match",
        403,
      );
    }

    const stored = await prisma.refreshToken.findUnique({ where: { token } });

    console.log(stored);

    if (!stored || stored.revoked || stored.expiresAt < new Date()) {
      throw new AppError(
        "Auth",
        "Invalid refresh token, token does not match in db",
        403,
      );
    }

    const accessToken = jwt.sign(
      { userId: stored.userId },
      process.env.JWT_SECRET as string,
    );
    const secret = process.env.JWT_SECRET;
    res.json({ accessToken, stored, secret });
  } catch (err) {
    next(err);
  }
};

export const getRefreshToken: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;

    const stored = await prisma.refreshToken.findUnique({ where: { token } });

    console.log(stored);

    res.json({ stored });
  } catch (err) {
    next(err);
  }
};

//* qna
// https://chatgpt.com/share/6965c8ee-d044-800d-9a9a-25cfc2899ce9
//1. what do you mean HttpOnly = JS cannot steal it (XSS protection).
// doesn't the refresh token suppose to be Storage in browser, im seeing the refreshToken in the cookie , where else cooke suppose to be if not Cookies which in the storage -> cookies -> http://localhost:3000 in browser
// and the accessToken im seeing in Storage -> localStorage -> http://localhost:3000
// and something in the session Storage i dont know what is it __darkreader__wasEnabledForHost
// there is nothing in cache Storage or in the indexed BD
// what is js memory / and why is it different then localStorage, and why in the browser Storage has a local Storage inside and are you talking about that when you saying localStorage?
// the accessToken is not there after 15m then why im still authorized, i know the refreshToken does not authorized me -> it maybe cause for now im only checking from if browser storage -> localStorage has the accessToken (only the key, so expired token or not doesn't matter) or not
// const token = localStorage.getItem("accessToken");
//         if (!token) {
//             router.replace("/unauthorized")
//         }

// i still dong get It why do we need refresh endpoint for , it is create a accessToken if we send a refresh token in cookie

// and we are still not using gate kipper
// are we alloys gonna use axios for auth, or well move on to the redux query, and do we make query like auth is for axios , and other query for redux . how does the real high level web handle query , because axios feels too easy and too good to be true

//* qna 2
//1 i still don't get it what sessionStorage is and will we see this in action soon or later ?
// don't we alloys verify the suer by the accessToken
// cache storage? what do we do with it. do we manually tore some thing
// what do you mean by session , kill the session
// how do we Put access token in memory (not localStorage) and why
// how do fix auth check
//* ans down blow
// getting new accessToken from server to client what do we do with it
// real life use case of gatekeeper, the gate keeper verify by accessToken is it not? and the accessToken stays there only for 15m, and also we are doing
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return next(new AppError("Auth", "Unauthorized aka No token in with request", 401));
//   }

//   const token = authHeader.split(" ")[1]; // why this is where token stay what actually is authHeader
//   const [header, payload, signature] = token.split(".");
// console.log({header, payload, signature})
//   try {
//     const payload = jwt.verify(
//       token,
//       process.env.JWT_SECRET as string
//     ) as { userId: string, iat: number };

//     //, iat: number, exp: number

// console.log({payload})
//     req.user = { id: payload.userId}; //* we cant send a property in req that isn't include in the Request typing in express.d.ts

//     next();
// this which mean we are using jwt secret to identify the token is it enough is it as good as verifying with requestToken which we are storying for the user?
// i still don't get caching , is it browser suppose to do it it self? or do we handle it our self
// what do you mean axios+interceptors "For your learning and control: start with axios+interceptors (easy to reason about). Later, move resource fetching to RTK Query and keep auth logic centralized in axios or an RTK baseQuery."
// how do i make store the accessToken in memory

//* ignore the cache storage for now , we don't use it for auth
//*
// is server cookie different?
// create a login with accessToken stored in memory
// JWT verification — is secret enough? because in the gatekeeper we acre only veryfing the accessToken and it dont match with the db, becasue nothing like accessToken we stroed in db, only the refresh token is in the db, and we created the accessToken using refresh token, and here we only verifying the access token like this
// const payload = jwt.verify(
//   token,
//   process.env.JWT_SECRET as string
// ) as { userId: string, iat: number };
// im assuming it match it self with JWT_SECRET, and we don't really verify it we are extracting the userId and we are then sending the use id to the next controller authMeUserDataController this one and we are finding the user id in the db
//* ans:
// a jwt look like , header.payload.signature
// header -> algorithm info . payload -> userId, exp, iat
// signature -> cryptographic proof

// The signature is created like this:
// HMAC( base64(header) + "." + base64(payload), JWT_SECRET )
// so the signature is match + secret

//* what happens during the verification (jwt.verify)
// 1. we need to split authHeader to the token  -> authHeader.split(" ")[1];
// 2. server split token: jwt.verify(token, process.env.JWT_SECRET as string)
//* what verify does under the hood
// 1.  split token that 3 pieces -> header, payload, signature
// 2. then it create newSignature like before  = HMAC(base64(header) + "." + base64(payload), JWT_SECRET)
// 3. then compare newSignature === signature ? ✅ : ❌
// 4. then server check token not expired(exp) And token format valid or not
// if anything false -> unauthorized

//* why db  matching not needed
// Because:
// Only your server knows JWT_SECRET
// Only your server could’ve created that signature
// Any modification breaks the signature

//* So the token proves:
// “I was issued by THIS server and not modified”. That is stronger than DB lookup.

//* Important mental model (lock & key 🔐)
// JWT_SECRET = master key
// Signature = lock pattern
// Verification = “Does this lock fit our key?”
// No DB required.

//* Why refreshToken IS matched with DB then?
// Because refreshToken:
// must be revocable
// must be rotatable
// must be killable per device

// | Token        | Verified by       |
// | ------------ | ----------------- |
// | accessToken  | JWT_SECRET (math) |
// | refreshToken | Database (state)  |

//* Why accessToken can’t be revoked immediately
// Because:
// it’s stateless
// no DB reference
// valid until expire
// That’s the tradeoff.
//* An accessToken is verified by cryptographic signature, not by storage.

//* qna 3
// what is stateless, and stateful actually mean did we just learn these, my brain says , stateless is accessToken, and stateful is refreshToken
//( create newSignature like before but without the base64 but i don't know why we the function not doing base64(header))= HMAC(header + "." + payload, JWT_SECRET)

//* ans 3
// session is like a localStorage but it dies when the tab dies
// Properties
// Lives per browser tab
// Survives refresh 🔄
// Dies when tab closes ❌
// JS can read/write it ❌ (XSS risk)
// sessionStorage.setItem("foo", "bar")
//* It’s mostly used for:
// Multi-step forms
// Drafts
// Temporary UI state

//*Cache Storage — what do we do with it?
// Short answer: nothing for auth ❌
//* Cache Storage is for:
// Images
// JS bundles
// Offline apps (PWA)
// Service workers
// You do not store:
// accessToken ❌
// refreshToken ❌
// user data ❌
// Browser manages it automatically. Ignore it for now.
//* session = the user ability to ge new accessToken,
// kill session = invalidate the refreshToken
// delete refreshToken from DB
// clear refresh cookie
// user is fully logged out

//* stateless vs stateful
//? stateless -> accessToken
// server remembers nothing
// accessToken
// jwt verified by signature only
// no DB lookup
// scales infinitely
// access  token = stateless
//? stateful -> refreshToken
// server remembers something
// refreshToken stored in DB
// can revoke
// can rotate
// can blacklist
// refreshToken = stateful

//* qna 4
//✅ create login where accessToken stored in memory instead
//✅ make a real auth check, 1. make a page unauthorized if user not logged in, 2. cant perform a action without authorized
// fully understand interceptors
// after understanding interceptors then try to understand the tokenStore , get, set, clear
// can i create interceptors with redux ? or it just a axios thing
// make a route in client fully secure , like real app, advance real app
// get a bit knowledge about retry
// why we are not using .env for axios ? and can we use the axios interceptor with rtk

//* ans
//* interceptor
// Component
//    ↓
// [ Request Interceptor ]   ← before request leaves
//    ↓
// Server
//    ↓
// [ Response Interceptor ]  ← after response comes back
//    ↓
// Component

//* why we need it : because component should not care about auth , retries , headers or the refresh logic, we do that here for all the req and res
//
