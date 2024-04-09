/*
  Warnings:

  - You are about to drop the column `createdById` on the `application` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Made the column `firstname` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `application` DROP FOREIGN KEY `Application_createdById_fkey`;

-- AlterTable
ALTER TABLE `application` DROP COLUMN `createdById`,
    ADD COLUMN `authorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `firstname` VARCHAR(191) NOT NULL,
    MODIFY `lastname` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Application_authorId_key` ON `Application`(`authorId`);

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
