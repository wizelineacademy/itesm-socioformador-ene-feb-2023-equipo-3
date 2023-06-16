import { db } from "@/server/db";
import { getToken } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Establishing a connection using cookies and JWT (JSON Web Tokens)
  const token = await getToken({ req });
  // Signed in
  if (token) {
    const idEmployee = token.id;
    const { expertSkills } = req.body;
    const { advancedSkills } = req.body;
    const { intermediateSkills } = req.body;
    const { basicSkills } = req.body;

    if (expertSkills.length > 0) {
      expertSkills.forEach(async (element: any) => {
        // Perform update on each element
        await db.general_skills.create({
          data: {
            id_employee: idEmployee,
            name: element.label,
            id_level: 1,
          },
        });
      });
    }

    if (advancedSkills.length > 0) {
      advancedSkills.forEach(async (element: any) => {
        // Perform update on each element
        await db.general_skills.create({
          data: {
            id_employee: idEmployee,
            name: element.label,
            id_level: 2,
          },
        });
      });
    }

    if (intermediateSkills.length > 0) {
      intermediateSkills.forEach(async (element: any) => {
        // Perform update on each element
        await db.general_skills.create({
          data: {
            id_employee: idEmployee,
            name: element.label,
            id_level: 3,
          },
        });
      });
    }

    if (basicSkills.length > 0) {
      basicSkills.forEach(async (element: any) => {
        // Perform update on each element
        await db.general_skills.create({
          data: {
            id_employee: idEmployee,
            name: element.label,
            id_level: 4,
          },
        });
      });
    }

    res.status(200).json({ message: "Skills posted" });
  }
}
