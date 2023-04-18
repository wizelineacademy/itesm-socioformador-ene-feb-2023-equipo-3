import * as React from 'react'
import { useEffect, useState } from "react";
import EditButton from "./EditButton";
import SchoolIcon from "./SchoolIcon";


// this is an example
export const educations = [{
    id: 0,
    schoolName: "Tecnologico de Monterrey",
    degree: "Bachelor's Degree, Computer Technology/Computer Systems Technology",
    specialization_1: "Artificial Intelligence",
    specialization_2: "Cybersecurity"
}, {
    id: 1,
    schoolName: "Universidad Autonoma de Nuevo Leon",
    degree: "Bachelor's Degree, Computer Technology/Computer Systems Technology",
    specialization_1: "Artificial Intelligence"
}];

export function EducationItem({edu}: any){

    return(
        <div className=' flex flex-row gap-2 pr-10 pt-5 pb-5 first:pt-0 last:pb-0'>
            <SchoolIcon/>
            <div>
                <p className='font-inter text-lg font-semibold text-slate-800'>{edu.schoolName}</p>
                <p className='font-inter text-m font-normal text-slate-800'>{edu.degree}</p>
                <br></br>
                <p className='font-inter font-semibold'>Specialization:</p>
                <ul className='font-inter pl-4 text-s font-normal text-slate-600'>
                    <li >{edu.specialization_1}</li>
                    <li >{edu.specialization_2}</li>
                </ul>
            </div>


        </div>
    );
}

export default function Education() {
    const listItems = educations.map(edu =>
        <EducationItem edu={edu}/>
     );
    return (
        <div className='flex justify-between bg-white'>
            <div className=' ml-1 mr-5 pt-2 pb-2 pl-2' >
                <div className="flex justify-between mb-1 ">
                    <h1 className='font-inter self-center text-2xl font-bold mb-3 '>Education</h1>
                    <EditButton/>
                </div>
            <div className=' grid grid-cols-1 divide-y divide-slate-100 mr-5'>
                {listItems}
            </div>
        </div>
        </div>
       
        
    );
}