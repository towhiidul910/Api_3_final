import { RequestHandler } from "express";
import { AppError } from "../../../utils/AppError";
// import fs from "fs";
import fs from "fs/promises";
import cloudinary from "../config/cloudinary";
import prisma from "../../../lib/db";

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: { images: true },
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const uploadCloudinaryController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    if (!req.file) throw new AppError("Cloudinary ‼️", "No file uploaded", 400);

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "user/avatars",
    });

    console.log("local copy", req.file.path);

    res.json({
      message: "Uploaded successfully",
      cloudUrl: result.secure_url,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Replace old avatar with new one.
 * 1. Delete old avatar from Cloudinary if it exists.
 * 2. Upload new avatar to Cloudinary.
 * 3. Update user avatar in db with new avatar's secure_url and public_id.
 * 4. Delete new avatar from server.
 */
export const uploadCloudinaryAndReplacePrevAndStoreDBController: RequestHandler =
  async (req, res, next) => {
    try {
      if (!req.file)
        throw new AppError("Cloudinary ‼️", "No file uploaded", 400);
      const { email } = req.body;

      if (!email)
        throw new AppError("Upload Avatar", "user email required", 400);
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) throw new AppError("Cloudinary ‼️", "User not found", 400);

      // Delete old avatar from Cloudinary if it exists
      if (user.avatarPublicId) {
        await cloudinary.uploader.destroy(user.avatarPublicId);
      }

      // Upload new avatar to Cloudinary
      const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "user/avatars",
      });

      // Delete new avatar from server
      fs.unlink(req.file.path);

      // Update user avatar in db with new avatar's secure_url and public_id
      const updatedUser = await prisma.user.update({
        where: { email: user.email },
        data: {
          avatarUrl: cloudinaryResult.secure_url,
          avatarPublicId: cloudinaryResult.public_id,
        },
      });

      res.json({
        message: "Avatar updated successfully",
        cloudUrl: updatedUser.avatarUrl,
      });
    } catch (err) {
      next(err);
    }
  };

//* GOAL
// Auto-resize avatars in Cloudinary ✅

// OR move to signed direct frontend uploads

// OR handle multiple images like a gallery system

export const prevPlusResizeController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    if (!req.file) throw new AppError("Cloudinary ‼️", "No file uploaded", 400);
    const { email } = req.body;

    if (!email) throw new AppError("Upload Avatar", "user email required", 400);
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new AppError("Cloudinary ‼️", "User not found", 400);

    // Delete old avatar from Cloudinary if it exists
    if (user.avatarPublicId) {
      await cloudinary.uploader.destroy(user.avatarPublicId);
    }

    // Upload new avatar to Cloudinary
    const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "user/avatars",
      transformation: [
        { width: 300, height: 300, crop: "fill" },
        { quality: "auto" },
        { fetch_format: "auto" },
      ],
    });

    // Delete new avatar from server
    fs.unlink(req.file.path);

    // Update user avatar in db with new avatar's secure_url and public_id
    const updatedUser = await prisma.user.update({
      where: { email: user.email },
      data: {
        avatar: cloudinaryResult.secure_url,
        avatarPublicId: cloudinaryResult.public_id,
      },
    });

    res.json({
      message: "Avatar updated successfully",
      avatar: updatedUser.avatarUrl,
    });
  } catch (err) {
    next(err);
  }
};

//* Resize dynamically on Delivery
// og url https://res.cloudinary.com/dwzcseaxg/image/upload/v1772102888/user/avatars/pfzlqtu9svoqsravcrdw.jpg
// to resize url https://res.cloudinary.com/dwzcseaxg/image/upload/w_300,h_100,c_fill,q_auto,f_auto/v1772102888/user/avatars/pfzlqtu9svoqsravcrdw.jpg
// og image in the cloud stays the same
// its upto you how you change the url

