import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userSeeder = async () => {
  const colab1 = await prisma.user.upsert({
    where: { id: "clicn8jol00041dxesoopbbfw" },
    update: {},
    create: {
      id: "clicn8jol00041dxesoopbbfw",
      email: "carmina@gmail.com",
      name: "Carmina López Palacios",
      image:
        "https://i.pinimg.com/750x/ce/ac/6e/ceac6e5797b34880e204426ffa1a4312.jpg",
    },
  });

  const colab2 = await prisma.user.upsert({
    where: { id: "chp37f3500001dt2knmjs4gb" },
    update: {},
    create: {
      id: "chp37f3500001dt2knmjs4gb",
      email: "cristina@gmail.com",
      name: "Cristina Hernández Pérez",
      image:
        "https://i.pinimg.com/750x/97/cf/17/97cf170c0b48b46a34dc097f75b7c201.jpg",
    },
  });

  const colab3 = await prisma.user.upsert({
    where: { id: "agtc37f3500001dt2knmjs4gb" },
    update: {},
    create: {
      id: "agtc37f3500001dt2knmjs4gb",
      email: "geraldine@gmail.com",
      name: "Geraldine Torres Charles",
      image:
        "https://i.pinimg.com/564x/3c/7e/3f/3c7e3f7d710f1ff9871e2579e11f8ffa.jpg",
    },
  });

  const colab4 = await prisma.user.upsert({
    where: { id: "cli3brs1k00003rktom3ulil6" },
    update: {},
    create: {
      id: "cli3brs1k00003rktom3ulil6",
      email: "eduardo@gmail.com",
      name: "Eduardo Jair Hernández Gómez",
      image:
        "https://i.pinimg.com/750x/59/4d/fb/594dfb74e417ed6347b9daba4322baef.jpg",
    },
  });

  const colab5 = await prisma.user.upsert({
    where: { id: "dc37f3500001dt2knmjs4gb" },
    update: {},
    create: {
      id: "dc37f3500001dt2knmjs4gb",
      email: "daira@gmail.com",
      name: "Daira Chavarría",
      image:
        "https://i.pinimg.com/750x/a5/ae/75/a5ae75a23d10ae90a28f345e7fb894d6.jpg",
    },
  });
};
