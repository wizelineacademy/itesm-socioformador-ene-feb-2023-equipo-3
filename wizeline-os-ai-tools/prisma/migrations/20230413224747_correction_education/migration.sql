/*
  Warnings:

  - You are about to drop the column `concentration_1` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `concentration_2` on the `Education` table. All the data in the column will be lost.
  - Added the required column `specialization_1` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialization_2` to the `Education` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Education" DROP COLUMN "concentration_1",
DROP COLUMN "concentration_2",
ADD COLUMN     "specialization_1" TEXT NOT NULL,
ADD COLUMN     "specialization_2" TEXT NOT NULL;
