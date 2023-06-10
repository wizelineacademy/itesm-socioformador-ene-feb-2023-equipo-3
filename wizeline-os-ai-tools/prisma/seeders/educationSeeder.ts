import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const educationSeeder = async () => {
    
    // Colab 1
    const colab1Education1 = await prisma.education.create({
        data: {
            id_employee: "clicn8jol00041dxesoopbbfw",
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab1Education2 = await prisma.education.create({
        data: {
            id_employee: "clicn8jol00041dxesoopbbfw",
            schoolName: "Universidad de Cantabria",
            degree: "Bachelor's Degree",
            specialization_1: "Medicine",
            specialization_2: "Surgery",
        }
    })

    // Colab 2
    const colab2Education1 = await prisma.education.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab2Education2 = await prisma.education.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            schoolName: "Brock University",
            degree: "Bachelor's Degree",
            specialization_1: "Marketing Management",
            specialization_2: "Business Administration",
        }
    })


    // Colab 3
    const colab3Education1 = await prisma.education.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab3Education2 = await prisma.education.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            schoolName: "Politecnico di Milano",
            degree: "Bachelor's Degree",
            specialization_1: "Arquitecture",
            specialization_2: "Design",
        }
    })


    // Colab 4
    const colab4Education1 = await prisma.education.create({
        data: {
            id_employee: "cli3brs1k00003rktom3ulil6",
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab4Education2 = await prisma.education.create({
        data: {
            id_employee: "cli3brs1k00003rktom3ulil6",
            schoolName: "Howest University",
            degree: "Bachelor's Degree",
            specialization_1: "Digital Arts and Entertainment",
            specialization_2: "Animation",
        }
    })


    // Colab 5
    const colab5Education1 = await prisma.education.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab5Education2 = await prisma.education.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            schoolName: "University of the Arts London",
            degree: "Bachelor's Degree",
            specialization_1: "Dancing Arts",
            specialization_2: "Fashion Design",
        }
    })

    
}
