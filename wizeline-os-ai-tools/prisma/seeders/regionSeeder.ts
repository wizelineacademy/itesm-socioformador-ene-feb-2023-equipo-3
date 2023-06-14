import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const regionSeeder = async () => {
    const region1 = await prisma.region.upsert({
        where: { id_region: 1 },
        update: {},
        create: { 
            state: "Guadalajara",
            city: "Jalisco",
            country: "México"
        }
    })
    
}
