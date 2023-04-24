import * as React from "react";
import Education from '@/components/Education'
import { db } from '@/server/db'
import { GetStaticProps } from 'next'


export async function getStaticProps() {

/*   await db.role.create({
    data: {
      id_role: 1, type: "Admin"
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
    const allEdus = await db.education.findMany()
    
    return {
        props: {
            educations: allEdus, 
        },
    }
}

export default function Home(props: any) { 
  console.log(props.educations)
    return (
      <>
      <div className='m-4'>
        <Education props={props}/>
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






