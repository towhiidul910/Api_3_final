// import prisma from "../lib/prisma";
import cron from "node-cron";
// import { processOutbox } from "../controllers/user.email.verify.controller";
import { AppError } from "../utils/AppError";
import { processOutbox } from "../controllers/user.outBOX.auth.controller";

export function startOutboxCron() {
  // run every 3 seconds
  cron.schedule("*/10 * * * * *", async () => {
    try {
      console.log("cron is running 🌽");
      // await processOutbox();
      await processOutbox();
    } catch (err) {
      console.error("❌ Cron job failed:", err);
    }
  });
}
