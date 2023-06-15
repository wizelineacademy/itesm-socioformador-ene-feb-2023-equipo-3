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
    const userInfo = await db.user.findUnique({
      where: {
        id: idEmployee,
      },
      select: {
        name: true,
        image: true,
      },
    });

    const generalInfo = await db.contact_info.findUnique({
      where: {
        id_employee: idEmployee,
      },
      select: {
        state: true,
        city: true,
        country: true,
        rol: {
          select: {
            name: true,
          },
        },
      },
    });

    const about = await db.about_me.findUnique({
      where: {
        id_employee: idEmployee,
      },
      select: {
        description: true,
      },
    });

    const allPastWork = await db.past_work.findMany({
      where: {
        id_employee: idEmployee,
      },
      select: {
        id_job: true,
        title: true,
        description: true,
        start_date: true,
        finish_date: true,
      },
    });

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

    const allEducations = await db.education.findMany({
      where: {
        id_employee: idEmployee,
      },
    });

    const allCertifications = await db.certification.findMany({
      where: {
        id_employee: idEmployee,
      },
    });

    // If it's a new user, response new user.
    if (
      !generalInfo &&
      !about &&
      !allPastWork.length &&
      !allSkills.length &&
      !allEducations.length &&
      !allCertifications.length
    ) {
      res.status(200).json("new User");
    } else {

    // Response profile info
    res.status(200).json({
      props: {
        userInfo: userInfo,
        generalInfo: generalInfo,
        about: about,
        pastworks: JSON.parse(JSON.stringify(allPastWork)),
        skills: allSkills,
        education: allEducations,
        certifications: allCertifications,
      },
    });
    }
  } else {
    // Not Signed in
    res.status(401).send("Unauthorized");
  }
  res.end();
};
