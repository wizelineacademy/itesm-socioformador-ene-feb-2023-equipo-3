import GeneralInfo from "@/components/GeneralInfo";
import About from "@/components/About";
import PastWork from "@/components/PastWork";
import Skills from "@/components/Skill";
import Certification from "@/components/Certification";
import Education from "@/components/Education";
import { useState, useEffect } from 'react';

export default function Profile() {  
  
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetch('/api/getToken')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
    <GeneralInfo props={data.props.generalInfo} />
    <div className="divide-x lg:flex">
      <div className="grid w-3/4 flex-initial grid-cols-1 divide-y divide-x-reverse pl-20">
        <span></span>
        <div className="pb-5 pr-7 pt-7">
          <About props={data.props.about} />
        </div>
        <div className="pb-7 pr-7">
          <PastWork props={data.props.pastworks} />
        </div>
        <div className="pb-7 pt-7">
          <Skills props={data.props.skills} />
        </div>
        <div className="pb-7 pr-7 pt-7">
          <Education props={data.props.education} />
        </div>
      </div>
      <div className="mr-20 w-1/4  flex-initial divide-y">
        <span></span>
        <div className="pl-5 pt-7 ">
          <Certification props={data.props.certifications} />
        </div>
      </div>
    </div>
  </div>
  );
}