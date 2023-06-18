import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const rolSeeder = async () => {
  const rol1 = await prisma.rol_titles.upsert({
    where: { id_rol_title: 1 },
    update: {},
    create: {
      id_rol_title: 1,
      name: "Junior",
    },
  });

  const rol2 = await prisma.rol_titles.upsert({
    where: { id_rol_title: 2 },
    update: {},
    create: {
      id_rol_title: 2,
      name: "Semi Senior",
    },
  });

  const rol3 = await prisma.rol_titles.upsert({
    where: { id_rol_title: 3 },
    update: {},
    create: {
      id_rol_title: 3,
      name: "Senior",
    },
  });

  const rol4 = await prisma.rol_titles.upsert({
    where: { id_rol_title: 4 },
    update: {},
    create: {
      id_rol_title: 4,
      name: "Master",
    },
  });

  const rol5 = await prisma.rol_titles.upsert({
    where: { id_rol_title: 5 },
    update: {},
    create: {
      id_rol_title: 5,
      name: "Lead",
    },
  });
};
