import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const aboutmeSeeder = async () => {
    
    const colab1About = await prisma.about_me.upsert({
        where: { id_employee: "clhp37f3500001dt2knmjs4gb" },
        update: {},
        create: { 
            id_employee: "clhp37f3500001dt2knmjs4gb",
            description: "Carmina López Palacios is a Full Stack Developer with experience in web and mobile app development. She has worked on various projects as a Web Developer, Software Engineer Intern, Backend Developer, Mobile App Developer, Full Stack Developer, and DevOps Engineer. She is skilled in building front-end UI using Angular and React, designing and implementing back-end API using Node.js, Python, and Flask, and integrating mobile apps with existing APIs. Carmina is also certified in AWS and Jenkins. Her excellent problem-solving skills and attention to detail make her a valuable asset to any team."
        }
    })

    const colab2About = await prisma.about_me.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            description: "Cristina Hernández Pérez is a software engineer with experience in product management, data analysis, technical writing, and sales. She has a strong background in Java and Spring Frameworks, as well as SQL, Python, and Tableau. As a Senior Software Engineer, she led the development of scalable and reliable software solutions for complex business problems. As a Product Manager, she was responsible for leading the development of new products and features, from ideation to launch. As a Data Analyst, she analyzed large datasets to identify trends and patterns that can inform business decisions. As a Technical Writer, she created documentation and instructional materials to help users understand and use software products. As a Sales Manager, she led a team of sales representatives to achieve revenue goals and drive business growth. Cristina is also an AWS Certified Cloud Practitioner. She holds a degree in Computer Science from the Monterrey Institute of Technology and Higher Education (ITESM). In her free time, she enjoys hiking, reading, and spending time with her family."
        }
    })

    const colab3About = await prisma.about_me.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            description: "Geraldine Torres Charles is a versatile professional with experience in various fields, including marketing, graphic design, project management, content writing, and human resources. Her passion for exploring new ideas and finding creative solutions has led her to achieve AWS Certified Cloud Practitioner. Geraldine's expertise in analyzing market trends and consumer behavior, creating visual content and assets, managing complex projects, producing written content, and managing the recruitment process has proven to be an asset to various teams. Her ability to ensure compliance with labor laws and company policies has earned her the trust of both employees and management. In her free time, she enjoys exploring new cuisines and hiking in nature."
        }
    })

    const colab4About = await prisma.about_me.create({
        data: {
            id_employee: "ejhg37f3500001dt2knmjs4gb",
            description: "Eduardo Jair Hernández Gómez is a skilled data analyst, product manager, software developer, marketing manager, and business analyst with over 7 years of experience in the technology industry. Eduardo has worked with various programming languages such as Java, Python, and JavaScript, and tools such as Git and JIRA to develop and maintain code. He also has experience using tools such as SQL, Excel, and Tableau to extract insights and trends from data. Eduardo has a proven track record of successfully developing and executing marketing campaigns to drive brand awareness and lead generation, as well as working with cross-functional teams to implement process improvements and monitor results. Eduardo is an AWS Certified Cloud Practitioner, and he holds a degree in Computer Science from a top-tier university. In his free time, Eduardo enjoys hiking and playing guitar."
        }
    })

    const colab5About = await prisma.about_me.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            description: "Daira Chavarría is a data analyst with experience in business intelligence, market research, marketing coordination, and content marketing. She is AWS Certified Cloud Practitioner and proficient in SQL, Python, Excel, Power BI, and statistical analysis tools. Daira's expertise has helped companies optimize their operations, increase revenue, and create data-driven solutions. Her excellent communication and organizational skills have made her an effective team player."        
        }
    })

    

    
}
