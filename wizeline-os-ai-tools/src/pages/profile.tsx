import GeneralInfo from '@/components/GeneralInfo'
import About from '@/components/About'
import PastWork from '@/components/PastWork'
import Skills from '@/components/Skill'
import Certification from '@/components/Certification'
import Head from 'next/head'
import Image from 'next/image'
import AIAssitant from '@/components/AIAssistant'
import Education from '@/components/Education'
import { db } from '@/server/db'

export default function profile(props: any) {
  return (
    <>
      <GeneralInfo />
      <div className="lg:flex divide-x">
        <div className="flex-initial w-3/4 pl-20 grid grid-cols-1 divide-y divide-x-reverse">
          <span></span>
          <div className="pt-7 pb-5 pr-7">
            <About props={props.About}/>
          </div>
          <div className="pr-7 pb-7">
            <PastWork props={props.pastworks} />
          </div>
          <div className="pt-7 pb-7">
            
          </div>
          <div className="pt-7 pb-7 pr-7">
            
          </div>
        </div>
        <div className="flex-initial w-1/4  mr-20 divide-y">
          <span></span>
          < div className="pl-5 pt-7 ">
            
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const about = await db.about_me.findUnique({
    where: {
      id_employee: 1 //Aquí se pone el id de la persona que inició sesión
    },
   select: {
     description: true
  }
  });


  const allPastWork = await db.past_work.findMany({
    where: {
      id_employee: 1 //Aquí se pone el id de la persona que inició sesión
    },
    select: {
      id_job: true,
      title: true,
      description: true,
      start_date: true,
      finish_date: true,
    }
  });


  return {
      props: {
        About: about, 
        pastworks: JSON.parse(JSON.stringify(allPastWork))
      },
  }
}