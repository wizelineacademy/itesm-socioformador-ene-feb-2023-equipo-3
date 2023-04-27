import * as React from "react";
import Skills from '@/components/Skill'
import { db } from '@/server/db'
import { GetStaticProps } from 'next'
import Certifications from "@/components/Certification";

export async function getStaticProps() {
    const allCerts = await db.certification.findMany()
    const allSkills = await db.skills.findMany()
    
    return {
        props: {
          certifications: allCerts, 
          skills: allSkills , 
        },
    }
}

export default function Home(props) { 
    return (
      <>
      <div className='bg-red-400 m-4'>
        <Skills props={props}/>

      </div>
      </>
    )
}




