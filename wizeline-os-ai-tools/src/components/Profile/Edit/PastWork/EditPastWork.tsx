import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/router";
import { getMonth } from "@/utils/getMonth";

const PastWorkItem = ({ pastwork }: any) => {
    const startDate = new Date(pastwork.start_date);
    const finishDate = new Date(pastwork.finish_date);
    return (
        <div className="flex flex-row gap-2 pb-5 pr-10 pt-5 first:pt-0 last:pb-0">
            <div className="mt-2 h-5 w-5 rounded-full bg-red-500"></div>
            <div key={pastwork.id_job}>
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
    )
}



const EditPastWork = () => {

    const router = useRouter();

    return (
        <div>
            <section className='flex items-center ml-16 mt-5'>
                <BackButton router={router} />
                <p className='pl-2 text-center text-xl font-medium'>Edit Past Work</p>
            </section>
            <hr className="h-px mt-5 bg-gray-200 border-0"></hr>
            {/* <div className="mr-5 grid grid-cols-1 divide-y">
                {props?.map((pastwork: any) => (
                    <PastWorkItem pastwork={pastwork} />
                ))}
            </div> */}
        </div>
    )
}

export default EditPastWork;