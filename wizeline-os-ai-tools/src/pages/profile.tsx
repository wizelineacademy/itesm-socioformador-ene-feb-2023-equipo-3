import GeneralInfo from '@/components/GeneralInfo'
import About from '@/components/About'
import PastWork from '@/components/PastWork'
import Skills from '@/components/Skill'
import Certifications from '@/components/Certification'
import { db } from '@/server/db'
import Head from 'next/head'
import Image from 'next/image'
import AIAssitant from '@/components/AIAssistant'
import Education from '@/components/Education'

export async function getStaticProps() {
      const allCerts = await db.certification.findMany()
      const allEdus = await db.education.findMany()

      
      return {
          props: {
            certifications: allCerts,
            educations: allEdus, 
          },
      }
  }

export default function Profile(props: any) {
  return (
    <>
      <GeneralInfo />
      <div className="lg:flex divide-x">
        <div className="flex-initial w-3/4 pl-20 grid grid-cols-1 divide-y divide-x-reverse">
          <span></span>s
          <div className="pt-7 pb-5 pr-7">
            <About />
          </div>
          <div className="pr-7 pb-7">
            <PastWork />
          </div>
          <div className="pt-7 pb-7">
            <Skills />
          </div>
          <div className="pt-7 pb-7 pr-7">
            <Education props={props}/>
          </div>
        </div>
        <div className="flex-initial w-1/4 mr-20 divide-y">
          <span></span>
          < div className="pl-5 pt-7 ">
          <Certifications props={props}/>
          </div>
        </div>
      </div>
    </>
  )
}

