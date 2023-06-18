import * as React from "react";
import { useEffect, useState } from "react";
import EditButton from "../ui/EditButton";

export function CertificationsItem({ cert }: any) {
  return (
      <img
        className="h-24 w-30"
        src={cert.image_url}> 
      </img>
  );
}

export default function Certifications({ props }: any) {
  const hasCertificaction = props?.length > 0;

  return (
    <div className="bg-white">
      <div className=" ml-1 mr-5 pb-2 pl-2 pt-2">
        <div className="mb-1 flex justify-between ">
          <h1 className="font-inter self-center text-2xl font-bold">
            Certifications
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {!hasCertificaction && <p className="font-inter text-lg text-[#323232]">No certifications added yet</p>}
          {props?.map((cert: any) => (
            <CertificationsItem cert={cert} key={cert.id_certification}/>
          ))}
        </div>
      </div>
    </div>
  );
}
