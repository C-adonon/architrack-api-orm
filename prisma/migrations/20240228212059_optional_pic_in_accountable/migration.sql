/*
  Warnings:

  - The primary key for the `accountable` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `accountable` DROP FOREIGN KEY `Accountable_picId_fkey`;

-- AlterTable
ALTER TABLE `accountable` DROP PRIMARY KEY,
    MODIFY `picId` INTEGER NULL,
    ADD PRIMARY KEY (`appId`);

-- AddForeignKey
ALTER TABLE `Accountable` ADD CONSTRAINT `Accountable_picId_fkey` FOREIGN KEY (`picId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
