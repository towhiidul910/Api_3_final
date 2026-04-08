/*
  Warnings:

  - You are about to drop the column `payload` on the `OutboxEvent` table. All the data in the column will be lost.
  - Changed the type of `type` on the `OutboxEvent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "OutboxTypes" AS ENUM ('SIGNUP', 'EMAIL');

-- AlterTable
ALTER TABLE "OutboxEvent" DROP COLUMN "payload",
DROP COLUMN "type",
ADD COLUMN     "type" "OutboxTypes" NOT NULL;

-- CreateTable
CREATE TABLE "Payload" (
    "id" TEXT NOT NULL,
    "outboxId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "Payload_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payload_outboxId_key" ON "Payload"("outboxId");

-- AddForeignKey
ALTER TABLE "Payload" ADD CONSTRAINT "Payload_outboxId_fkey" FOREIGN KEY ("outboxId") REFERENCES "OutboxEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
