/*
  Warnings:

  - A unique constraint covering the columns `[id_skills]` on the table `General_skills` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "General_skills_id_skills_key" ON "General_skills"("id_skills");
