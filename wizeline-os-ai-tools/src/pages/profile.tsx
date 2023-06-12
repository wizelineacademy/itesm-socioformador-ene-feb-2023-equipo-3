import GeneralInfo from "@/components/Profile/GeneralInfo";
import About from "@/components/Profile/About";
import PastWork from "@/components/Profile/PastWork";
import Skills from "@/components/Profile/Skill";
import Certification from "@/components/Profile/Certification";
import Education from "@/components/Profile/Education";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/ui/Loading";

export default function Profile() {
  // Router instance
  const router = useRouter();

  // State variables
  const [data, setData] = useState(null); // Data received from API
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
  }, []);

  // Loading state
  if (isLoading) {
    return <Loading/>
  }

  // Render nothing if shouldRenderProfile is false
  if (!shouldRenderProfile) {
    return null;
  }

  // Render profile page
  return (
    <div>
      <GeneralInfo props={data?.props.generalInfo} />
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
