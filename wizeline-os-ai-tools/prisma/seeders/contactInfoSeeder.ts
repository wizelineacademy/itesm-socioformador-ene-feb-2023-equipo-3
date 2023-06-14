import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const contactInfoSeeder = async () => {
    
    const colab1ContactInfo = await prisma.contact_info.upsert({
        where: { id_employee: "clicn8jol00041dxesoopbbfw" },
        update: {},
        create: { 
            id_employee: "clicn8jol00041dxesoopbbfw",
            id_rol_title: 3,
            state: "Guadalajara",
            city: "Jalisco",
            country: "México",
            phone_number: "0123456789"
        }
    })

    const colab4ContactInfo = await prisma.contact_info.upsert({
        where: { id_employee: "cli3brs1k00003rktom3ulil6" },
        update: {},
        create: { 
            id_employee: "cli3brs1k00003rktom3ulil6",
            id_rol_title: 3,
            state: "Guadalajara",
            city: "Jalisco",
            country: "México",
            phone_number: "0123456789"
        }
    })

    
    
}
