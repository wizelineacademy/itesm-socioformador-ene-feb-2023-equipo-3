import { getToken } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";
import PastWork from "@/components/Profile/PastWork";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await getToken({ req });
    const {  
            aboutDescription,
            fullName,
            title,
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
            basicSkills} = req.body;

            // res.status(200).json("hola");

    if (token) {
        const idEmployee = token.id;

        try {
            const aboutMe = await db.about_me.create({
              data: {
                id_employee: idEmployee,
                description: aboutDescription,
              },
            });

            //SI JALA 
            const contactInfo = await db.contact_info.create({
                data: {
                  id_employee: idEmployee,
                  id_rol_title: 1,
                  id_region: 1,
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

            // SI MANDA DATOS A LA BD
            const education = await db.education.create({
                data: {
                  id_employee: idEmployee,
                  schoolName: schoolName,
                  degree: degree,
                  specialization_1: specialization1,
                  specialization_2: "nothing"
                },
            });

            const expertSkill = await db.general_skills.create({
                
                data: {
                  id_employee: idEmployee,
                  name: "UI Design",
                  id_level: 1,
                },
            });

            const advancedSkill = await db.general_skills.create({
                
                data: {
                  id_employee: idEmployee,
                  name: "Tableau",
                  id_level: 2,
                },
            });
            
            const intermediateSkill = await db.general_skills.create({
                
                data: {
                  id_employee: idEmployee,
                  name: "Google LightHouse",
                  id_level: 3,
                },
            });
            
            const basicSkill = await db.general_skills.create({
                
                data: {
                  id_employee: idEmployee,
                  name: "Helm",
                  id_level: 4,
                },
            });

            



            console.log(new Date(pastWStartDate))
            console.log(pastWtitle)
            res.status(200).json(basicSkill);
          } catch (error) {
            res.status(400).json({
              message: `Something went wrong :/ ${error}`,
            });
        }



    }
    
}