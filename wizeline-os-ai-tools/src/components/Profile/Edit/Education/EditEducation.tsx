import * as React from "react";
import SchoolIcon from '@mui/icons-material/School';
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/router";
import Loading from "@/components/ui/Loading";
import Link from "next/link";
import EditButton from "@/components/ui/EditButton";

export function EducationItem({ edu }: any) {
    return (
        <div className=" flex flex-col gap-2 pb-5 pr-10 pt-5 first:pt-0 last:pb-0">
            <div>
                <div className="flex items-end justify-between">
                    <div className="flex gap-2">
                        <SchoolIcon sx={{ color: "#00A7E5" }} fontSize="medium" />
                        <p className="font-inter text-lg font-semibold text-slate-800">
                            {edu.schoolName}
                        </p>
                    </div>
                    <div>
                        <Link href={{
                            pathname: '/editEducationItem',
                            query: edu,
                        }}>
                            <EditButton />
                        </Link>

                    </div>
                </div>
                <p className="ml-9 font-inter text-m font-normal text-slate-800">
                    {edu.degree}
                </p>
            </div>
            <div className="ml-9">
                <p className="font-inter font-semibold">Specialization:</p>
                <ul className="font-inter text-s pl-4 font-normal text-slate-600">
                    <li>{edu.specialization_1}</li>
                    <li>{edu.specialization_2}</li>
                </ul>
            </div>
        </div>
    );
}

const EditEducation = () => {

    const router = useRouter();

    // State variables
    const [data, setData] = useState(null); // Data received from API
    const [isLoading, setLoading] = useState(false); // Loading state

    // Fetching data from API
    useEffect(() => {
        setLoading(true);
        fetch("/api/getUserEducation")
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
            <Toaster position="top-right" />
            <section className='flex items-center ml-10 mt-5'>
                <BackButton router={router} />
                <p className='pl-2 text-center text-xl font-medium'>Education</p>
            </section>
            <hr className="h-px mt-5 bg-gray-200 border-0"></hr>
            <section className="mr-5 ml-10 mt-5">
                <div className=" mr-5 grid grid-cols-1 divide-y divide-slate-100">
                    {data?.props.education.map((edu: any) => (
                        <EducationItem edu={edu} key={edu.id_education} />
                    ))}
                </div>
            </section>
        </div>
    );
}


export default EditEducation;