import * as React from "react";
import Education from '@/components/Education'
import Skills from '@/components/Skill'
import { db } from '@/server/db'
import { GetStaticProps } from 'next'
import Certifications from "@/components/Certification";

export async function getStaticProps() {
    const allCerts = await db.certification.findMany()
    const allSkills = await db.skills.findMany()
    const allEdus = await db.education.findMany()
    
    return {
        props: {
        educations: allEdus, 
          certifications: allCerts, 
          skills: allSkills, 
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




