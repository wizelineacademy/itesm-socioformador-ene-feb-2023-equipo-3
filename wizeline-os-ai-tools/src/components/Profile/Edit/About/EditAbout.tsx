import { useForm, FormProvider } from "react-hook-form";
import { Input } from '@/components/ui/Input';
import AIAssitantAbout from '@/components/Profile/Edit/About/Form/AIAssistantAbout'
import AboutForm from './Form/AboutForm';
import { useRouter } from 'next/router';
import { Toaster, toast } from "react-hot-toast";
import BackButton from '@/components/ui/BackButton';

interface FormValues {
    aboutDescription: string,
}


const EditAbout = ({props}:any) => {
    
    const methods = useForm<FormValues>({
        //resolver: yupResolver(validationSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log(data);

    };

    const router = useRouter();

    // Funcion para actualizar about
    async function upAbout(data: FormValues) {
            const notification = toast.loading("Updating...");
        try {
            fetch(`http://localhost:3000/api/about/update`, {
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
            <Toaster position="top-right" />
            <section className='flex items-center ml-16 mt-5'>
                <BackButton router={router}/>
                <p className='pl-2 text-center text-xl font-medium'>Edit About</p>
            </section>
            <hr className="h-px mt-5 bg-gray-200 border-0"></hr>
            <section className='flex h-screen'>
                    <FormProvider {...methods}>
                        <div className='w-[60%] pt-5 ml-10 mr-10'>
                            <form onSubmit={methods.handleSubmit(onSubmit)} className="container" >
                                <AboutForm props={props}/>
                                <div className="grid justify-items-end">
                                    <div className="w-52">
                                        <Input 
                                        type="submit" 
                                        value="Update"
                                        onClick={() => upAbout(methods.getValues())}
                                        className="h-10 bg-[#00A7E5] hover:bg-[#0076b0] text-white font-bold py-2 px-4 rounded">
                                        </Input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="w-[40%] bg-gray-200 p-10">
                            <AIAssitantAbout aboutText={methods.getValues('aboutDescription')}/>
                        </div>
                    </FormProvider>
            </section>


        </div>
    )
}

export default EditAbout;