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
    const PastWorkId = req.query.id;
    const delPastWork = await db.past_work.delete({
      where: {
        id_job: Number(PastWorkId),
      },
    });
    res.json(delPastWork);
  }
}
