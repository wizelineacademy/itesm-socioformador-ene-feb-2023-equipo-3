


import { db } from "@/server/db";
import { getToken } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // Establishing a connection using cookies and JWT (JSON Web Tokens)
    const token = await getToken({ req });
    // Signed in
    if (token) {
        const SkillId = req.query.id
        const delSkill = await db.general_skills.delete({
            where: {
                id_skills: Number(SkillId),
            },
        });
        console.log(SkillId)
        res.json(delSkill);

    }


}
