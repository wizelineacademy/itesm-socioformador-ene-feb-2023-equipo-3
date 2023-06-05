import * as React from "react";
import { useEffect, useState } from "react";
import EditButton from "../ui/EditButton";
import SchoolIcon from "./SchoolIcon";

export function EducationItem({ edu }: any) {
  return (
    <div className=" flex flex-row gap-2 pb-5 pr-10 pt-5 first:pt-0 last:pb-0">
      <div>
        <SchoolIcon />
      </div>
      <div>
        <p className="font-inter text-lg font-semibold text-slate-800">
          {edu.schoolName}
        </p>
        <p className="font-inter text-m font-normal text-slate-800">
          {edu.degree}
        </p>
        <br></br>
        <p className="font-inter font-semibold">Specialization:</p>
        <ul className="font-inter text-s pl-4 font-normal text-slate-600">
          <li>{edu.specialization_1}</li>
          <li>{edu.specialization_2}</li>
        </ul>
      </div>
    </div>
  );
}

export default function Education({ props }: any) {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-inter mb-3 text-2xl font-semibold">Education</h1>
        <EditButton />
      </div>
      <div className=" mr-5 grid grid-cols-1 divide-y divide-slate-100">
        {props?.map((edu: any) => (
          <EducationItem edu={edu} key={edu.id_education}/>
        ))}
      </div>
    </div>
  );
}
