/*
  Warnings:

  - You are about to drop the column `description` on the `language` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `application` DROP FOREIGN KEY `Application_businessCapabilityId_fkey`;

-- DropForeignKey
ALTER TABLE `application` DROP FOREIGN KEY `Application_providerId_fkey`;

-- AlterTable
ALTER TABLE `application` MODIFY `businessCapabilityId` INTEGER NULL,
    MODIFY `providerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `language` DROP COLUMN `description`;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_businessCapabilityId_fkey` FOREIGN KEY (`businessCapabilityId`) REFERENCES `Business_capability`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Provider`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
