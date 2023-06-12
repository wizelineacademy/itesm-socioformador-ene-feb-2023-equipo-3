import { FC } from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from 'next/router';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { Heading } from '../ui/Heading';
import { Button, buttonVariants } from '../ui/Button';
import AboutForm from './AboutForm';
import ContactForm from './ContactForm';
import PastWorkForm from './PastWorkForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import { SkillsOptions } from '@/utils/skillsData';
import { Input } from '../ui/Input';
import AIAssistantModal from '../AIAssistantModal/AIAssistantModal';
import PDFUploadButton from "@/components/Form/PDFUploadButton";


export interface FormValues{
    aiAssistant: any,
    aboutDescription: string,
    fullName: string,
    country: string,
    state: string,
    city: string,
    phoneNumber:number,
    avatarURL: string,
    pastWTitle: string,
    pastWDescription: string,
    pastWStartDate: string,
    pastWEndDate: string,
    schoolName: string,
    degree: string,
    specialization1: string,
    specialization2: string,
    expertSkills: SkillsOptions[],
    advancedSkills: SkillsOptions[],
    intermediateSkills: SkillsOptions[],
    basicSkills: SkillsOptions[],
}

const validationSchema = Yup.object().shape({
    aboutDescription: Yup.string().required("Description is required").max(800),
    fullName: Yup.string().required("Full Name is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    phoneNumber: Yup.number().required("Phone is required"),
    avatarURL: Yup.string().required("Avatar URL is required"),
    pastWTitle: Yup.string().required("Title is required"),
    pastWDescription: Yup.string().required("Description is required").max(800),
    pastWStartDate: Yup.string().required("Start Date is required"),
    pastWEndDate: Yup.string().required("End Date is required"),
    schoolName: Yup.string().required("School Name is required"),
    degree: Yup.string().required("Degree is required"),
});

interface FormComponent2Props {
    
}

const FormComponent2: FC<FormComponent2Props> = ({}) => {
    const router = useRouter();

    const methods = useForm<FormValues>({
        //resolver: yupResolver(validationSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    const handlePDFAutofill = (datafromPDF: FormValues) => {
        console.log("updating...")
        methods.reset(datafromPDF);
      };

    const handleCreateData = async (data:any) => {
        const response = await fetch("/api/postUsers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.log(response.body);
        console.log(response);

        router.push('/profile');
      };

    return (
        <FormProvider {...methods}>
            <AIAssistantModal></AIAssistantModal>
            <form onSubmit={methods.handleSubmit(handleCreateData)} className="container mx-auto" >
                <div className="grid grid-cols-9">
                    <div className="-bg-orange-500 col-span-6 m-8 flex flex-col gap-8">
                        <Heading>Hello, name!</Heading>
                        <p className="text-base font-light text-gray-400">
                            Fill out the following information to create your profile. If
                            you changed your mind and want to create you profile with
                            Linkedin, make sure to hit the button and start with the
                            process.
                        </p>
                        <div className="w-52">
                            <Button
                            className={buttonVariants({
                                variant: "linkedin",
                                size: "logIn",
                            })}
                            >
                            <p className="">Create with Linkedin</p>
                            </Button>
                        </div>
                        <div>
                            <PDFUploadButton
                                onPDFClick={handlePDFAutofill}
                            />
                            </div>

                        <AboutForm></AboutForm>
                        <ContactForm></ContactForm>
                        <PastWorkForm></PastWorkForm>
                        <EducationForm></EducationForm>
                        <SkillsForm></SkillsForm>

                        <div className="grid justify-items-end">
                            <div className="w-52">
                            <Input type="submit" value="Submit"></Input>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default FormComponent2