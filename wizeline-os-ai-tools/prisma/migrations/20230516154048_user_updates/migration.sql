/*
  Warnings:

  - The primary key for the `About_me` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Certification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Contact_info` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `avatar_url` on the `Contact_info` table. All the data in the column will be lost.
  - The primary key for the `Education` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `General_skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Past_work` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Work_skills` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_employee]` on the table `Contact_info` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "About_me" DROP CONSTRAINT "About_me_id_employee_fkey";

-- DropForeignKey
ALTER TABLE "Certification" DROP CONSTRAINT "Certification_id_employee_fkey";

-- DropForeignKey
ALTER TABLE "Contact_info" DROP CONSTRAINT "Contact_info_id_employee_fkey";

-- DropForeignKey
ALTER TABLE "Contact_info" DROP CONSTRAINT "Contact_info_id_region_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_id_employee_fkey";

-- DropForeignKey
ALTER TABLE "General_skills" DROP CONSTRAINT "General_skills_id_employee_fkey";

-- DropForeignKey
ALTER TABLE "Past_work" DROP CONSTRAINT "Past_work_id_employee_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_roleId_role_fkey";

-- DropForeignKey
ALTER TABLE "Vacancies" DROP CONSTRAINT "Vacancies_id_employee_fkey";

-- DropForeignKey
ALTER TABLE "Work_skills" DROP CONSTRAINT "Work_skills_id_job_fkey";

-- DropForeignKey
ALTER TABLE "Work_skills" DROP CONSTRAINT "Work_skills_id_skill_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "About_me" DROP CONSTRAINT "About_me_pkey",
ALTER COLUMN "id_employee" SET DATA TYPE TEXT,
ADD CONSTRAINT "About_me_pkey" PRIMARY KEY ("id_employee");

-- AlterTable
ALTER TABLE "Certification" DROP CONSTRAINT "Certification_pkey",
ALTER COLUMN "id_employee" SET DATA TYPE TEXT,
ADD CONSTRAINT "Certification_pkey" PRIMARY KEY ("id_certification", "id_employee");

-- AlterTable
ALTER TABLE "Contact_info" DROP CONSTRAINT "Contact_info_pkey",
DROP COLUMN "avatar_url",
ALTER COLUMN "id_employee" SET DATA TYPE TEXT,
ALTER COLUMN "employment_status" DROP NOT NULL,
ALTER COLUMN "id_region" DROP NOT NULL,
ADD CONSTRAINT "Contact_info_pkey" PRIMARY KEY ("id_Contact", "id_employee");

-- AlterTable
ALTER TABLE "Education" DROP CONSTRAINT "Education_pkey",
ALTER COLUMN "id_employee" SET DATA TYPE TEXT,
ADD CONSTRAINT "Education_pkey" PRIMARY KEY ("id_education", "id_employee");

-- AlterTable
ALTER TABLE "General_skills" DROP CONSTRAINT "General_skills_pkey",
ALTER COLUMN "id_employee" SET DATA TYPE TEXT,
ADD CONSTRAINT "General_skills_pkey" PRIMARY KEY ("id_skills", "id_employee");

-- AlterTable
ALTER TABLE "Past_work" DROP CONSTRAINT "Past_work_pkey",
ALTER COLUMN "id_employee" SET DATA TYPE TEXT,
ADD CONSTRAINT "Past_work_pkey" PRIMARY KEY ("id_job", "id_employee");

-- AlterTable
ALTER TABLE "Vacancies" ALTER COLUMN "id_employee" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "Skills";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "Work_skills";

-- CreateIndex
CREATE UNIQUE INDEX "Contact_info_id_employee_key" ON "Contact_info"("id_employee");

-- AddForeignKey
ALTER TABLE "Past_work" ADD CONSTRAINT "Past_work_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "General_skills" ADD CONSTRAINT "General_skills_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "About_me" ADD CONSTRAINT "About_me_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact_info" ADD CONSTRAINT "Contact_info_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact_info" ADD CONSTRAINT "Contact_info_id_region_fkey" FOREIGN KEY ("id_region") REFERENCES "Region"("id_region") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacancies" ADD CONSTRAINT "Vacancies_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
