import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/router";

const pastWorks = () => {
    return(
        <>
            
        </>
    )
}



const EditPastWork = ({ props }: any) => {

    const router = useRouter();

    return (
        <div>
            <section className='flex items-center ml-16 mt-5'>
                <BackButton router={router}/>
                <p className='pl-2 text-center text-xl font-medium'>Edit Past Work</p>
            </section>
            <hr className="h-px mt-5 bg-gray-200 border-0"></hr>
        </div>
    )
}

export default EditPastWork;