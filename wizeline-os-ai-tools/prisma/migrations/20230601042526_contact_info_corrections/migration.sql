/*
  Warnings:

  - You are about to drop the column `id_region` on the `Contact_info` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `city` to the `Contact_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Contact_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Contact_info` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact_info" DROP CONSTRAINT "Contact_info_id_region_fkey";

-- AlterTable
ALTER TABLE "Certification" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Contact_info" DROP COLUMN "id_region",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "specialization_1" DROP NOT NULL,
ALTER COLUMN "specialization_2" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
