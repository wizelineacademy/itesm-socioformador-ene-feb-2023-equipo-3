-- CreateTable
CREATE TABLE "Role" (
    "id_role" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "Users" (
    "id_user" SERIAL NOT NULL,
    "roleId_role" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "auth0_id" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_user","roleId_role")
);

-- CreateTable
CREATE TABLE "Past_work" (
    "id_job" SERIAL NOT NULL,
    "id_employee" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "finish_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Past_work_pkey" PRIMARY KEY ("id_job","id_employee")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id_skill" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id_skill")
);

-- CreateTable
CREATE TABLE "Work_skills" (
    "id_job" INTEGER NOT NULL,
    "id_skill" INTEGER NOT NULL,

    CONSTRAINT "Work_skills_pkey" PRIMARY KEY ("id_job","id_skill")
);

-- CreateTable
CREATE TABLE "Certification" (
    "id_certification" SERIAL NOT NULL,
    "id_employee" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id_certification","id_employee")
);

-- CreateTable
CREATE TABLE "Education" (
    "id_employee" INTEGER NOT NULL,
    "career" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id_employee")
);

-- CreateTable
CREATE TABLE "About_me" (
    "id_employee" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "About_me_pkey" PRIMARY KEY ("id_employee")
);

-- CreateTable
CREATE TABLE "Rol_titles" (
    "id_rol_title" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_abbreviation" TEXT,

    CONSTRAINT "Rol_titles_pkey" PRIMARY KEY ("id_rol_title")
);

-- CreateTable
CREATE TABLE "Contact_info" (
    "id_employee" INTEGER NOT NULL,
    "id_rol_title" INTEGER NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "employment_status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Contact_info_pkey" PRIMARY KEY ("id_employee")
);

-- CreateTable
CREATE TABLE "Companies" (
    "id_company" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id_company")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id_project" SERIAL NOT NULL,
    "id_company" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "finish_date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id_project")
);

-- CreateTable
CREATE TABLE "Status" (
    "id_status" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id_status")
);

-- CreateTable
CREATE TABLE "Vacancies" (
    "id_vacant" SERIAL NOT NULL,
    "id_project" INTEGER NOT NULL,
    "id_employee" INTEGER NOT NULL,
    "id_status" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "finish_date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Vacancies_pkey" PRIMARY KEY ("id_vacant","id_project")
);

-- CreateTable
CREATE TABLE "Vacant_skills" (
    "id_skill" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Vacant_skills_pkey" PRIMARY KEY ("id_skill")
);

-- CreateTable
CREATE TABLE "vacancies_skills" (
    "id_vacant" INTEGER NOT NULL,
    "id_skill" INTEGER NOT NULL,

    CONSTRAINT "vacancies_skills_pkey" PRIMARY KEY ("id_vacant","id_skill")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_user_key" ON "Users"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Past_work_id_job_key" ON "Past_work"("id_job");

-- CreateIndex
CREATE UNIQUE INDEX "Certification_id_certification_key" ON "Certification"("id_certification");

-- CreateIndex
CREATE UNIQUE INDEX "Vacancies_id_vacant_key" ON "Vacancies"("id_vacant");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_role_fkey" FOREIGN KEY ("roleId_role") REFERENCES "Role"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Past_work" ADD CONSTRAINT "Past_work_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work_skills" ADD CONSTRAINT "Work_skills_id_job_fkey" FOREIGN KEY ("id_job") REFERENCES "Past_work"("id_job") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work_skills" ADD CONSTRAINT "Work_skills_id_skill_fkey" FOREIGN KEY ("id_skill") REFERENCES "Skills"("id_skill") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "About_me" ADD CONSTRAINT "About_me_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact_info" ADD CONSTRAINT "Contact_info_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact_info" ADD CONSTRAINT "Contact_info_id_rol_title_fkey" FOREIGN KEY ("id_rol_title") REFERENCES "Rol_titles"("id_rol_title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Companies"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacancies" ADD CONSTRAINT "Vacancies_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "Projects"("id_project") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacancies" ADD CONSTRAINT "Vacancies_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacancies" ADD CONSTRAINT "Vacancies_id_status_fkey" FOREIGN KEY ("id_status") REFERENCES "Status"("id_status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacancies_skills" ADD CONSTRAINT "vacancies_skills_id_vacant_fkey" FOREIGN KEY ("id_vacant") REFERENCES "Vacancies"("id_vacant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacancies_skills" ADD CONSTRAINT "vacancies_skills_id_skill_fkey" FOREIGN KEY ("id_skill") REFERENCES "Skills"("id_skill") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
