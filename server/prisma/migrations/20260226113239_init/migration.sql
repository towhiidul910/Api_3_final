/*
  Warnings:

  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - Added the required column `imagePublicId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "url",
ADD COLUMN     "imagePublicId" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
ADD COLUMN     "avatarUrl" TEXT;
