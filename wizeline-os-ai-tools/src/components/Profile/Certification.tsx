import * as React from "react";
import { useEffect, useState } from "react";
import EditButton from "./EditButton";

export function CertificationsItem({ cert }: any) {
  return (
    <div className="flex flex-row">
      <img
        className=" m-1 p-1 "
        style={{ height: "fit-content", width: "96px" }}
        src={cert.image_url}
      ></img>
    </div>
  );
}

export default function Certifications({ props }: any) {
  return (
    <div className="columns-sm bg-white">
      <div className=" ml-1 mr-5 pb-2 pl-2 pt-2">
        <div className="mb-1 flex justify-between ">
          <h1 className="font-inter self-center text-2xl font-bold">
            Certifications
          </h1>
          <EditButton />
        </div>
        <div className="center-content columns-3 p-1 ">
          {props?.map((cert: any) => (
            <CertificationsItem cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
