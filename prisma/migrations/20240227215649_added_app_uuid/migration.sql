/*
  Warnings:

  - The primary key for the `accountable` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `application` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `_applicationtolanguage` DROP FOREIGN KEY `_ApplicationToLanguage_A_fkey`;

-- DropForeignKey
ALTER TABLE `_applicationtosoftware` DROP FOREIGN KEY `_ApplicationToSoftware_A_fkey`;

-- DropForeignKey
ALTER TABLE `accountable` DROP FOREIGN KEY `Accountable_appId_fkey`;

-- AlterTable
ALTER TABLE `_applicationtolanguage` MODIFY `A` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `_applicationtosoftware` MODIFY `A` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `accountable` DROP PRIMARY KEY,
    MODIFY `appId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`appId`, `picId`);

-- AlterTable
ALTER TABLE `application` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Accountable` ADD CONSTRAINT `Accountable_appId_fkey` FOREIGN KEY (`appId`) REFERENCES `Application`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApplicationToLanguage` ADD CONSTRAINT `_ApplicationToLanguage_A_fkey` FOREIGN KEY (`A`) REFERENCES `Application`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApplicationToSoftware` ADD CONSTRAINT `_ApplicationToSoftware_A_fkey` FOREIGN KEY (`A`) REFERENCES `Application`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
