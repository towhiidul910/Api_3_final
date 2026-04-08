// server\src\multer\upload.ts
import fs from "fs";
import multer from "multer";
import path from "path";
import { AppError } from "../../utils/AppError";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.random() * 1e9}${ext}`;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });

//________--------`````  `````--------________

// the folder path
const uploadPath = path.join(__dirname, "../../uploads/user/images");
// const uploadPath = path.join(__dirname, "../../uploads/user/profile/avatar");
// if the folder path doesn't exist then create it //! when start the app
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// storage configuration
const storageAvatar = multer.diskStorage({
  destination: (_req, _file, cb) => {
    // "_" for this variable is unused or ignored

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);

    // generate unique name
    const uniqueName = `${Date.now()}-${Math.random() * 1e9}${ext}`;

    cb(null, uniqueName);
  },
});

export const uploadAvatar = multer({
  storage: storageAvatar,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },

  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new AppError("upload Avatar", "only image files allowed", 400));
    } else {
      cb(null, true);
    }
  },
});
