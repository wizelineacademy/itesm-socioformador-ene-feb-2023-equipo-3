import { getToken } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";

const handler = async  (req: NextApiRequest, res: NextApiResponse) => {
  // Establishing a connection using cookies and JWT (JSON Web Tokens)
  const token = await getToken({ req });

  // Signed in
  if (token) {
    const idEmployee = token.id;

    // Queries data base
    const allEducations = await db.education.findMany({
      where: {
        id_employee: idEmployee,
      },
    });

    // Response profile info
    res.status(200).json({
      props: {
        education: allEducations,
      },
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};

export default handler;
