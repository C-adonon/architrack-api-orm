/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `uuid` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_uuid_key` ON `User`(`uuid`);
