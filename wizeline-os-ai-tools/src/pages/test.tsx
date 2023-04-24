import * as React from "react";
import { db } from '@/server/db'
import { GetStaticProps } from 'next'
import Certifications from "@/components/Certification";


export async function getStaticProps() {
/* 
    await db.certification.create({
    data: {
      id_employee: 0, id_certification: 0, name: "https://www.wizeline.com/app/themes/wizeline-academy/img/academy-logo.png"

    }
  })
 
    await db.users.create({
      data: {
        id_user: 0, first_name: "Cristina", last_name: "Hernandez", email: "cristinahdzperez01@gmail.com", roleId_role: 1, auth0_id: "test"
      }
    })
    await db.education.createMany({
      data: [
        { id_employee: 0, schoolName: "Tecnologico de Monterrey", degree: "Bachelor's Degree, Computer Technology/Computer Systems Technology", specialization_1: "Artificial Intelligence", specialization_2: "Cybersecurity" },
        { id_employee: 0, schoolName: "Universidad Autonoma de Nuevo Leon", degree: "Bachelor's Degree, Computer Technology/Computer Systems Technology", specialization_1: "Artificial Intelligence", specialization_2: ""},
      ],
      skipDuplicates: true,
    }) 
 */
    const allCerts = await db.certification.findMany()
    
    return {
        props: {
          certifications: allCerts, 
        },
    }
}

export default function Home(props: any) { 
  console.log(props.certifications)
    return (
      <>
      <div className='m-4'>
        <Certifications props={props}/>
      </div>
      </>
    )
}

/* 

export const getStaticProps: GetStaticProps<{ skills: Skill[]}> = async(context) => {
  const res = await fetch('https://.../skills')
  const skills: Skill[] = await res.json()

  return {
    props: {
        skills,
    },
  }
} 
*/






