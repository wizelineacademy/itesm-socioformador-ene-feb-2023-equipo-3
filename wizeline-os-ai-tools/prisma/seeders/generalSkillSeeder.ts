import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const generalSkillSeeder = async () => {
    
    // Colab 1
    const colab1GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            name: "Python",
            id_level: 3
        }
    })

    const colab1GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            name: "Agile Methodologies",
            id_level: 4
        }
    })

    const colab1GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            name: "Problem Solving",
            id_level: 4
        }
    })

    const colab1GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            name: "Communication",
            id_level: 4
        }
    })

    const colab1GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            name: "Data Analysis",
            id_level: 3
        }
    })


    // Colab 2
    const colab2GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            name: "Java",
            id_level: 4
        }
    })

    const colab2GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            name: "Leadership",
            id_level: 4
        }
    })

    const colab2GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            name: "Project Management",
            id_level: 4
        }
    })

    const colab2GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            name: "Customer Service",
            id_level: 2
        }
    })

    const colab2GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            name: "Teamwork",
            id_level: 2
        }
    })

    
    // Colab 3
    const colab3GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            name: "C#",
            id_level: 4
        }
    })

    const colab3GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            name: "Problem Solving",
            id_level: 4
        }
    })

    const colab3GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            name: "Software Development",
            id_level: 3
        }
    })

    const colab3GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            name: "Debugging",
            id_level: 4
        }
    })

    const colab3GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            name: "Object Oriented Programming",
            id_level: 3
        }
    })


    // Colab 4
    const colab4GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: "ejhg37f3500001dt2knmjs4gb",
            name: "React",
            id_level: 4
        }
    })

    const colab4GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: "ejhg37f3500001dt2knmjs4gb",
            name: "Front-end Development",
            id_level: 4
        }
    })

    const colab4GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: "ejhg37f3500001dt2knmjs4gb",
            name: "JavaScript",
            id_level: 4
        }
    })

    const colab4GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: "ejhg37f3500001dt2knmjs4gb",
            name: "CSS",
            id_level: 3
        }
    })

    const colab4GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: "ejhg37f3500001dt2knmjs4gb",
            name: "Responsive Web Design",
            id_level: 4
        }
    })


    // Colab 5
    const colab5GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            name: "Data Analysis",
            id_level: 4
        }
    })

    const colab5GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            name: "SQL",
            id_level: 4
        }
    })

    const colab5GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            name: "Python",
            id_level: 4
        }
    })

    const colab5GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            name: "Statistical Analysis",
            id_level: 4
        }
    })

    const colab5GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            name: "Data Visualization",
            id_level: 4
        }
    })

    
    
}
