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
    const { pastWtitle } = req.body;
    const { pastWDescription } = req.body;
    const { pastWStartDate } = req.body;
    const { pastWEndDate } = req.body;

    await db.past_work.create({
      data: {
        id_employee: idEmployee,
        title: pastWtitle,
        description: pastWDescription,
        start_date: new Date(pastWStartDate),
        finish_date: new Date(pastWEndDate),
      },
    });

    res.status(200).json({ message: "Past Work added" });
  }
}
