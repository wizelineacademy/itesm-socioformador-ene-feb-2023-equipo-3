import { getToken } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Establishing a connection using cookies and JWT (JSON Web Tokens)
  const token = await getToken({ req });

  // Signed in
  if (token) {
    //console.log("JSON Web Token", JSON.stringify(token, null, 2));
    const idEmployee = token.id;

    // Queries data base
    const allSkills = await db.general_skills.findMany({
      where: {
        id_employee: idEmployee,
      },
      select: {
        id_skills: true,
        name: true,
        id_level: true,
      },
    });

    // Response profile info
    res.status(200).json({
      props: {
        skills: allSkills,
      },
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
