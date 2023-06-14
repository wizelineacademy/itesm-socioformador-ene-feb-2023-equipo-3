import Link from "next/link";
import EditButton from "../ui/EditButton";
import { getMonth } from "@/utils/getMonth";
import AddButton from "../ui/AddButton";

export function PastWorkItem({ pastwork }: any) {
  const startDate = new Date(pastwork.start_date);
  const finishDate = new Date(pastwork.finish_date);

  return (
    <div className="flex flex-row gap-2 pb-5 pr-10 pt-5 first:pt-0 last:pb-0">
      <div className="mt-2">
        <span className="inline-block h-4 w-4 rounded-full bg-red-500"></span>
      </div>
      <div>
        <h1 className="font-inter text-lg font-semibold text-black">
          {pastwork.title}
        </h1>
        <div className="font-inter text-sm font-normal text-[#878787]">
          <span>
            {getMonth(startDate)} {startDate.getFullYear()}
          </span>
          <span> - </span>
          <span>
            {getMonth(finishDate)} {finishDate.getFullYear()}
          </span>
        </div>
        <p className="font-inter text-base font-light">
          {pastwork.description}
        </p>
      </div>
    </div>
  );
}

export default function PastWork({ props }: any) {
  return (
    <>
      <div className="flex justify-between mt-5">
        <h1 className="font-inter mb-3 text-2xl font-semibold">
          Past Work
        </h1>
        <div>
          <Link href={'/addPastWork'}>
              <AddButton />
            </Link>    
          <Link href={'/editPastWork'}>
            <EditButton />
          </Link>

        </div>
      </div>
      <div className="mr-5 grid grid-cols-1 divide-y">
        {props?.map((pastwork: any) => (
          <PastWorkItem pastwork={pastwork} key={pastwork.id_job}/>
        ))}
      </div>
    </>
  );
}
