import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const contactInfoSeeder = async () => {
    
    const colab1ContactInfo = await prisma.contact_info.upsert({
        where: { id_employee: "clhp37f3500001dt2knmjs4gb" },
        update: {},
        create: { 
            id_employee: "clhp37f3500001dt2knmjs4gb",
            id_rol_title: 3,
            id_region: 1,
            phone_number: "0123456789"
        }
    })

    
    
}
