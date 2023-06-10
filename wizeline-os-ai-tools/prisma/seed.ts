import { PrismaClient } from '@prisma/client';
import { levelSeeder } from './seeders/levelSeeder';
import { rolSeeder } from './seeders/rolSeeder';
import { regionSeeder } from './seeders/regionSeeder';
import { contactInfoSeeder } from './seeders/contactInfoSeeder';
import { aboutmeSeeder } from './seeders/aboutmeSeeder';
import { userSeeder } from './seeders/userSeeder';
import { pastWorkSeeder } from './seeders/pastWorkSeeder';
import { certificationSeeder } from './seeders/certificationSeeder';
import { generalSkillSeeder } from './seeders/generalSkillSeeder';
import { educationSeeder } from './seeders/educationSeeder';

const prisma = new PrismaClient();


async function main() {
    // -------------------- LEVELS ---------------------
    await levelSeeder();

    // -------------------- ROL_TITLES ------------------
    await rolSeeder();

    // -------------------- REGION ------------------
    await regionSeeder();

    // -------------------- USER ------------------
    await userSeeder();

    // -------------------- CONTACT_INFO ------------------
    await contactInfoSeeder();

    // -------------------- ABOUT ME ------------------
    await aboutmeSeeder();

    // -------------------- PAST WORK ------------------
    await pastWorkSeeder();

    // -------------------- CERTIFICATIONS ------------------
    await certificationSeeder();

    // -------------------- SKILLS ------------------
    await generalSkillSeeder();

    // -------------------- EDUCATION ------------------
    await educationSeeder();

    
}


main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });