/*
  Warnings:

  - The values [SIGNUP,EMAIL] on the enum `OutboxTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OutboxTypes_new" AS ENUM ('SIGNUP_OUTBOX', 'LOGIN_OUTBOX');
ALTER TABLE "OutboxEvent" ALTER COLUMN "type" TYPE "OutboxTypes_new" USING ("type"::text::"OutboxTypes_new");
ALTER TYPE "OutboxTypes" RENAME TO "OutboxTypes_old";
ALTER TYPE "OutboxTypes_new" RENAME TO "OutboxTypes";
DROP TYPE "public"."OutboxTypes_old";
COMMIT;
