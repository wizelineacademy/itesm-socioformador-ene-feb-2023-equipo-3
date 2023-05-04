import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {


    // -------------------- ROLES ---------------------
    const colaborator = await prisma.role.create({
        data: { type: 'Colab' }
    })

    const admin = await prisma.role.create({
        data: { type: 'Admin' }
    })


    // -------------------- LEVELS ---------------------

    const level1 = await prisma.level.create({
        data: { name: 'Junior' }
    })

    const level2 = await prisma.level.create({
        data: { name: 'Semi Senior' }
    })

    const level3 = await prisma.level.create({
        data: { name: 'Senior' }
    })

    const level4 = await prisma.level.create({
        data: { name: 'Master' }
    })

    const level5 = await prisma.level.create({
        data: { name: 'Lead' }
    })


    // -------------------- COLAB 1 ---------------------
    const colab1 = await prisma.users.create({
        data: {
            roleId_role: 1,
            email: 'carmina@gmail.com',
            name: "Carmina López Palacios",
            image: "https://i.pinimg.com/750x/ce/ac/6e/ceac6e5797b34880e204426ffa1a4312.jpg"
        }
    })

    const colab1About = await prisma.about_me.create({
        data: {
            id_employee: 1,
            description: "Carmina López Palacios is a Full Stack Developer with experience in web and mobile app development. She has worked on various projects as a Web Developer, Software Engineer Intern, Backend Developer, Mobile App Developer, Full Stack Developer, and DevOps Engineer. She is skilled in building front-end UI using Angular and React, designing and implementing back-end API using Node.js, Python, and Flask, and integrating mobile apps with existing APIs. Carmina is also certified in AWS and Jenkins. Her excellent problem-solving skills and attention to detail make her a valuable asset to any team."
        }
    })


    const colab1PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: 1,
            title: "Web Developer",
            description: "I am in charge of the company website's full-stack development and maintenance. The job entails creating and maintaining a website from the ground up. In addition, I am the only Web Developer in this company.",
            start_date: new Date("2019-05-10"),
            finish_date: new Date("2019-11-10"),
        }
    })

    const colab1PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: 1,
            title: "Software Engineer Intern",
            description: "As a Software Engineer Intern, I worked on a team developing an e-commerce platform for a startup. My responsibilities included building the front-end UI using React and designing and implementing the back-end API using Node.js and MongoDB.",
            start_date: new Date("2018-06-18"),
            finish_date: new Date("2018-08-20"),
        }
    })

    const colab1PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: 1,
            title: "Backend Developer",
            description: "As a Backend Developer, I was responsible for developing and maintaining the server-side logic for a web application. My main focus was on building RESTful APIs using Python and Flask. I also worked on database design and optimization using PostgreSQL.",
            start_date: new Date("2020-01-15"),
            finish_date: new Date("2020-08-24"),
        }
    })

    const colab1PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: 1,
            title: "Mobile App Developer",
            description: "As a Mobile App Developer, I worked on a team developing a cross-platform mobile app for a logistics company. My responsibilities included building and testing the app using React Native and integrating it with the company's existing APIs.",
            start_date: new Date("2017-11-09"),
            finish_date: new Date("2018-04-22"),
        }
    })

    const colab1PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: 1,
            title: "Full Stack Developer",
            description: "As a Full Stack Developer, I worked on a team developing a web application for a financial services company. My responsibilities included building the front-end UI using Angular and designing and implementing the back-end API using Node.js and PostgreSQL.",
            start_date: new Date("2019-09-09"),
            finish_date: new Date("2019-12-22"),
        }
    })

    const colab1PastWork6 = await prisma.past_work.create({
        data: {
            id_employee: 1,
            title: "DevOps Engineer",
            description: "As a DevOps Engineer, I am responsible for managing the infrastructure and deployment pipelines for a cloud-based SaaS platform. My main focus is on building and maintaining CI/CD pipelines using Jenkins and deploying to Kubernetes clusters on AWS.",
            start_date: new Date("2021-03-09"),
            finish_date: new Date("2023-03-20"),
        }
    })

    const colab1Certification1 = await prisma.certification.create({
        data: {
            id_employee: 1,
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab1GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: 1,
            name: "Python",
            id_level: 3
        }
    })

    const colab1GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: 1,
            name: "Agile Methodologies",
            id_level: 4
        }
    })

    const colab1GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: 1,
            name: "Problem Solving",
            id_level: 5
        }
    })

    const colab1GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: 1,
            name: "Communication",
            id_level: 5
        }
    })

    const colab1GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: 1,
            name: "Data Analysis",
            id_level: 3
        }
    })

    const colab1Education1 = await prisma.education.create({
        data: {
            id_employee: 1,
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab1Education2 = await prisma.education.create({
        data: {
            id_employee: 1,
            schoolName: "Universidad de Cantabria",
            degree: "Bachelor's Degree",
            specialization_1: "Medicine",
            specialization_2: "Surgery",
        }
    })


    // -------------------- COLAB 2 ---------------------
    const colab2 = await prisma.users.create({
        data: {
            roleId_role: 1,
            email: 'cristina@gmail.com',
            name: "Cristina Hernández Pérez",
            image: "https://i.pinimg.com/750x/97/cf/17/97cf170c0b48b46a34dc097f75b7c201.jpg"
        }
    })

    const colab2About = await prisma.about_me.create({
        data: {
            id_employee: 2,
            description: "Cristina Hernández Pérez is a software engineer with experience in product management, data analysis, technical writing, and sales. She has a strong background in Java and Spring Frameworks, as well as SQL, Python, and Tableau. As a Senior Software Engineer, she led the development of scalable and reliable software solutions for complex business problems. As a Product Manager, she was responsible for leading the development of new products and features, from ideation to launch. As a Data Analyst, she analyzed large datasets to identify trends and patterns that can inform business decisions. As a Technical Writer, she created documentation and instructional materials to help users understand and use software products. As a Sales Manager, she led a team of sales representatives to achieve revenue goals and drive business growth. Cristina is also an AWS Certified Cloud Practitioner. She holds a degree in Computer Science from the Monterrey Institute of Technology and Higher Education (ITESM). In her free time, she enjoys hiking, reading, and spending time with her family."
        }
    })

    const colab2PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: 2,
            title: "Senior Software Engineer",
            description: "As a Senior Software Engineer, I lead the development of scalable and reliable software solutions for complex business problems. I use my experience in software architecture and design patterns to guide the development team and ensure high-quality code. My specialties include working with Java and Spring Frameworks.",
            start_date: new Date("2018-02-01"),
            finish_date: new Date("2021-02-28"),
        }
    })

    const colab2PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: 2,
            title: "Product Manager",
            description: "As a Product Manager, I am responsible for leading the development of new products and features, from ideation to launch. I collaborate with cross-functional teams, including engineers, designers, and marketers, to define product vision and strategy, prioritize features, and create product roadmaps. My specialties include conducting user research, analyzing market trends, and defining product requirements.",
            start_date: new Date("2015-09-01"),
            finish_date: new Date("2018-01-31"),
        }
    })

    const colab2PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: 2,
            title: "Data Analyst",
            description: "As a Data Analyst, I analyze large datasets to identify trends and patterns that can inform business decisions. I use statistical methods and data visualization tools to present my findings and make recommendations to stakeholders. My specialties include working with SQL, Python, and Tableau.",
            start_date: new Date("2019-06-01"),
            finish_date: new Date("2021-05-01"),
        }
    })

    const colab2PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: 2,
            title: "Technical Writer",
            description: "As a Technical Writer, I create documentation and instructional materials to help users understand and use software products. I work closely with software developers to understand product features and create user guides, manuals, and tutorials. My specialties include working with Markdown, Git, and Adobe Creative Suite.",
            start_date: new Date("2017-03-01"),
            finish_date: new Date("2019-05-31"),
        }
    })

    const colab2PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: 2,
            title: "Sales Manager",
            description: "As a Sales Manager, I lead a team of sales representatives to achieve revenue goals and drive business growth. I develop and implement sales strategies, conduct market research, and create sales forecasts. My specialties include building and managing customer relationships, negotiating contracts, and analyzing sales data.",
            start_date: new Date("2014-01-01"),
            finish_date: new Date("2017-02-28"),
        }
    })

    const colab2Certification1 = await prisma.certification.create({
        data: {
            id_employee: 2,
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab2GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: 2,
            name: "Java",
            id_level: 4
        }
    })

    const colab2GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: 2,
            name: "Leadership",
            id_level: 5
        }
    })

    const colab2GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: 2,
            name: "Project Management",
            id_level: 4
        }
    })

    const colab2GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: 2,
            name: "Customer Service",
            id_level: 5
        }
    })

    const colab2GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: 2,
            name: "Teamwork",
            id_level: 5
        }
    })

    const colab2Education1 = await prisma.education.create({
        data: {
            id_employee: 2,
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab2Education2 = await prisma.education.create({
        data: {
            id_employee: 2,
            schoolName: "Brock University",
            degree: "Bachelor's Degree",
            specialization_1: "Marketing Management",
            specialization_2: "Business Administration",
        }
    })



    // -------------------- COLAB 3 ---------------------
    const colab3 = await prisma.users.create({
        data: {
            roleId_role: 1,
            email: 'geraldine@gmail.com',
            name: "Geraldine Torres Charles",
            image: "https://i.pinimg.com/564x/3c/7e/3f/3c7e3f7d710f1ff9871e2579e11f8ffa.jpg"
        }
    })

    const colab3About = await prisma.about_me.create({
        data: {
            id_employee: 3,
            description: "Geraldine Torres Charles is a versatile professional with experience in various fields, including marketing, graphic design, project management, content writing, and human resources. Her passion for exploring new ideas and finding creative solutions has led her to achieve AWS Certified Cloud Practitioner. Geraldine's expertise in analyzing market trends and consumer behavior, creating visual content and assets, managing complex projects, producing written content, and managing the recruitment process has proven to be an asset to various teams. Her ability to ensure compliance with labor laws and company policies has earned her the trust of both employees and management. In her free time, she enjoys exploring new cuisines and hiking in nature."
        }
    })

    const colab3PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: 3,
            title: "Marketing Analyst",
            description: "As a Marketing Analyst, I analyze market trends and consumer behavior to provide insights and recommendations to improve marketing campaigns and drive business growth. I use tools such as Google Analytics and market research surveys to gather data and develop reports for stakeholders.",
            start_date: new Date("2019-05-01"),
            finish_date: new Date("2021-07-31"),
        }
    })

    const colab3PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: 3,
            title: "Graphic Designer",
            description: "As a Graphic Designer, I create visual content and assets for marketing campaigns, websites, and social media platforms. I use Adobe Creative Suite and other design software to produce high-quality graphics and ensure brand consistency. I collaborate with marketing and content teams to deliver impactful designs.",
            start_date: new Date("2017-09-01"),
            finish_date: new Date("2019-04-30"),
        }
    })

    const colab3PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: 3,
            title: "Project Manager",
            description: "As a Project Manager, I oversee the planning, execution, and delivery of complex projects across multiple departments. I use project management tools such as Asana and Trello to create project plans and track progress. I ensure project timelines, budgets, and quality standards are met.",
            start_date: new Date("2015-01-01"),
            finish_date: new Date("2017-08-31"),
        }
    })

    const colab3PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: 3,
            title: "Content Writer",
            description: "As a Content Writer, I create written content for marketing campaigns, websites, and social media platforms. I conduct research and interviews to produce engaging and informative articles, blog posts, and social media captions. I ensure content aligns with brand voice and tone.",
            start_date: new Date("2018-02-01"),
            finish_date: new Date("2020-12-31"),
        }
    })

    const colab3PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: 3,
            title: "Human Resources Specialist",
            description: "As a Human Resources Specialist, I manage the recruitment and selection process, employee relations, and benefits administration. I work with managers to create job descriptions, conduct interviews, and onboard new hires. I ensure compliance with labor laws and company policies.",
            start_date: new Date("2016-05-01"),
            finish_date: new Date("2018-01-31"),
        }
    })

    const colab3Certification1 = await prisma.certification.create({
        data: {
            id_employee: 3,
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab3GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: 3,
            name: "C#",
            id_level: 4
        }
    })

    const colab3GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: 3,
            name: "Problem Solving",
            id_level: 5
        }
    })

    const colab3GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: 3,
            name: "Software Development",
            id_level: 5
        }
    })

    const colab3GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: 3,
            name: "Debugging",
            id_level: 4
        }
    })

    const colab3GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: 3,
            name: "Object Oriented Programming",
            id_level: 5
        }
    })

    const colab3Education1 = await prisma.education.create({
        data: {
            id_employee: 3,
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab3Education2 = await prisma.education.create({
        data: {
            id_employee: 3,
            schoolName: "Politecnico di Milano",
            degree: "Bachelor's Degree",
            specialization_1: "Arquitecture",
            specialization_2: "Design",
        }
    })


    // -------------------- COLAB 4 ---------------------
    const colab4 = await prisma.users.create({
        data: {
            roleId_role: 1,
            email: 'eduardo@gmail.com',
            name: "Eduardo Jair Hernández Gómez",
            image: "https://i.pinimg.com/750x/59/4d/fb/594dfb74e417ed6347b9daba4322baef.jpg"
        }
    })

    const colab4About = await prisma.about_me.create({
        data: {
            id_employee: 4,
            description: "Eduardo Jair Hernández Gómez is a skilled data analyst, product manager, software developer, marketing manager, and business analyst with over 7 years of experience in the technology industry. Eduardo has worked with various programming languages such as Java, Python, and JavaScript, and tools such as Git and JIRA to develop and maintain code. He also has experience using tools such as SQL, Excel, and Tableau to extract insights and trends from data. Eduardo has a proven track record of successfully developing and executing marketing campaigns to drive brand awareness and lead generation, as well as working with cross-functional teams to implement process improvements and monitor results. Eduardo is an AWS Certified Cloud Practitioner, and he holds a degree in Computer Science from a top-tier university. In his free time, Eduardo enjoys hiking and playing guitar."
        }
    })

    const colab4PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: 4,
            title: "Data Analyst",
            description: "As a Data Analyst, I use tools such as SQL, Excel, and Tableau to extract insights and trends from data. I develop reports and dashboards to communicate findings and recommendations to stakeholders. I collaborate with business units to optimize processes and identify areas for improvement.",
            start_date: new Date("2021-01-01"),
            finish_date: new Date("2022-12-31"),
        }
    })

    const colab4PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: 4,
            title: "Product Manager",
            description: "As a Product Manager, I oversee the development and delivery of products from ideation to launch. I conduct market research and gather customer feedback to inform product strategy and roadmap. I work with cross-functional teams to prioritize features, create specifications, and track progress.",
            start_date: new Date("2019-05-01"),
            finish_date: new Date("2020-12-31"),
        }
    })

    const colab4PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: 4,
            title: "Software Developer",
            description: "As a Software Developer, I design, develop, and deploy software solutions to meet business requirements. I use programming languages such as Java, Python, and JavaScript, and tools such as Git and JIRA to develop and maintain code. I collaborate with other developers and stakeholders to ensure project success.",
            start_date: new Date("2017-01-01"),
            finish_date: new Date("2019-04-30"),
        }
    })

    const colab4PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: 4,
            title: "Marketing Manager",
            description: "As a Marketing Manager, I develop and execute marketing campaigns to drive brand awareness and lead generation. I use tools such as HubSpot and Google Analytics to track performance and optimize campaigns. I work with external partners and internal stakeholders to develop messaging and content.",
            start_date: new Date("2018-02-01"),
            finish_date: new Date("2020-12-31"),
        }
    })

    const colab4PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: 4,
            title: "Business Analyst",
            description: "As a Business Analyst, I analyze business operations and financial data to identify opportunities for cost savings and revenue growth. I create financial models and forecasts to support decision-making. I work with cross-functional teams to implement process improvements and monitor results.",
            start_date: new Date("2016-05-01"),
            finish_date: new Date("2018-01-31"),
        }
    })

    const colab4Certification1 = await prisma.certification.create({
        data: {
            id_employee: 4,
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab4GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: 4,
            name: "React",
            id_level: 4
        }
    })

    const colab4GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: 4,
            name: "Front-end Development",
            id_level: 4
        }
    })

    const colab4GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: 4,
            name: "JavaScript",
            id_level: 4
        }
    })

    const colab4GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: 4,
            name: "CSS",
            id_level: 3
        }
    })

    const colab4GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: 4,
            name: "Responsive Web Design",
            id_level: 4
        }
    })

    const colab4Education1 = await prisma.education.create({
        data: {
            id_employee: 4,
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab4Education2 = await prisma.education.create({
        data: {
            id_employee: 4,
            schoolName: "Howest University",
            degree: "Bachelor's Degree",
            specialization_1: "Digital Arts and Entertainment",
            specialization_2: "Animation",
        }
    })


    // -------------------- COLAB 5 ---------------------
    const colab5 = await prisma.users.create({
        data: {
            roleId_role: 1,
            email: 'daira@gmail.com',
            name: "Daira Chavarría",
            image: "https://i.pinimg.com/750x/a5/ae/75/a5ae75a23d10ae90a28f345e7fb894d6.jpg"
        }
    })

    const colab5About = await prisma.about_me.create({
        data: {
            id_employee: 5,
            description: "Daira Chavarría is a data analyst with experience in business intelligence, market research, marketing coordination, and content marketing. She is AWS Certified Cloud Practitioner and proficient in SQL, Python, Excel, Power BI, and statistical analysis tools. Daira's expertise has helped companies optimize their operations, increase revenue, and create data-driven solutions. Her excellent communication and organizational skills have made her an effective team player."        
        }
    })

    const colab5PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: 5,
            title: "Data Analyst",
            description: "As a data analyst, I was responsible for analyzing and interpreting large amounts of data to help the company make informed decisions. I utilized SQL, Python, and statistical analysis tools to perform data analysis and visualization tasks.",
            start_date: new Date("2020-01-01"),
            finish_date: new Date("2022-12-31"),
        }
    })

    const colab5PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: 5,
            title: "Business Intelligence Analyst",
            description: "As a business intelligence analyst, I was responsible for designing and implementing data-driven solutions that helped the company optimize its operations and increase its revenue. I utilized SQL, Excel, and Power BI to create reports and dashboards that provided insights into the company's performance.",
            start_date: new Date("2018-01-01"),
            finish_date: new Date("2019-12-31"),
        }
    })

    const colab5PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: 5,
            title: "Market Research Analyst",
            description: "As a market research analyst, I was responsible for collecting and analyzing data on consumer preferences, market trends, and competitive landscapes. I utilized survey tools and statistical analysis software to gather and interpret data that informed the company's marketing and product development strategies.",
            start_date: new Date("2016-01-01"),
            finish_date: new Date("2017-12-31"),
        }
    })

    const colab5PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: 5,
            title: "Marketing Coordinator",
            description: "As a marketing coordinator, I was responsible for planning and executing marketing campaigns across various channels, including email, social media, and events. I utilized marketing automation tools and analytics platforms to measure the success of these campaigns and optimize future efforts.",
            start_date: new Date("2014-01-01"),
            finish_date: new Date("2015-12-31"),
        }
    })

    const colab5PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: 5,
            title: "Content Marketing Specialist",
            description: "As a content marketing specialist, I was responsible for creating and distributing content that engaged and informed our target audience. I utilized SEO best practices and content marketing tools to increase our brand's visibility and drive traffic to our website.",
            start_date: new Date("2012-01-01"),
            finish_date: new Date("2013-12-31"),
        }
    })

    const colab5Certification1 = await prisma.certification.create({
        data: {
            id_employee: 5,
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab5GeneralSkills1 = await prisma.general_skills.create({
        data: {
            id_employee: 5,
            name: "Data Analysis",
            id_level: 4
        }
    })

    const colab5GeneralSkills2 = await prisma.general_skills.create({
        data: {
            id_employee: 5,
            name: "SQL",
            id_level: 4
        }
    })

    const colab5GeneralSkills3 = await prisma.general_skills.create({
        data: {
            id_employee: 5,
            name: "Python",
            id_level: 4
        }
    })

    const colab5GeneralSkills4 = await prisma.general_skills.create({
        data: {
            id_employee: 5,
            name: "Statistical Analysis",
            id_level: 4
        }
    })

    const colab5GeneralSkills5 = await prisma.general_skills.create({
        data: {
            id_employee: 5,
            name: "Data Visualization",
            id_level: 4
        }
    })

    const colab5Education1 = await prisma.education.create({
        data: {
            id_employee: 5,
            schoolName: "Tecnológico de Monterrey",
            degree: "Bachelor's Degree",
            specialization_1: "Computer Science",
            specialization_2: "Software Engineering",
        }
    })

    const colab5Education2 = await prisma.education.create({
        data: {
            id_employee: 5,
            schoolName: "University of the Arts London",
            degree: "Bachelor's Degree",
            specialization_1: "Dancing Arts",
            specialization_2: "Fashion Design",
        }
    })



    // -------------------- ADMIN 1 ---------------------
    const admin1 = await prisma.users.create({
        data: {
            roleId_role: 2,
            email: 'admin@gmail.com',
            name: "Admin",
            image: ""
        }
    })

}




main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });