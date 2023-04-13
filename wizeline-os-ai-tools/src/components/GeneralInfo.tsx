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
              <VerifiedIcon className="text-[#00A7E5]"/>
            </div>
          </div>
          <p className="w-914 h-35px font-inter text-lg ">Senior, Technology Manager</p>
          <div className="w-914 h-25 inline-flex items-center justify-start space-x-2">
            <div className="flex h-full w-64 items-center justify-end space-x-0.5 pr-1.5">
              <LocationOnOutlinedIcon className = "text-[#525252]"/>
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

 /* Background 
        <div className="w-full bg-cover bg-center bg-no-repeat">
          <img className="w-1461 h-431" src="/images/people.jpeg" alt="" />
        </div>
 
        <div className="flex flex-1">
          <div className="mt-0">
            <div className="h-9rem w-9rem md avatar relative rounded-full">
              <img
                className="w-180 h-180 md relative rounded-full border-4 border-red-500"
                src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
                alt=""
              />
              <div className="absolute"></div>
            </div>
          </div>
        </div> 




        <div class="flex flex-col items-start justify-start pt-4">
            <div class="inline-flex space-x-2 items-center justify-center px-8 py-3 bg-gray-50 border rounded-md border-blue-500">
                <img class="w-6 h-full rounded-lg" src="https://via.placeholder.com/24x24"/>
                <p class="text-base font-medium text-blue-500">Export to</p>
            </div>
        </div>

        <div className="w-1440 h-92 bg-gray-800 px-20 py-6 shadow">
          <img
            className="left-69 top-39 h-5 w-40"
            src="/images/wizelineWhiteLogo.png"
            alt=""
          />
        </div>
*/