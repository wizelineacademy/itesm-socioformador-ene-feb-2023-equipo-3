import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from '@/components/ui/Input';
import { Toaster, toast } from "react-hot-toast";
import PastWorkForm from "./Form/PastWorkForm";
import AIAssitantPastWork from "./Form/AIAssistantPastWork";
import { useEffect } from "react";

interface FormValues {
    pastWid: string,
    pastWtitle: string,
    pastWStartDate: string,
    pastWFinishDate: string,
    pastWDescription: string,
}


const EditPastWorkItem = ({props}: any) => {

    const methods = useForm<FormValues>({
        //resolver: yupResolver(validationSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log(data);

    };

    const router = useRouter();


    // Funcion para actualizar about
    async function upPastWork(data: FormValues) {
        const notification = toast.loading("Updating...");
    try {
        fetch(`/api/pastwork/update`, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(() => {
            // Toast Notification to say succesful
            toast.success("About Updated!",{
                id: notification,
            });
            router.back();
        })
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div>
            <section className='flex items-center ml-10 mt-5'>
                <BackButton router={router} />
                <p className='pl-2 text-center text-xl font-medium'>Past Work</p>
            </section>
            <hr className="h-px mt-5 bg-gray-200 border-0"></hr>
            
            <section className='flex h-screen'>
                    <FormProvider {...methods}>
                        <div className='w-[60%] pt-5 ml-10 mr-10'>
                            <form onSubmit={methods.handleSubmit(onSubmit)} className="container" >
                                <PastWorkForm props={props}/>
                                <div className="grid justify-items-end">
                                    <div className="w-52">
                                        <Input 
                                        type="submit" 
                                        value="Update"
                                        onClick={() => upPastWork(methods.getValues())}
                                        className="h-10 bg-[#00A7E5] hover:bg-[#0076b0] text-white font-bold py-2 px-4 rounded">
                                        </Input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="pt-[18rem] w-[40%] bg-gray-200 p-10">
                            <AIAssitantPastWork aboutText={methods.getValues('pastWDescription')}/>
                        </div>
                    </FormProvider>
            </section>
        </div>
    )

}

export default EditPastWorkItem;