//* Resize dynamically on delivery
export const getResizedAvatarController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new AppError("C", "user not found", 400);
    if (!email) throw new AppError("Upload Avatar", "user email required", 400);
    const resizedAvatarUrl = cloudinary.url(user.avatarPublicId as string, {
      //! remember this is public_id
      width: 80,
      height: 80,
      crop: "fill",
      quality: "auto",
      fetch_format: "auto",
    });

    res.json(resizedAvatarUrl);
  } catch (err) {
    next(err);
  }
};

// 1:M Gallery

// upload
export const uploadGalleryController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const files = req.files as Express.Multer.File[];

    const { email } = req.body;

    if (!email) throw new AppError("Upload Avatar", "user email required", 400);
    if (!files || files.length <= 0)
      throw new AppError("Upload Gallery", "No files uploaded", 400);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new AppError("Upload Gallery", "User not found", 404);

    const uploadImages = [];

    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "user/gallery",
      });

      // delete local temp file
      fs.unlink(file.path);

      const image = await prisma.image.create({
        data: {
          imageUrl: result.secure_url,
          imagePublicId: result.public_id,
          userId: user.id,
        },
      });

      uploadImages.push(image);
    }

    res.json({
      message: "Gallery images uploaded",
      images: uploadImages,
    });
  } catch (err) {
    next(err);
  }
};

export const prevPlusDeleteController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email } = req.body;
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0 || !email)
      throw new AppError("upload Gallery", "user or files problem", 400);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new AppError("Upload Gallery", "user not found", 404);

    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "user/gallery",
      });

      await prisma.image.create({
        data: {
          imageUrl: result.secure_url,
          imagePublicId: result.public_id,
          userId: user.id,
        },
      });
    }

    const allImages = await prisma.image.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    if (allImages.length >= 3) {
      const imageToDelete = allImages.slice(3);

      for (const imgToDelete of imageToDelete) {
        await cloudinary.uploader.destroy(imgToDelete.imagePublicId);
      }

      await prisma.image.deleteMany({
        where: { id: { in: imageToDelete.map((img) => img.id) } },
      });
    }

    const afterImage = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        images: {
          select: {
            imageUrl: true,
          },
        },
      },
    });

    res.json({
      message: "Images uploaded successfully",
      allImages,
      afterImage,
    });
  } catch (err) {
    next(err);
  }
};

// invalidate: true why? => https://chatgpt.com/s/t_69a52063ac5081919b6a4f8a4b86eff8 //* interesting stuff about cache
export const prevPlusUpgradedController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const files = req.files as Express.Multer.File[];
    const { email } = req.body;
    if (!files || files.length === 0 || !email)
      throw new AppError("upload Gallery", "user or files problem", 400);
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new AppError("Upload Gallery", "user not found", 404);

    // upload in cloud and insert in db
    const results = await Promise.all(
      files.map(async (file) => {
        // upload in cloud
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "user/gallery",
        });

        fs.unlink(file.path);

        // update db
        return prisma.image.create({
          data: {
            imageUrl: result.secure_url,
            imagePublicId: result.public_id,
            userId: user.id,
          },
        });
      }),
    );

    // find all img in Descending order, (higher to lower aka new first)
    const allImages = await prisma.image.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    // delete section
    if (allImages.length > 3) {
      // slice newest 3 in db and keep only others to delete
      const imageToDelete = allImages.slice(3);

      // delete form cloud at once so we dont have to wast admin api usage, delete_resources([ids])
      await cloudinary.api.delete_resources(
        imageToDelete.map((img) => img.imagePublicId),
        {
          invalidate: true,
        },
      );
      // delete the db links
      await prisma.image.deleteMany({
        where: {
          id: { in: imageToDelete.map((img) => img.id) },
        },
      });
    }

    const afterImage = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        images: {
          select: {
            imageUrl: true,
          },
        },
      },
    });

    res.json({
      message: "Images uploaded successfully",
      allImages,
      afterImage,
      results,
    });
  } catch (err) {
    next(err);
  }
};

