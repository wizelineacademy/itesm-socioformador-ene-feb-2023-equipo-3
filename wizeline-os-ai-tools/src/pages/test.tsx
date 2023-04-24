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
    console.log(allSkills)
    console.log('hi')
    console.log('goodbye')

    
    return {
        props: {
            skills: allSkills , 
        },
    }
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

export default function Home(props) { 
    return (
      <>
      <div className='bg-red-400 m-4'>
        <Skills props={props}/>
      </div>
      </>
    )
}




