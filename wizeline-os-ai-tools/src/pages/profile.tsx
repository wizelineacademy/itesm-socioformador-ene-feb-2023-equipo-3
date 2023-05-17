import GeneralInfo from "@/components/GeneralInfo";
import About from "@/components/About";
import PastWork from "@/components/PastWork";
import Skills from "@/components/Skill";
import Certification from "@/components/Certification";
import { db } from "@/server/db";
import Education from "@/components/Education";
/*import { useSession } from "next-auth/react"

export default function Profile(props: any) {
  
  const { data: session } = useSession();
  console.log(session!.user.id)

  //idEmployee = 
  return (
    <div> 
      <p>no c</p>
    </div>
    );
}*/

const idEmployee = "clhp37f3500001dt2knmjs4gb"; // aqui va el id del empleado

export default function Profile(props: any) {  
  return (
    <div>
      <p>session.user.email</p>
      <GeneralInfo props={props.generalInfo} />
      <div className="divide-x lg:flex">
        <div className="grid w-3/4 flex-initial grid-cols-1 divide-y divide-x-reverse pl-20">
          <span></span>
          <div className="pb-5 pr-7 pt-7">
            <About props={props.about} />
          </div>
          <div className="pb-7 pr-7">
            <PastWork props={props.pastworks} />
          </div>
          <div className="pb-7 pt-7">
            <Skills props={props.skills} />
          </div>
          <div className="pb-7 pr-7 pt-7">
            <Education props={props.education} />
          </div>
        </div>
        <div className="mr-20 w-1/4  flex-initial divide-y">
          <span></span>
          <div className="pl-5 pt-7 ">
            <Certification props={props.certifications} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // CAMBIAR ESTO A TABLA CONTACT_INFO
  const generalInfo = await db.contact_info.findUnique({
    where: {
      id_employee: idEmployee,
    },
    select: {
      id_rol_title: true,
      id_region: true,
      phone_number: true,
    },
  });

  const about = await db.about_me.findUnique({
    where: {
      id_employee: idEmployee, //Aquí se pone el id de la persona que inició sesión
    },
    select: {
      description: true,
    },
  });

  const allPastWork = await db.past_work.findMany({
    where: {
      id_employee: idEmployee, //Aquí se pone el id de la persona que inició sesión
    },
    select: {
      id_job: true,
      title: true,
      description: true,
      start_date: true,
      finish_date: true,
    },
  });

  const allSkills = await db.general_skills.findMany({
    where: {
      id_employee: idEmployee, //Aquí se pone el id de la persona que inició sesión
    },
    select: {
      id_skills: true,
      name: true,
    },
  });

  const allEducations = await db.education.findMany({
    where: {
      id_employee: idEmployee, //Aquí se pone el id de la persona que inició sesión
    },
  });

  const allCertifications = await db.certification.findMany({
    where: {
      id_employee: idEmployee, //Aquí se pone el id de la persona que inició sesión
    },
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
  };
}