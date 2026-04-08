// server\src\multer\controller\upload.controller.ts
import { RequestHandler } from "express";
import prisma from "../../../lib/db";
import { AppError } from "../../../utils/AppError";
import path from "path";
import fs from "fs";
export const uploadController: RequestHandler = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    file: req.file,
  });
};

export const uploadUserAvatar: RequestHandler = async (req, res, next) => {
  try {
    console.log("req.body:", req.body);

    const { email } = req.body;
    const file = req.file;

    if (!file) throw new AppError("Upload Avatar", "No file uploaded", 400);
    if (!email) throw new AppError("Upload Avatar", "user email required", 400);

    const filePath = `/uploads/${file.filename}`;

    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        avatar: filePath,
      },
    });

    res.json({
      message: "Avatar uploaded",
      user: updateUser,
    });
  } catch (err) {
    next(err);
  }
};

export const uploadAndDeletePrevAvatarController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    if (!req.file) throw new AppError("Upload Avatar", "No file uploaded", 400);

    const { email } = req.body;

    if (!email) throw new AppError("Upload Avatar", "user email required", 400);
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new AppError("upload Avatar", "User not found", 404);

    // Save new avatar path (relative path only)
    const newAvatarPath = `/uploads/user/profile/avatar/${req.file.filename}`;

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { avatar: newAvatarPath },
    });

    // delete file form the disk for now , if we would stored the file in could we would delete that form there
    if (user.avatar) {
      const oldPath = path.join(__dirname, "../../../", user.avatar);

      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    //* flow : save img (upload middleware) -> update db (prisma update in controller here) -> delete old image (in controller here)
    res.json({
      message: "Avatar replaced successfully",
      updatedUser,
    });
  } catch (err) {
    next(err);
  }
};
export const uploadMultiImgController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    if (!req.files || !Array.isArray(req.files))
      throw new AppError("Upload Avatar", "No file uploaded", 400);
    const { email } = req.body;

    if (!email) throw new AppError("Upload Avatar", "user email required", 400);
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new AppError("upload Avatar", "User not found", 404);

    const newAvatarPath = req.files.map(
      (file) => `/uploads/user/profile/avatar/${file.filename}`,
    );

    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        multiImg: newAvatarPath,
      },
    });

    res.json({
      message: "Images posted",
      updateUser,
    });
  } catch (err) {
    next(err);
  }
};
export const uploadMultiImgDeletePrevController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0)
      throw new AppError("Upload Avatar", "No file uploaded", 400);
    const { email } = req.body;

    if (!email) throw new AppError("Upload Avatar", "user email required", 400);
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new AppError("upload Avatar", "User not found", 404);

    const newAvatarPath = req.files.map(
      (file) => `/uploads/user/profile/avatar/${file.filename}`,
    );

    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        multiImg: newAvatarPath,
      },
    });

    if (user.multiImg) {
      const oldPaths = user.multiImg.map((filePath) =>
        path.join(__dirname, "../../../", filePath),
      );

      oldPaths.forEach((oldPath) => {
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      });
    }
    res.json({
      message: "Images posted",
      updateUser,
    });
  } catch (err) {
    next(err);
  }
};

// 1:M relation version
// without deleting previous record db

/*************  ✨ Windsurf Command 🌟  *************/
/**
 * This function handles the upload of multiple images for a user.
 * It first checks if the request body contains a valid email and if the request files array is not empty.
 * Then it fetches the user from the database and checks if the user exists.
 * If the user exists, it creates a new array of image paths based on the request files.
 * It then creates a new array of image objects to be inserted into the database.
 * The function then creates a new array of image objects using the createMany method of prisma.
 * After creating the new images, it checks if the user already has images associated with them.
 * If the user has images associated with them, it deletes the old images from the disk.
 * Finally, it returns the updated user and the new images created.
 */
