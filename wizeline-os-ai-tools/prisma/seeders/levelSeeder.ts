import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const levelSeeder = async () => {
    const level1 = await prisma.level.upsert({
        where: { id_level: 1 },
        update: {},
        create: { 
            id_level: 1 ,
            name: "Expert" 
        },
    })

    const level2 = await prisma.level.upsert({
        where: { id_level: 2 },
        update: {},
        create: { 
            id_level: 2 ,  
            name: "Advanced" 
        },
    })

    const level3 = await prisma.level.upsert({
        where: { id_level: 3 },
        update: {},
        create: { 
            id_level: 3 , 
            name: "Intermediate" 
        },
    })

    const level4 = await prisma.level.upsert({
        where: { id_level: 4 },
        update: {},
        create: { 
            id_level: 4 , 
            name: "Novice" 
        },
    })

    
}
