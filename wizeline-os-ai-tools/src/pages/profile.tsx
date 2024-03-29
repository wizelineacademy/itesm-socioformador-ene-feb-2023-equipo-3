import GeneralInfo from "@/components/Profile/GeneralInfo";
import About from "@/components/Profile/About";
import PastWork from "@/components/Profile/PastWork";
import Skills from "@/components/Profile/Skill";
import Certification from "@/components/Profile/Certification";
import Education from "@/components/Profile/Education";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/ui/Loading";

interface GeneralInfo {
  state: string;
  city: string;
  country: string;
  rol: {
    name: string;
  };
}

interface userInfo {
  image: string;
  name: string;
}

interface About {
  description: string;
}

interface PastWork {
  id_job: number;
  title: string;
  description: string;
  start_date: string;
  finish_date: string;
}

interface Skill {
  id_skills: number;
  name: string;
  id_level: number;
}

interface Education {
  id_education: number;
  id_employee: string;
  schoolName: string;
  degree: string;
  specialization_1: string;
  specialization_2: string;
}

interface Certification {
  id_certification: number;
  id_employee: string;
  name: string;
  image_url: string;
}

interface ProfileData {
  props: {
    userInfo: userInfo;
    generalInfo: GeneralInfo;
    about: About;
    pastworks: PastWork[];
    skills: Skill[];
    education: Education[];
    certifications: Certification[];
  };
}

export default function Profile() {
  // Router instance
  const router = useRouter();

  // State variables
  const [data, setData] = useState<ProfileData | undefined>(); // Data received from API
  const [isLoading, setLoading] = useState(false); // Loading state
  const [shouldRenderProfile, setShouldRenderProfile] = useState(false); // Flag to determine whether to render the profile

  // Fetching data from API
  useEffect(() => {
    setLoading(true);
    fetch("/api/getUser")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data === "new User") {
          router.push("/newUser"); // Redirect to newUser page if the user is new
        } else {
          setShouldRenderProfile(true); // Enable rendering of the profile page
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, [router]);

  // Loading state
  if (isLoading) {
    return <Loading />;
  }

  // Render nothing if shouldRenderProfile is false
  if (!shouldRenderProfile) {
    return <Loading />;
  }

  // Render profile page
  return (
    <div>
      <GeneralInfo
        propsContact={data?.props.generalInfo}
        propsUser={data?.props.userInfo}
      />
      <div className="divide-x lg:flex">
        <div className="grid w-3/4 flex-initial grid-cols-1 divide-y divide-x-reverse pl-20">
          <span></span>
          <div className="pb-5 pr-7 pt-7">
            <About props={data?.props.about} />
          </div>
          <div className="pb-7 pr-7">
            <PastWork props={data?.props.pastworks} />
          </div>
          <div className="pb-7 pr-7 pt-7">
            <Skills props={data?.props.skills} />
          </div>
          <div className="pb-7 pr-7 pt-7">
            <Education props={data?.props.education} />
          </div>
        </div>
        <div className="mr-20 w-1/4  flex-initial divide-y">
          <span></span>
          <div className="pl-5 pt-7 ">
            <Certification props={data?.props.certifications} />
          </div>
        </div>
      </div>
    </div>
  );
}
