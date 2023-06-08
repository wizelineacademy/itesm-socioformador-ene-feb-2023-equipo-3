import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from '@/components/ui/Input';
import { Toaster, toast } from "react-hot-toast";
import EducationForm from "./Form/EducationForm";

interface FormValues {
    schoolName: string,
    degree: string,
    specialization1: string,
    specialization2: string,
    idEducation: string,
}


const EditEducationItem = ({ props }: any) => {

    const methods = useForm<FormValues>({
        //resolver: yupResolver(validationSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log(data);

    };

    const router = useRouter();


    // Funcion para actualizar education
    async function upEducation(data: FormValues) {
        const notification = toast.loading("Updating...");
        try {
            fetch(`/api/edit/updateEducation`, {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT'
            }).then(() => {
                // Toast Notification to say succesful
                toast.success("Education Updated!", {
                    id: notification,
                });
                router.back();
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Funcion para eliminar education
    async function delEducation(id: string) {
        const notification = toast.loading("Deleting...");
        try {
            fetch(`/api/edit/education/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }).then(() => {
                // Toast Notification to say succesful
                toast.success("Education Deleted!", {
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
            <Toaster position="top-right" />
            <section className='flex items-center ml-10 mt-5'>
                <BackButton router={router} />
                <p className='pl-2 text-center text-xl font-medium'>Education</p>
            </section>
            <hr className="h-px mt-5 bg-gray-200 border-0"></hr>

            <section className='flex'>
                <FormProvider {...methods}>
                    <div className='w-[60%] pt-5 ml-10 mr-10'>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="container" >
                            <EducationForm props={props} />
                            <div className="flex justify-between">
                                <div className="w-52 mt-5">
                                    <Input
                                        type="submit"
                                        value="Delete"
                                        onClick={() => delEducation(props.id_education)}
                                        className="h-10 bg-[#b5b5b5] hover:bg-[#a1a1a1] text-white font-bold py-2 px-4 rounded">
                                    </Input>
                                </div>
                                <div className="w-52 mt-5">
                                    <Input
                                        type="submit"
                                        value="Update"
                                        onClick={() => upEducation(methods.getValues())}
                                        className="h-10 bg-[#00A7E5] hover:bg-[#0076b0] text-white font-bold py-2 px-4 rounded">
                                    </Input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="pt-[18rem] w-[40%] bg-gray-200 p-10">
                    </div>
                </FormProvider>
            </section>
        </div>
    )

}

export default EditEducationItem;