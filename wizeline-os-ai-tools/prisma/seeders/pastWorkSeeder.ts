import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const pastWorkSeeder = async () => {

    // Colab 1
    
    const colab1PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            title: "Web Developer",
            description: "I am in charge of the company website's full-stack development and maintenance. The job entails creating and maintaining a website from the ground up. In addition, I am the only Web Developer in this company.",
            start_date: new Date("2019-05-10"),
            finish_date: new Date("2019-11-10"),
        }
    })

    const colab1PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            title: "Software Engineer Intern",
            description: "As a Software Engineer Intern, I worked on a team developing an e-commerce platform for a startup. My responsibilities included building the front-end UI using React and designing and implementing the back-end API using Node.js and MongoDB.",
            start_date: new Date("2018-06-18"),
            finish_date: new Date("2018-08-20"),
        }
    })

    const colab1PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            title: "Backend Developer",
            description: "As a Backend Developer, I was responsible for developing and maintaining the server-side logic for a web application. My main focus was on building RESTful APIs using Python and Flask. I also worked on database design and optimization using PostgreSQL.",
            start_date: new Date("2020-01-15"),
            finish_date: new Date("2020-08-24"),
        }
    })

    const colab1PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            title: "Mobile App Developer",
            description: "As a Mobile App Developer, I worked on a team developing a cross-platform mobile app for a logistics company. My responsibilities included building and testing the app using React Native and integrating it with the company's existing APIs.",
            start_date: new Date("2017-11-09"),
            finish_date: new Date("2018-04-22"),
        }
    })

    const colab1PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            title: "Full Stack Developer",
            description: "As a Full Stack Developer, I worked on a team developing a web application for a financial services company. My responsibilities included building the front-end UI using Angular and designing and implementing the back-end API using Node.js and PostgreSQL.",
            start_date: new Date("2019-09-09"),
            finish_date: new Date("2019-12-22"),
        }
    })

    const colab1PastWork6 = await prisma.past_work.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            title: "DevOps Engineer",
            description: "As a DevOps Engineer, I am responsible for managing the infrastructure and deployment pipelines for a cloud-based SaaS platform. My main focus is on building and maintaining CI/CD pipelines using Jenkins and deploying to Kubernetes clusters on AWS.",
            start_date: new Date("2021-03-09"),
            finish_date: new Date("2023-03-20"),
        }
    })


    // Colab 2
    const colab2PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            title: "Senior Software Engineer",
            description: "As a Senior Software Engineer, I lead the development of scalable and reliable software solutions for complex business problems. I use my experience in software architecture and design patterns to guide the development team and ensure high-quality code. My specialties include working with Java and Spring Frameworks.",
            start_date: new Date("2018-02-01"),
            finish_date: new Date("2021-02-28"),
        }
    })

    const colab2PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            title: "Product Manager",
            description: "As a Product Manager, I am responsible for leading the development of new products and features, from ideation to launch. I collaborate with cross-functional teams, including engineers, designers, and marketers, to define product vision and strategy, prioritize features, and create product roadmaps. My specialties include conducting user research, analyzing market trends, and defining product requirements.",
            start_date: new Date("2015-09-01"),
            finish_date: new Date("2018-01-31"),
        }
    })

    const colab2PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            title: "Data Analyst",
            description: "As a Data Analyst, I analyze large datasets to identify trends and patterns that can inform business decisions. I use statistical methods and data visualization tools to present my findings and make recommendations to stakeholders. My specialties include working with SQL, Python, and Tableau.",
            start_date: new Date("2019-06-01"),
            finish_date: new Date("2021-05-01"),
        }
    })

    const colab2PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            title: "Technical Writer",
            description: "As a Technical Writer, I create documentation and instructional materials to help users understand and use software products. I work closely with software developers to understand product features and create user guides, manuals, and tutorials. My specialties include working with Markdown, Git, and Adobe Creative Suite.",
            start_date: new Date("2017-03-01"),
            finish_date: new Date("2019-05-31"),
        }
    })

    const colab2PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            title: "Sales Manager",
            description: "As a Sales Manager, I lead a team of sales representatives to achieve revenue goals and drive business growth. I develop and implement sales strategies, conduct market research, and create sales forecasts. My specialties include building and managing customer relationships, negotiating contracts, and analyzing sales data.",
            start_date: new Date("2014-01-01"),
            finish_date: new Date("2017-02-28"),
        }
    })


    // Colab 3
    const colab3PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            title: "Marketing Analyst",
            description: "As a Marketing Analyst, I analyze market trends and consumer behavior to provide insights and recommendations to improve marketing campaigns and drive business growth. I use tools such as Google Analytics and market research surveys to gather data and develop reports for stakeholders.",
            start_date: new Date("2019-05-01"),
            finish_date: new Date("2021-07-31"),
        }
    })

    const colab3PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            title: "Graphic Designer",
            description: "As a Graphic Designer, I create visual content and assets for marketing campaigns, websites, and social media platforms. I use Adobe Creative Suite and other design software to produce high-quality graphics and ensure brand consistency. I collaborate with marketing and content teams to deliver impactful designs.",
            start_date: new Date("2017-09-01"),
            finish_date: new Date("2019-04-30"),
        }
    })

    const colab3PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            title: "Project Manager",
            description: "As a Project Manager, I oversee the planning, execution, and delivery of complex projects across multiple departments. I use project management tools such as Asana and Trello to create project plans and track progress. I ensure project timelines, budgets, and quality standards are met.",
            start_date: new Date("2015-01-01"),
            finish_date: new Date("2017-08-31"),
        }
    })

    const colab3PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            title: "Content Writer",
            description: "As a Content Writer, I create written content for marketing campaigns, websites, and social media platforms. I conduct research and interviews to produce engaging and informative articles, blog posts, and social media captions. I ensure content aligns with brand voice and tone.",
            start_date: new Date("2018-02-01"),
            finish_date: new Date("2020-12-31"),
        }
    })

    const colab3PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            title: "Human Resources Specialist",
            description: "As a Human Resources Specialist, I manage the recruitment and selection process, employee relations, and benefits administration. I work with managers to create job descriptions, conduct interviews, and onboard new hires. I ensure compliance with labor laws and company policies.",
            start_date: new Date("2016-05-01"),
            finish_date: new Date("2018-01-31"),
        }
    })


    // Colab 4
    const colab4PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: "cli3brs1k00003rktom3ulil6",
            title: "Data Analyst",
            description: "As a Data Analyst, I use tools such as SQL, Excel, and Tableau to extract insights and trends from data. I develop reports and dashboards to communicate findings and recommendations to stakeholders. I collaborate with business units to optimize processes and identify areas for improvement.",
            start_date: new Date("2021-01-01"),
            finish_date: new Date("2022-12-31"),
        }
    })

    const colab4PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: "cli3brs1k00003rktom3ulil6",
            title: "Product Manager",
            description: "As a Product Manager, I oversee the development and delivery of products from ideation to launch. I conduct market research and gather customer feedback to inform product strategy and roadmap. I work with cross-functional teams to prioritize features, create specifications, and track progress.",
            start_date: new Date("2019-05-01"),
            finish_date: new Date("2020-12-31"),
        }
    })

    const colab4PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: "cli3brs1k00003rktom3ulil6",
            title: "Software Developer",
            description: "As a Software Developer, I design, develop, and deploy software solutions to meet business requirements. I use programming languages such as Java, Python, and JavaScript, and tools such as Git and JIRA to develop and maintain code. I collaborate with other developers and stakeholders to ensure project success.",
            start_date: new Date("2017-01-01"),
            finish_date: new Date("2019-04-30"),
        }
    })

    const colab4PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: "cli3brs1k00003rktom3ulil6",
            title: "Marketing Manager",
            description: "As a Marketing Manager, I develop and execute marketing campaigns to drive brand awareness and lead generation. I use tools such as HubSpot and Google Analytics to track performance and optimize campaigns. I work with external partners and internal stakeholders to develop messaging and content.",
            start_date: new Date("2018-02-01"),
            finish_date: new Date("2020-12-31"),
        }
    })

    const colab4PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: "cli3brs1k00003rktom3ulil6",
            title: "Business Analyst",
            description: "As a Business Analyst, I analyze business operations and financial data to identify opportunities for cost savings and revenue growth. I create financial models and forecasts to support decision-making. I work with cross-functional teams to implement process improvements and monitor results.",
            start_date: new Date("2016-05-01"),
            finish_date: new Date("2018-01-31"),
        }
    })


    // Colab 5
    const colab5PastWork1 = await prisma.past_work.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            title: "Data Analyst",
            description: "As a data analyst, I was responsible for analyzing and interpreting large amounts of data to help the company make informed decisions. I utilized SQL, Python, and statistical analysis tools to perform data analysis and visualization tasks.",
            start_date: new Date("2020-01-01"),
            finish_date: new Date("2022-12-31"),
        }
    })

    const colab5PastWork2 = await prisma.past_work.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            title: "Business Intelligence Analyst",
            description: "As a business intelligence analyst, I was responsible for designing and implementing data-driven solutions that helped the company optimize its operations and increase its revenue. I utilized SQL, Excel, and Power BI to create reports and dashboards that provided insights into the company's performance.",
            start_date: new Date("2018-01-01"),
            finish_date: new Date("2019-12-31"),
        }
    })

    const colab5PastWork3 = await prisma.past_work.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            title: "Market Research Analyst",
            description: "As a market research analyst, I was responsible for collecting and analyzing data on consumer preferences, market trends, and competitive landscapes. I utilized survey tools and statistical analysis software to gather and interpret data that informed the company's marketing and product development strategies.",
            start_date: new Date("2016-01-01"),
            finish_date: new Date("2017-12-31"),
        }
    })

    const colab5PastWork4 = await prisma.past_work.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            title: "Marketing Coordinator",
            description: "As a marketing coordinator, I was responsible for planning and executing marketing campaigns across various channels, including email, social media, and events. I utilized marketing automation tools and analytics platforms to measure the success of these campaigns and optimize future efforts.",
            start_date: new Date("2014-01-01"),
            finish_date: new Date("2015-12-31"),
        }
    })

    const colab5PastWork5 = await prisma.past_work.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            title: "Content Marketing Specialist",
            description: "As a content marketing specialist, I was responsible for creating and distributing content that engaged and informed our target audience. I utilized SEO best practices and content marketing tools to increase our brand's visibility and drive traffic to our website.",
            start_date: new Date("2012-01-01"),
            finish_date: new Date("2013-12-31"),
        }
    })

    
}
