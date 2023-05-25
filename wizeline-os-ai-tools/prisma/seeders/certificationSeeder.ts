import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const certificationSeeder = async () => {
    
    const colab1Certification1 = await prisma.certification.create({
        data: {
            id_employee: "clhp37f3500001dt2knmjs4gb",
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab2Certification1 = await prisma.certification.create({
        data: {
            id_employee: "chp37f3500001dt2knmjs4gb",
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab3Certification1 = await prisma.certification.create({
        data: {
            id_employee: "agtc37f3500001dt2knmjs4gb",
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab4Certification1 = await prisma.certification.create({
        data: {
            id_employee: "ejhg37f3500001dt2knmjs4gb",
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    const colab5Certification1 = await prisma.certification.create({
        data: {
            id_employee: "dc37f3500001dt2knmjs4gb",
            name: "AWS Certified Cloud Practitioner",
            image_url: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
        }
    })

    
}
