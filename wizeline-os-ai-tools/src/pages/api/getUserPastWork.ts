import { getToken } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Establishing a connection using cookies and JWT (JSON Web Tokens)
  const token = await getToken({ req });

  // Signed in
  if (token) {
    //console.log("JSON Web Token", JSON.stringify(token, null, 2));
    const idEmployee = token.id;

    // Queries data base

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

    // Response profile info
    res.status(200).json({
      props: {
        pastworks: JSON.parse(JSON.stringify(allPastWork)),
      },
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};

export default handler;