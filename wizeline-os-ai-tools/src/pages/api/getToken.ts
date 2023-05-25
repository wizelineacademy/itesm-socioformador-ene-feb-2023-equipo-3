import { getToken} from 'next-auth/jwt'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from "@/server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req })
  // Signed in
  if (token) {
    console.log("JSON Web Token", JSON.stringify(token, null, 2));

    const idEmployee = token.id
    
    const generalInfo = await db.contact_info.findUnique({
      where: {
        id_employee: idEmployee,
      },
      select: {
        id_rol_title: true,
        id_region: true,
        phone_number: true,
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

    res.status(200).json({props: {
      generalInfo: generalInfo,
      about: about,
      pastworks: JSON.parse(JSON.stringify(allPastWork)),
      skills: allSkills,
      education: allEducations,
      certifications: allCertifications,
    },});
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
}
