/*
  Warnings:

  - You are about to drop the column `career` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `institution` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Education` table. All the data in the column will be lost.
  - Added the required column `id_region` to the `Contact_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `concentration_1` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `concentration_2` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degree` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolName` to the `Education` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact_info" ADD COLUMN     "id_region" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "career",
DROP COLUMN "institution",
DROP COLUMN "level",
ADD COLUMN     "concentration_1" TEXT NOT NULL,
ADD COLUMN     "concentration_2" TEXT NOT NULL,
ADD COLUMN     "degree" TEXT NOT NULL,
ADD COLUMN     "schoolName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Level" (
    "id_level" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id_level")
);

-- CreateTable
CREATE TABLE "General_skills" (
    "id_skills" SERIAL NOT NULL,
    "id_employee" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "id_level" INTEGER NOT NULL,

    CONSTRAINT "General_skills_pkey" PRIMARY KEY ("id_skills","id_employee")
);

-- CreateTable
CREATE TABLE "Region" (
    "id_region" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id_region")
);

-- AddForeignKey
ALTER TABLE "General_skills" ADD CONSTRAINT "General_skills_id_level_fkey" FOREIGN KEY ("id_level") REFERENCES "Level"("id_level") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "General_skills" ADD CONSTRAINT "General_skills_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact_info" ADD CONSTRAINT "Contact_info_id_region_fkey" FOREIGN KEY ("id_region") REFERENCES "Region"("id_region") ON DELETE RESTRICT ON UPDATE CASCADE;
