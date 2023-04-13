import * as React from 'react'
import { useEffect, useState } from "react";
import EditButton from "./EditButton";

// this is an example
export const certifications = [{
    id: 0,
    title: "Wizeline Academy",
    url: "https://www.wizeline.com/app/themes/wizeline-academy/img/academy-logo.png"
}, {
    id: 1,
    title: "Wizeline Academy",
    url: "https://www.wizeline.com/app/themes/wizeline-academy/img/academy-logo.png"
}, {
    id: 2,
    title: "Wizeline Academy",
    url: "https://www.wizeline.com/app/themes/wizeline-academy/img/academy-logo.png"
}, {
    id: 3,
    title: "Wizeline Academy",
    url: "https://www.wizeline.com/app/themes/wizeline-academy/img/academy-logo.png"
}, {
    id: 4,
    title: "Wizeline Academy",
    url: "https://www.wizeline.com/app/themes/wizeline-academy/img/academy-logo.png"
}, {
    id: 5,
    title: "Wizeline Academy",
    url: "https://www.wizeline.com/app/themes/wizeline-academy/img/academy-logo.png"
}];

export function CertificationsItem({cert}: any){
/*
     const [certs, setCerts] = useState([]);

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6")
        .then((response) => response.json())
        .then((data) => setCerts(data));
    }, []); 
    */

    return(
        <div className='flex flex-row'>
            <img className="p-1 m-1 " style={{width: "96px"} } src={cert.url}></img>
        </div>
    );
}

export default function Certifications() {
    const listItems = certifications.map(cert =>
        <CertificationsItem cert={cert}/>
     );
    return (
        <div className='columns-sm bg-white'>
            <div className=' ml-1 mr-5 pt-2 pb-2 pl-2' >
                <div className="flex justify-between mb-1 ">
                    <h1 className='self-center text-2xl font-bold'>Certifications</h1>
                    <EditButton/>
                </div>
            <div className='p-1 center-content columns-3 '>
                {listItems}
            </div>
        </div>
        </div>
       
        
    );
}