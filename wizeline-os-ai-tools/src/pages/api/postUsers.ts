import { getToken } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";
import { SkillsOptions } from "@/utils/skillsData";

export const saveSkillsToDatabase = async (
  skills: SkillsOptions[],
  userId: string,
  levelId: number
) => {
  try {
    for (const skill of skills) {
      await db.general_skills.create({
        data: {
          id_employee: userId,
          name: skill.label,
          id_level: levelId,
        },
      });
    }
    console.log("Skills saved in the database.");
  } catch (error) {
    console.error("Error saving skills:", error);
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req });
  const {
    aboutDescription,
    fullName,
    country,
    state,
    city,
    phoneNumber,
    avatarURL,
    pastWtitle,
    pastWDescription,
    pastWStartDate,
    pastWEndDate,
    schoolName,
    degree,
    specialization1,
    specialization2,
    expertSkills,
    advancedSkills,
    intermediateSkills,
    basicSkills,
  } = req.body;

  if (token) {
    const idEmployee = token.id;

    try {
      const updateUser = await db.user.update({
        where: {
          id: idEmployee,
        },
        data: {
          name: fullName,
          image: avatarURL,
        },
      });

      const aboutMe = await db.about_me.create({
        data: {
          id_employee: idEmployee,
          description: aboutDescription,
        },
      });

      const contactInfo = await db.contact_info.create({
        data: {
          id_employee: idEmployee,
          id_rol_title: 1,
          country: country,
          state: state,
          city: city,
          phone_number: phoneNumber,
          employment_status: true,
        },
      });

      const pastWork = await db.past_work.create({
        data: {
          id_employee: idEmployee,
          title: pastWtitle,
          description: pastWDescription,
          start_date: new Date(pastWStartDate),
          finish_date: new Date(pastWEndDate),
        },
      });

      const education = await db.education.create({
        data: {
          id_employee: idEmployee,
          schoolName: schoolName,
          degree: degree,
          specialization_1: specialization1,
          specialization_2: specialization2,
        },
      });

      const expertSkill = saveSkillsToDatabase(expertSkills, idEmployee, 1);

      const advancedSkill = saveSkillsToDatabase(advancedSkills, idEmployee, 2);

      const intermediateSkill = saveSkillsToDatabase(
        intermediateSkills,
        idEmployee,
        3
      );

      const basicSkill = saveSkillsToDatabase(basicSkills, idEmployee, 4);

      res.status(200).json(basicSkill);
    } catch (error) {
      res.status(400).json({
        message: `Something went wrong :/ ${error}`,
      });
    }
  }
};
