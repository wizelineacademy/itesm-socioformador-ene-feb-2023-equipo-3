import ExportToButton from "./ExportToButton";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function GeneralInfo() {
  return (
    <>
      <div>

        <div className="w-1440 h-92 bg-[#222529] px-20 py-6 shadow">
          <img className="left-69 top-39 h-5 w-40" src="/images/wizelineWhiteLogo.png" alt="" />
        </div>

        <div className="relative w-1440 mb-4">
          <img className="items-end justify-end bg-gray-300 w-1440 h-250" src="/images/defaultBackground.png" alt="" />
          <img className="inline-flex w-44 h-44 absolute border-4 rounded-full border-red-500 left-20 top-40" src="https://media.licdn.com/dms/image/C5603AQFOAnGXmP25Hg/profile-displayphoto-shrink_800_800/0/1655249801873?e=2147483647&v=beta&t=EJ0PC6RmSEmTFx9HqEvcZ3r6EN7e4N0DBPvRSgFTFew" />
        </div>

        <div className="w-1440 h-166 inline-flex flex-col px-20 space-y-1 pt-20">
          <div className="w-914 h-30p inline-flex space-x-1">
            <p className="text-2xl font-inter font-semibold">Joaquin Bravo</p>
            <div className=" h-full w-8 items-center justify-center p-1">
              <VerifiedIcon className="text-[#00A7E5]" />
            </div>
          </div>
          <p className="w-914 h-35px font-inter text-lg ">Senior, Technology Manager</p>
          <div className="w-914 h-25 inline-flex items-center justify-start space-x-2">
            <div className="flex h-full w-64 items-center justify-end space-x-0.5 pr-1.5">
              <LocationOnOutlinedIcon className="text-[#525252]" />
              <p className="text-lg font-inter font-extralight text-[#525252]"> Guadalajara, Jalisco, México</p>
            </div>
            <p className="text-lg font-inter text-[#00A7E5]">• </p>
            <p className="font-inter font-semibold text-lg text-[#00A7E5]">Contact info</p>
          </div>
          <div className="flex flex-col items-start justify-start pt-3.5 pb-5">
            <ExportToButton />
          </div>
        </div>
      </div>
    </>
  );
}