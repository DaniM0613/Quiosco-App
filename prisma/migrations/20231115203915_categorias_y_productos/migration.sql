/*
  Warnings:

  - Made the column `imagen` on table `producto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `producto` MODIFY `imagen` VARCHAR(191) NOT NULL;
