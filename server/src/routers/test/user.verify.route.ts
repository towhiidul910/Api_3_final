import express from "express";
import {
  bodySignUpSchema,
  verifyQuerySchema,
} from "../../lib/zodSchema/user.schema";
import { signupController } from "../../controllers/test/user.controller";
import { verifyEmailController } from "../../controllers/test/user.email.verification.controller";
import { getVerifiedUser } from "../../controllers/test/user.create.controller";
import { ValidateR } from "../../middlewares/validateByZod/validate.resorce";
// import {
//   getVerifiedUser,
//   signupController,
//   verifyEmailController,
// } from "../controllers/test/user.create.controller";
// import { ValidateR } from "../middlewares/validateByZod/validate.resorce";
// import {
//   bodySignUpSchema,
//   verifyQuerySchema,
// } from "../lib/zodSchema/user.schema";

const router = express.Router();

router.post(
  "/signupControllerV",
  ValidateR(bodySignUpSchema),
  signupController,
);
router.post(
  "/verifyEmailController",
  ValidateR(verifyQuerySchema),
  verifyEmailController,
);
router.get("/getVerifiedUser", getVerifiedUser);

export default router;
