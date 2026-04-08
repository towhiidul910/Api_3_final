/*
  Warnings:

  - Added the required column `locked` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VerificationToken" ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "locked" BOOLEAN NOT NULL;
