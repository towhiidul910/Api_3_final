import express, { Request, RequestHandler, Response } from "express";
import prisma from "./lib/db";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { dbErrorHandler } from "./middlewares/errors/dbErrorHandler";
import { zodErrorHandler } from "./middlewares/errors/zodErrorHandler";
import { GlobalErrorHandler } from "./middlewares/errors/globalErrorHandler";
import cookieParser from "cookie-parser";
import cron from "node-cron";

// Import Routes
import userRouter from "./routers/test/user.route";
import userRouterV from "./routers/test/user.verify.route";
import session from "express-session";
import userERouter from "./routers/user.email.verify.route";
import { startOutboxCron } from "./cron/outbox.cron";
import uploadRouters from "./routers/uploads/upload.routes"
import path from "node:path";
// import { processOutbox } from "./controllers/user.email.verify.controller";

//

const app = express();

/* 1️⃣ Security first */
app.use(helmet());

/* 2️⃣ CORS (important for cookies) */
startOutboxCron();
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  }),
);

/* 3️⃣ JSON parsing */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 4️⃣ Logging */
app.use(morgan("dev"));

/* 5️⃣ Cookie parsing */
app.use(cookieParser());

//-------***------
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (_, res) => {
  res.send("API alive");
});
// Simple in-memory “DB”
const users: { id: string; email: string; password: string }[] = [];

app.get("/set-cookie", (req, res) => {
  res.cookie("serverCookie", "456", {
    httpOnly: false, // false so we can see it in browser
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });
  res.send("Cookie has been set!");
});

// This endpoint reads cookies sent by browser
app.get("/show-cookies", (req, res) => {
  res.send(req.headers.cookie || "No cookies sent");
});

//-------***------

/* 6️⃣ Sessions */

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
    },
  }),
);

console.log(
  "DATABASE_URL:",
  process.env.DATABASE_URL,
  "type of ",
  typeof process.env.DATABASE_URL,
);

console.log("navigator.cookieEnabled", navigator.cookieEnabled);

app.use("/user2", userRouter);
app.use("/user2", userRouterV);
app.use("/user", userERouter);
//* -- file upload --
app.use("/upload", uploadRouters);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use(dbErrorHandler);
app.use(zodErrorHandler);
app.use(GlobalErrorHandler);

// app.listen(3002, () => {
//   console.log("Server running on 3002");
// });
const port = Number(process.env.PORT) || 3002;

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${port}`);
});

export default app;

// app.post("/post", async (req: Request, res: Response) => {
//     try {
//         const user = await prisma.userB.create({
//           data: {
//         name: "B2ro",
//         language: "Engli2sh",
//         fakeId: "bro1223",
//         bio: "Just te2sting Prisma!",
//         version: 1.1,
//       },
//         })
//         res.status(201).json({user})
//     } catch (err) {
//       console.log(err)
//       res.status(500).json(err)
//     }
// })

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET as string,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: false },
//   }),
// );
