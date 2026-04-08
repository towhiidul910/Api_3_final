/*
  Warnings:

  - You are about to drop the column `order` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "order";

-- CreateTable
CREATE TABLE "GImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imagePublicId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GImage" ADD CONSTRAINT "GImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