// get user
export const getUserGalleryController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email } = req.body;
    if (!email) throw new AppError("Upload Avatar", "user email required", 400);

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        images: true,
      },
    });
    if (!user) {
      throw new AppError("Gallery", "user not found", 404);
    }

    res.json(user.images);
  } catch (err) {
    next(err);
  }
};

// delete single image
export const deleteImageController: RequestHandler = async (req, res, next) => {
  try {
    const { imgId, userId } = req.body;

    const image = await prisma.image.findUnique({
      where: {
        id: imgId,
      },
    });

    if (!image) {
      throw new AppError("Delete Image", "image not found", 404);
    }
    if (image.userId !== userId)
      throw new AppError("Delete Image", "not authorized", 403);
    await cloudinary.uploader.destroy(image.imagePublicId, {
      invalidate: true,
    });
    // delete form DB
    await prisma.image.delete({
      where: { id: image.id },
    });

    res.json({ message: "image deleted successfully" });
  } catch (err) {
    next(err);
  }
};

// delete multiple image
export const multiImgDeletingController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { imgIds, userId } = req.body;
    if (!imgIds || imgIds === 0)
      throw new AppError("Delete Image", "id Problem", 400);
    const imageToDelete = await prisma.image.findMany({
      where: { userId, id: { in: imgIds } },
    });

    // manual auth check don't need it

    await cloudinary.api.delete_resources(
      imageToDelete.map((img) => img.imagePublicId),
      { invalidate: true },
    );

    await prisma.image.deleteMany({
      where: {
        id: { in: imageToDelete.map((img) => img.id) },
      },
    });

    const afterImage = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        email: true,
        images: {
          select: {
            imageUrl: true,
          },
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

// * These are for G Image
// create multiple image
// get multiple image
// delete multiple image

// create

export const createGImagesController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { email } = req.body;
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0 || !email)
      throw new AppError("Upload Gallery", "user or files problem", 400);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new AppError("Upload Gallery", "user not found", 404);

    const maxOrder = await prisma.gImage.aggregate({
      where: { userId: user.id },
      _max: { order: true },
    });
    const startOrder = maxOrder._max.order ?? 0;

   

    const uploadResults = await Promise.allSettled(
      files.map(async (file, index) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: `users/${user.id}/gallery`,
        });

        // delete temp file
        await fs.unlink(file.path);
        // save in DB
        const image = prisma.gImage.create({
          data: {
            imageUrl: result.secure_url,
            imagePublicId: result.public_id,
            userId: user.id,
            order: startOrder + index + 1,
          },
        });

       
        return image
      }),
    );

    // filter successful uploads
    const successfulUploads = uploadResults
      .filter((r) => r.status === "fulfilled")
      .map((r) => (r as PromiseFulfilledResult<any>).value);

    const failedUploads = uploadResults
      .filter((r) => r.status === "rejected")
      .map((r) => (r as PromiseRejectedResult).reason);

    // Return the current gallery in order
    const allImages = await prisma.gImage.findMany({
      where: { userId: user.id },
      orderBy: { order: "desc" },
    });

    if (allImages.length > 10) {
      const imageToDelete = allImages.slice(10);

      await cloudinary.api.delete_resources(
        imageToDelete.map((img) => img.imagePublicId),
        {
          invalidate: true,
        },
      );

      // delete the db links

      await prisma.image.deleteMany({
        where: {
          id: {in: imageToDelete.map((img) => img.id)}
        }
      })
    }

    const afterImage = await prisma.user.findUnique({
      where: {id: user.id},
      select: {
        email: true,
        gImages: {
          select: {
            imageUrl: true
          }
        }
      }
    })

    res.json({
      message: "Gallery upload complete ",
      uploaded: successfulUploads.length,
      failed: failedUploads.length,
      failedDetails: failedUploads,
      afterImage
    })
  } catch (err) {
    next(err);
  }
};
