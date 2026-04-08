/*
  Warnings:

  - Added the required column `type` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "VerificationTokenType" AS ENUM ('SIGNUP', 'LOGIN');

-- AlterTable
ALTER TABLE "VerificationToken" ADD COLUMN     "type" "VerificationTokenType" NOT NULL;
