import express from "express";
import { ValidateR } from "../../middlewares/validateByZod/validate.resorce";
import {
  bodyLoginSchema,
  bodySignUpSchema,
  loginSchema,
  signUpSchema,
  testSchema,
} from "../../lib/zodSchema/user.schema";
import {
  authMeController,
  authMeUserDataController,
  createUserController,
  getAUser,
  getRefreshToken,
  loginController,
  // loginController,
  loginController2,
  loginControllerBasic,
  logoutController,
  refreshController,
  signInController,
  signupController,
  signupController2,
  testController,
} from "../../controllers/test/user.controller";
import { requireAuth } from "../../middlewares/auth/test/auth.middleware";
import {
  authMiddleware,
  refreshController2,
} from "../../middlewares/jwt/jwt.route";
import { sendMail } from "../../controllers/test/send.mail.controller";

const router = express.Router();

router.post("/testController/:id", ValidateR(testSchema), testController);
router.get("/getAUser", getAUser);
router.post("/createUser", ValidateR(bodySignUpSchema), createUserController);
router.post("/signupController", ValidateR(bodySignUpSchema), signupController);
router.post("/signInController", ValidateR(bodyLoginSchema), signInController);
router.post(
  "/loginController",
  ValidateR(bodyLoginSchema),
  loginControllerBasic,
);
router.get("/me", authMiddleware, authMeController);
router.get(
  "/me/authMeUserDataController",
  requireAuth,
  authMeUserDataController,
);
// authMiddleware & requireAuth are same

router.post("/signup", ValidateR(bodySignUpSchema), signupController2);
router.post("/login2", ValidateR(bodyLoginSchema), loginController2);
router.post("/refresh2", refreshController2);
router.post("/logout", logoutController);

//!----------------------<--**-->---------------------!//
router.post("/login", ValidateR(bodyLoginSchema), loginController);
router.post("/refresh", refreshController);
router.post("/getRefreshToken", getRefreshToken);

router.post("/send-email", sendMail);

export default router;
