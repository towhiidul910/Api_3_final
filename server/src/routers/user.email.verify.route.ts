import express from "express";
import {
  LoginConfirmController,
  loginRequestController,
  loginRequestOTPController,
  resendLoginCodeController,
  resendLoginOTPController,
  // loginController,
  // resendVerificationEmailLoginController,
  resendVerificationEmailSignupController,
  signupController,
  testDeleteByEmail,
  // verifyEmailForLogin,
  verifyEmailSignupController,
  verifyLoginOTPController,
} from "../controllers/test/user.email.verify.controller";
import { ValidateR } from "../middlewares/validateByZod/validate.resorce";
import {
  bodyLoginSchema,
  bodySignUpSchema,
  emailBodySchema,
  emailCodeBodySchema,
  loadUserProfileSchema,
  tokenBodySchema,
  tokenBodyTooManyTrySchema,
  verifyQuerySchema,
} from "../lib/zodSchema/user.schema";
import { getAllUsers } from "../middlewares/auth/test/handle.email.verification.service";
import {
  signupOutboxController,
  resendVerificationEmailSignupOutboxController,
  verifyEmailSignupOutboxController,
  loginOutboxController,
  verifyOutboxLoginController,
  resendOutboxLoginController,
  verifyOutboxLoginTooManyTryController,
} from "../controllers/user.outBOX.auth.controller";
import { getUserByEmail, userProfile } from "../controllers/user.controller";
import {
  accessMiddleware,
  refreshToken,
} from "../middlewares/auth/auth.middlewhere.service";

const router = express.Router();

// signup
router.post("/signup", ValidateR(bodySignUpSchema), signupController);
router.post(
  "/signup-verify-email",
  ValidateR(verifyQuerySchema),
  verifyEmailSignupController,
);
router.post(
  "/resend-verify-email-signup",
  ValidateR(emailBodySchema),
  resendVerificationEmailSignupController,
);

router.post(
  "/auth/login-request",
  ValidateR(bodyLoginSchema),
  loginRequestController,
);
router.post(
  "/auth/login-confirm",
  ValidateR(verifyQuerySchema),
  LoginConfirmController,
);

router.post(
  "/auth/login-request-otp",
  ValidateR(bodyLoginSchema),
  loginRequestOTPController,
);
router.post(
  "/auth/login-confirm-otp",
  ValidateR(emailCodeBodySchema),
  verifyLoginOTPController,
);
router.post(
  "/auth/login-resend-otp",
  ValidateR(bodyLoginSchema),
  resendLoginOTPController,
);

//*-----------OUT-BOX----------*

//------------Signup------------
router.post(
  "/out-box/signup-request-otp",
  ValidateR(bodySignUpSchema),
  signupOutboxController,
);
router.post(
  "/out-box/signup-confirm-otp",
  ValidateR(verifyQuerySchema),
  verifyEmailSignupOutboxController,
);
router.post(
  "/out-box/signup-resend-otp",
  ValidateR(emailBodySchema),
  resendVerificationEmailSignupOutboxController,
);

//------------login-----------
router.post(
  "/out-box/login-request-otp",
  ValidateR(bodyLoginSchema),
  loginOutboxController,
);
router.post(
  "/out-box/login-confirm-otp",
  ValidateR(tokenBodySchema),
  verifyOutboxLoginController,
);
// too many try
router.post(
  "/out-box/login-confirm-Too-Many-Req-otp",
  ValidateR(tokenBodyTooManyTrySchema),
  verifyOutboxLoginTooManyTryController,
);
router.post(
  "/out-box/login-resend-otp",
  ValidateR(bodyLoginSchema),
  resendOutboxLoginController,
);


//----------Protected Rout------// don't need second ValidateR, it doesn't come from user
router.get("/load-user-profile", accessMiddleware, userProfile);

//----------tokens-------
router.post("/get-new-access-token", refreshToken);
//--------------test-------------
router.get("/getAllUsers", getAllUsers);
router.get("/get-by-email", getUserByEmail);
router.delete("/delete", testDeleteByEmail);

export default router;
