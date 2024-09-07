/*
  Warnings:

  - Made the column `uuid` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `uuid` VARCHAR(191) NOT NULL;
