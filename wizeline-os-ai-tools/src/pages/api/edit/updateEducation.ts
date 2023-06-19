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
    const { schoolName } = req.body;
    const { degree } = req.body;
    const { specialization1 } = req.body;
    const { specialization2 } = req.body;
    const { idEducation } = req.body;

    const updateEducation = await db.education.update({
      where: {
        id_education: Number(idEducation),
      },
      data: {
        schoolName: schoolName,
        degree: degree,
        specialization_1: specialization1,
        specialization_2: specialization2,
      },
    });
    res.json(updateEducation);
  }
}
