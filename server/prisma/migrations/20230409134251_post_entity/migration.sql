/*
  Warnings:

  - Added the required column `location` to the `hotels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hotels" ADD COLUMN     "location" TEXT NOT NULL;
