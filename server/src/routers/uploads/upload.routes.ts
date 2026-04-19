// server\src\multer\router\upload.routes.ts
import express from "express";
import { upload, uploadAvatar } from "../../uploads/multer/upload";
import {
  uploadAndDeletePrevAvatarController,
  uploadController,
  uploadMultiImgController,
  uploadMultiImgDeletePrevController,
  uploadRelationAndDeletePrevAvatarController,
  uploadRelationImgAndDeletePrevImgFromDBRawAndFromDisk,
  uploadUserAvatar,
}  from "../../uploads/multer/controller/upload.controller";
import {
  createGImagesController,
  deleteImageController,
  getResizedAvatarController,
  getUser,
  prevPlusDeleteController,
  prevPlusResizeController,
  prevPlusUpgradedController,
  uploadCloudinaryAndReplacePrevAndStoreDBController,
  uploadCloudinaryController,
  uploadGalleryController,
  getGalleryImageController,
  deleteGalleryImageController
}   from "../../uploads/cloudinary/controller/cloudinary.controller";
import { accessMiddleware } from "../../middlewares/auth/auth.middlewhere.service";
import { ValidateR } from "../../middlewares/validateByZod/validate.resorce";
import { getGallerySchema, imageGDeleteParamSchema } from "../../lib/zodSchema/user.schema";
// import { uploadAvatar } from 



const router = express.Router();

router.get(
  "/users",
  getUser,
);

router.post("/image", upload.single("image"), uploadController);

router.post("/avatar", upload.single("image"), uploadUserAvatar);

router.post(
  "/avatar-for-user",
  uploadAvatar.single("image"),
  uploadAndDeletePrevAvatarController,
);
router.post(
  "/multi-img-for-user",
  uploadAvatar.array("image", 3),
  uploadMultiImgController,
);
router.post(
  "/multi-img-delete-prev-for-user",
  uploadAvatar.array("image", 3),
  uploadMultiImgDeletePrevController,
);
router.post(
  "/uploadRelationAndDeletePrevAvatarController",
  uploadAvatar.array("image", 3),
  uploadRelationAndDeletePrevAvatarController,
);
router.post(
  "/uploadRelationImgAndDeletePrevImgFromDBRawAndFromDisk",
  uploadAvatar.array("image", 3),
  uploadRelationImgAndDeletePrevImgFromDBRawAndFromDisk,
);

//** Cloudinary */

router.post(
  "/uploadCloudinaryController",
  upload.single("image"),
  uploadCloudinaryController,
);
router.post(
  "/uploadCloudinaryAndReplacePrevAndStoreDBController",
  upload.single("image"),
  uploadCloudinaryAndReplacePrevAndStoreDBController,
);
router.post(
  "/prevPlusResizeController",
  upload.single("image"),
  prevPlusResizeController,
);
router.get("/getResizedAvatarController", getResizedAvatarController);
router.post(
  "/uploadGalleryController",
  upload.array("image", 3),
  uploadGalleryController,
);

router.post(
  "/prevPlusDeleteController",
  upload.array("image", 3),
  prevPlusDeleteController,
);
router.post(
  "/prevPlusDeleteController",
  upload.array("image", 3),
  prevPlusDeleteController,
);
router.post(
  "/prevPlusUpgradedController",
  upload.array("image", 3),
  prevPlusUpgradedController,
);
router.delete(
  "/deleteImageController",
  deleteImageController
);



// gImage
router.post(
  "/createGImagesController",
  accessMiddleware,
  upload.array("image", 10),
  createGImagesController,
);

router.get("/getGalleryImageController", accessMiddleware, getGalleryImageController)

router.delete("/deleteGalleryImageController/:imageId", accessMiddleware, ValidateR(imageGDeleteParamSchema), deleteGalleryImageController)


export default router;
