import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/router";
import { getMonth } from "@/utils/getMonth";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";
import Link from "next/link";
import EditButton from "@/components/ui/EditButton";

const PastWorkItem = ({ pastwork }: any) => {
    const startDate = new Date(pastwork.start_date);
    const finishDate = new Date(pastwork.finish_date);
    return (
        <div className="flex flex-row gap-2 pb-5 pr-10 pt-5 first:pt-0 last:pb-0">
            <div className="mt-3">
                <span className="inline-block h-4 w-4 rounded-full bg-red-500"></span>
            </div>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h1 className="font-inter text-lg font-semibold text-black">
                        {pastwork.title}
                    </h1>
                    <Link href={{
                        pathname: '/editPastWorkItem',
                        query: pastwork,
                    }}>
                        <EditButton />
                    </Link>
                </div>
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

    // State variables
    const [data, setData] = useState(null); // Data received from API
    const [isLoading, setLoading] = useState(false); // Loading state

    // Fetching data from API
    useEffect(() => {
        setLoading(true);
        fetch("/api/getUserPastWork")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
                console.log(data)
            })
            .catch((error) => {
                setLoading(true);
                console.log(error);
            });
    }, []);

    // Loading state
    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <section className='flex items-center ml-10 mt-5'>
                <BackButton router={router} />
                <p className='pl-2 text-center text-xl font-medium'>Past Work</p>
            </section>
            <hr className="h-px mt-5 bg-gray-200 border-0"></hr>
            <section className="mr-5 ml-10 mt-5 mb-16">
                <div className="mr-5 grid grid-cols-1 divide-y">
                    {data?.props.pastworks.map((pastwork: any) => (
                        <PastWorkItem pastwork={pastwork} key={pastwork.id_job} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default EditPastWork;