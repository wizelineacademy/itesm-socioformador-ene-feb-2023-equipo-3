/*
  Warnings:

  - The primary key for the `Contact_info` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Education` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `auth0_id` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_education]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image_url` to the `Certification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_region` to the `Companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Certification" ADD COLUMN     "image_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Companies" ADD COLUMN     "id_region" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Contact_info" DROP CONSTRAINT "Contact_info_pkey",
ADD COLUMN     "id_Contact" SERIAL NOT NULL,
ADD CONSTRAINT "Contact_info_pkey" PRIMARY KEY ("id_Contact", "id_employee");

-- AlterTable
ALTER TABLE "Education" DROP CONSTRAINT "Education_pkey",
ADD COLUMN     "id_education" SERIAL NOT NULL,
ADD CONSTRAINT "Education_pkey" PRIMARY KEY ("id_education", "id_employee");

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "auth0_id",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Education_id_education_key" ON "Education"("id_education");

-- AddForeignKey
ALTER TABLE "Companies" ADD CONSTRAINT "Companies_id_region_fkey" FOREIGN KEY ("id_region") REFERENCES "Region"("id_region") ON DELETE RESTRICT ON UPDATE CASCADE;
