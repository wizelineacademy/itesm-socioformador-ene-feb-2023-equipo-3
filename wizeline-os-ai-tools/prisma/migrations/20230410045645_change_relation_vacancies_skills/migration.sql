-- DropForeignKey
ALTER TABLE "vacancies_skills" DROP CONSTRAINT "vacancies_skills_id_skill_fkey";

-- AddForeignKey
ALTER TABLE "vacancies_skills" ADD CONSTRAINT "vacancies_skills_id_skill_fkey" FOREIGN KEY ("id_skill") REFERENCES "Vacant_skills"("id_skill") ON DELETE RESTRICT ON UPDATE CASCADE;
