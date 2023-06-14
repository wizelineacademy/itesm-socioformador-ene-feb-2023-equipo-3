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
}


const AddEducation = ({ props }: any) => {

    const methods = useForm<FormValues>({
        //resolver: yupResolver(validationSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log(data);

    };

    const router = useRouter();


    // Funcion para añadir education
    async function addEducation(data: FormValues) {
        if(data.specialization2 === undefined) {
            data.specialization2 = ".";
        }
        const notification = toast.loading("Updating...");
        try {
            fetch(`/api/add/addEducation`, {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(() => {
                // Toast Notification to say succesful
                toast.success("Education Added!", {
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

            <section className='flex h-screen'>
                <FormProvider {...methods}>
                    <div className='w-[60%] pt-5 ml-10 mr-10'>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="container" >
                            <EducationForm />
                            <div className="grid justify-items-end">
                                <div className="w-52 mt-5">
                                    <Input
                                        type="submit"
                                        value="Add"
                                        onClick={() => addEducation(methods.getValues())}
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

export default AddEducation;