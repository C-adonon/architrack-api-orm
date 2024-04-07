-- DropForeignKey
ALTER TABLE `business_capability` DROP FOREIGN KEY `Business_Capability_departmentId_fkey`;

-- AddForeignKey
ALTER TABLE `Business_capability` ADD CONSTRAINT `Business_capability_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `business_capability` RENAME INDEX `Business_Capability_name_key` TO `Business_capability_name_key`;
