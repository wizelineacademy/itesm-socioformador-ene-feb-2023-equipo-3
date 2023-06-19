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
    //console.log("JSON Web Token", JSON.stringify(token, null, 2));
    const idEmployee = token.id;

    const { aboutDescription } = req.body;
    const updateAbout = await db.about_me.update({
      where: {
        id_employee: idEmployee,
      },
      data: {
        description: aboutDescription,
      },
    });
    res.json(updateAbout);
  }
}
