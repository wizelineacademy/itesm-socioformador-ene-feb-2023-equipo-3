import * as React from "react";
import Skills from '@/components/Skill'
import { db } from '@/server/db'
import { GetStaticProps } from 'next'

export type Skill = {
  id_skill: number
  name: string
}

export async function getStaticProps() {
    const allSkills = await db.skills.findMany()
    
    return {
        props: {
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




