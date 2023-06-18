import { FC } from "react";
import Image from "next/image";
import { Button } from "@mui/material";

interface PresentationProps {}

const Presentation: FC<PresentationProps> = ({}) => {
  return (
    <div className="flex">
      <div className="-bg-orange-500">
        <Image
          src="/images/LALO.png"
          width={200}
          height={200}
          alt="Picture of the author"
        ></Image>
      </div>
      <div className="flex flex-1 flex-col gap-4 place-self-center">
        <p className="text-lg font-semibold">Welcome to Wizeline OS!</p>
        <p className="font-light">
          My name is LALO, and I am your personal profile assistant. I am here
          to help you create a profile that will display your professional
          skills.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
