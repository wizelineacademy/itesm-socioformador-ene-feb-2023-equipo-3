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
    const { pastWid } = req.body;
    const { pastWtitle } = req.body;
    const { pastWDescription } = req.body;
    const { pastWStartDate } = req.body;
    const { pastWEndDate } = req.body;
    const updatePastWork = await db.past_work.update({
      where: {
        id_job: Number(pastWid),
      },
      data: {
        title: pastWtitle,
        description: pastWDescription,
        start_date: new Date(pastWStartDate),
        finish_date: new Date(pastWEndDate),
      },
    });
    res.json(updatePastWork);
  }
}