export const uploadRelationAndDeletePrevAvatarController: RequestHandler =
  async (req, res, next) => {
    try {
      if (!req.files || !Array.isArray(req.files) || req.files.length === 0)
        throw new AppError("Upload Avatar", "No file uploaded", 400);

      const { email } = req.body;
      const user = await prisma.user.findUnique({
        where: { email },
        include: {
          images: true,
        },
      });

      if (!user) throw new AppError("upload Avatar", "User not found", 404);

      const newImagePath = req.files.map(
        (file) => `/uploads/user/profile/avatar/${file.filename}`,
      );

      const newImages = newImagePath.map((path) => ({
        url: path,
        userId: user.id,
      }));

      const updateUser = await prisma.image.createMany({
        // data: newImages,
        data: newImagePath.map((path) => ({
          url: path,
          userId: user.id,
        })),
      });

      if (user.images) {
        const oldPaths = user.images.map((img) =>
          path.join(__dirname, "../../../", img.url),
        );

        oldPaths.forEach((oldPath) => {
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        });
      }

      const user2 = await prisma.user.findUnique({
        where: { email },
        include: {
          images: {
            take: 2,
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });

      res.json({
        message: "Images posted",
        updateUser,
        user,
        user2,
      });
    } catch (err) {
      next(err);
    }
  };
/*******  524374c2-afa7-45df-a3eb-b9c3de70e872  *******/

// with deleting the previous record
export const uploadRelationAndDeletePrevAvatarController2: RequestHandler =
  async (req, res, next) => {
    try {
      if (!req.files || !Array.isArray(req.files) || req.files.length === 0)
        throw new AppError("Upload Avatar", "No file uploaded", 400);

      const { email } = req.body;
      const user = await prisma.user.findUnique({
        where: { email },
        include: {
          images: true,
        },
      });

      if (!user) throw new AppError("upload Avatar", "User not found", 404);

      const newImagePath = req.files.map(
        (file) => `/uploads/user/profile/avatar/${file.filename}`,
      );

      const [updateUserTX] = await prisma.$transaction(async (tx) => {
        await tx.image.deleteMany({
          where: { userId: user.id },
        });

        const updateUserTX = await tx.image.createMany({
          data: newImagePath.map((path) => ({ url: path, userId: user.id, })),
        });

        return [updateUserTX];
      });

      // const updateUser = await prisma.image.createMany({
      //   data: newImagePath.map((path) => ({
      //     url: path,
      //     userId: user.id,
      //   })),
      // });

      if (user.images.length > 0) {
        const oldPaths = user.images.map((img) =>
          path.join(__dirname, "../../../", img.imageUrl),
        );

        oldPaths.forEach((oldPath) => {
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        });
      }

      const user2 = await prisma.user.findUnique({
        where: { email },
        include: {
          images: {
            take: 2,
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });

      res.json({
        message: "Images posted",
        updateUserTX,
        user,
        user2,
      });
    } catch (err) {
      next(err);
    }
  };

//

export const uploadRelationImgAndDeletePrevImgFromDBRawAndFromDisk: RequestHandler =
  async (req, res, next) => {
    try {
      if (!req.files || !Array.isArray(req.files) || req.files.length === 0)
        throw new AppError("Upload Avatar", "No file uploaded", 400);

      const { email } = req.body;
      const user = await prisma.user.findUnique({
        where: { email },
        include: {
          images: true,
        },
      });
      let message = "";
      if (!user) throw new AppError("upload Avatar", "user not found", 404);

      const newImagePaths = req.files.map(
        (file) => `/uploads/user/images/${file.filename}`,
      );

      const MAX_IMAGES = 3;

      const deletedImg = await prisma.$transaction(async (tx) => {
        await tx.image.createMany({
          data: newImagePaths.map((path) => ({ url: path, userId: user.id })),
        });

        //************/

        //* throw error without auto-remove oldest
        // const imagesCount = await prisma.image.count({
        //   where: { userId: user.id },
        // });
        // if (imagesCount >= 3) {
        //   throw new AppError("Upload", "Maximum 3 images allowed", 400)
        // }

        //************/

        const allImage = await tx.image.findMany({
          where: { userId: user.id },
          orderBy: { createdAt: "desc" },
        });
        // if (imagesCount >= 3) {
        if (allImage.length >= 3) {
          const imageToDelete = allImage.slice(3);

          await tx.image.deleteMany({
            where: {
              id: { in: imageToDelete.map((img) => img.id) },
            },
          });

          return imageToDelete; //* return what was deleted
        }

        return []; //* no image was previously deleted
      });

      if (deletedImg.length > 0) {
        deletedImg.forEach((img) => {
          const oldPath = path.join(__dirname, "../../../", img.url);
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        });
      }

      //* it delete all the previous image
      // if (user.images.length > 0) {
      //   //* remember this user is before updated image user
      //   const oldPaths = user.images.map((img) =>
      //     path.join(__dirname, "../../../", img.url),
      //   );
      //   oldPaths.forEach((oldPath) => {
      //     if (fs.existsSync(oldPath)) {
      //       fs.unlinkSync(oldPath);
      //     }
      //   });
      // }

      const userAfterUpdate = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        include: { images: true },
      });

      res.json({
        message: "",
        userAfterUpdate,
      });
    } catch (err) {}
  };

//*------Q&A---------
//*1. const oldPath = path.join(__dirname, "../../../", user.avatar);

// __dirname = the folder of the current file (your controller, e.g., server/src/multer/controller)
// ../../../ = go up 3 folders to reach server/ root
// existingUser.avatar = /uploads/avatars/filename.png
//

// **
// `map((x) => {})` vs `map(x => {})`: In `map((x) => {})`, you must explicitly return a value, whereas in `map(x => {})`, the return value is implicit. This can make a big difference in terms of code readability and maintainability.

// `map` is used when you want to transform each element of an array into a new value, whereas `forEach` is used when you want to perform some side effect for each element of an array (e.g., logging, updating a database, etc.). `map` returns a new array, whereas `forEach` returns `undefined`.
// 👇🏻 my explain
// map((x) => {}) vs map(x => ), in map((x) => {}) you must explicitly return a value : map((x) => { return ... })
// in forEach we are not returning anything because we are not building anything , we are just doing some work for each element of array
