import ExportToButton from "./ExportToButton";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSession } from "next-auth/react"

export default function GeneralInfo({ props }: any) {
  const { data: session } = useSession();
  return (
    <>
      <div>
        <div className="w-1440 h-92 bg-[#222529] px-20 py-6 shadow">
          <img
            className="left-69 top-39 h-5 w-40"
            src="/images/wizelineWhiteLogo.png"
            alt=""
          />
        </div>

        <div className="w-full relative mb-4">
          <img
            className="w-full h-[250px] object-cover items-end justify-end bg-gray-300"
            src="/images/defaultBackground.png"
            alt=""
          />
          <img
            className="absolute left-20 top-40 inline-flex h-44 w-44 rounded-full border-4 border-red-500 object-cover"
            src={session?.user.image}
            alt=""
          />
        </div>

        <div className="w-1440 h-166 inline-flex flex-col space-y-1 px-20 pt-20">
          <div className="w-914 h-30p inline-flex space-x-1">
            <p className="font-inter text-2xl font-semibold">
              {session?.user.name}
            </p>
            <div className=" h-full w-8 items-center justify-center p-1">
              <VerifiedIcon className="text-[#00A7E5]" />
            </div>
          </div>
          <p className="w-914 h-35px font-inter text-lg ">
            {props?.rol.name}, Technology Manager
          </p>
          <div className="w-914 h-25 inline-flex justify-start space-x-2">
            <div className="flex h-full w-64 justify-items-start space-x-0.5 pr-1.5">
              <LocationOnOutlinedIcon className="text-[#525252]" />
              <p className="font-inter text-lg font-extralight text-[#525252] truncate">
                {" "}
                {props?.state}, {props?.city}, {props?.country}
              </p>
            </div>
            <p className="font-inter text-lg text-[#00A7E5]">• </p>
            <p className="font-inter text-lg font-semibold text-[#00A7E5]">
              Contact info
            </p>
          </div>
          <div className="flex flex-col items-start justify-start pb-5 pt-3.5">
            <ExportToButton />
          </div>
        </div>
      </div>
    </>
  );
}

/*
import ExportToButton from "./ExportToButton";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function GeneralInfo({ props }: any) {
  return (
    <>
      <div>
        <div className="w-1440 h-92 bg-[#222529] px-20 py-6 shadow">
          <img
            className="left-69 top-39 h-5 w-40"
            src="/images/wizelineWhiteLogo.png"
            alt=""
          />
        </div>

        <div className="w-1440 relative mb-4">
          <img
            className="w-1440 h-250 items-end justify-end bg-gray-300"
            src="/images/defaultBackground.png"
            alt=""
          />
          <img
            className="absolute left-20 top-40 inline-flex h-44 w-44 rounded-full border-4 border-red-500 object-cover"
            src={props.image}
            alt=""
          />
        </div>

        <div className="w-1440 h-166 inline-flex flex-col space-y-1 px-20 pt-20">
          <div className="w-914 h-30p inline-flex space-x-1">
            <p className="font-inter text-2xl font-semibold">
              Carmina López Palacios
            </p>
            <div className=" h-full w-8 items-center justify-center p-1">
              <VerifiedIcon className="text-[#00A7E5]" />
            </div>
          </div>
          <p className="w-914 h-35px font-inter text-lg ">
            {props.id_rol_title}
          </p>
          <div className="w-914 h-25 align-left inline-flex justify-start space-x-2">
            <div className="flex h-full w-64 items-center justify-end space-x-0.5 pr-1.5">
              <LocationOnOutlinedIcon className="text-[#525252]" />
              <p className="font-inter text-lg font-extralight text-[#525252]">
                {" "}
                {props.id_region}
              </p>
            </div>
            <p className="font-inter text-lg text-[#00A7E5]">• </p>
            <p className="font-inter text-lg font-semibold text-[#00A7E5]">
              Contact info
            </p>
          </div>
          <div className="flex flex-col items-start justify-start pb-5 pt-3.5">
            <ExportToButton />
          </div>
        </div>
      </div>
    </>
  );
}

*/