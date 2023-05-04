import GeneralInfo from '@/components/GeneralInfo'
import About from '@/components/About'
import PastWork from '@/components/PastWork'
import Skills from '@/components/Skill'
import Certification from '@/components/Certification'
import { db } from '@/server/db'
import Head from 'next/head'
import Image from 'next/image'
import AIAssitant from '@/components/AIAssistant'
import Education from '@/components/Education'


const idEmployee = 2 // aqui va el id del empleado

export default function Profile(props: any) {

  return (
    <>
      <GeneralInfo props={props.generalInfo}/>
      <div className="lg:flex divide-x">
        <div className="flex-initial w-3/4 pl-20 grid grid-cols-1 divide-y divide-x-reverse">
          <span></span>
          <div className="pt-7 pb-5 pr-7">
            <About props={props.about}/>
          </div>
          <div className="pr-7 pb-7">
            <PastWork props={props.pastworks}/>
          </div>
          <div className="pt-7 pb-7">
          <Skills props={props.skills}/>
          </div>
          <div className="pt-7 pb-7 pr-7">
            <Education props={props.education}/>
          </div>
        </div>
        <div className="flex-initial w-1/4  mr-20 divide-y">
          <span></span>
          < div className="pl-5 pt-7 ">
            <Certification props={props.certifications}/>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getStaticProps() {

  const generalInfo = await db.users.findUnique({
    where: {
      id_user: idEmployee //Aquí se pone el id de la persona que inició sesión
    },
    select: {
      name: true,
      image: true,
    }
  });

  const about = await db.about_me.findUnique({
    where: {
      id_employee: idEmployee //Aquí se pone el id de la persona que inició sesión
    },
   select: {
     description: true
  }
  });


  const allPastWork = await db.past_work.findMany({
    where: {
      id_employee: idEmployee //Aquí se pone el id de la persona que inició sesión
    },
    select: {
      id_job: true,
      title: true,
      description: true,
      start_date: true,
      finish_date: true,
    }
  });

  const allSkills = await db.general_skills.findMany({
    where: {
      id_employee: idEmployee //Aquí se pone el id de la persona que inició sesión
    },
    select: {
      id_skills: true,
      name: true,
    }
  });

  const allEducations = await db.education.findMany({
    where: {
      id_employee: idEmployee //Aquí se pone el id de la persona que inició sesión
    }
  });

  const allCertifications = await db.certification.findMany({
    where: {
      id_employee: idEmployee //Aquí se pone el id de la persona que inició sesión
    }
  });

  return {
      props: {
        about: about, 
        pastworks: JSON.parse(JSON.stringify(allPastWork)),
        skills: allSkills,
        education: allEducations,
        certifications: allCertifications,
        generalInfo: generalInfo,
      },
  }
}