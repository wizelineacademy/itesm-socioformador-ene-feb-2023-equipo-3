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
import { useRouter } from 'next/router'
import { SkillsOptions } from '@/utils/skillsData';;
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import SkillsForm from './SkillsForm';
import { SkillsOptions } from '@/utils/skillsData';
import { Input } from '../ui/Input';
import LinkedInLoginButton from './LinkedInLoginButton';
import AIAssistantModal from '../AIAssistantModal/AIAssistantModal';

interface FormValues{
    aiAssistant: any,
    aboutDescription: string,
    fullName: string,
    country: string,
    state: string,
    city: string,
    phoneNumber:number,
    avatarURL: string,
    pastWtitle: string,
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

export interface FormValues {
  aiAsistant:         any,
  aboutDescription:   string  | undefined,
  fullName:           string,
  title:              string  | undefined,
  country:            string  | undefined,
  state:              string  | undefined,
  city:               string  | undefined,
  phoneNumber:        string  | undefined,
  avatarURL:          string  | undefined,
  schoolName:         string  | undefined,
  degree:             string  | undefined,
  specialization1:    string  | undefined, 
  specialization2:    string  | undefined,
  pastWtitle:         string  | undefined,
  pastWStartDate:         string  | undefined,
  pastWEndDate:           string  | undefined,
  pastWDescription:   string  | undefined,
  expertSkills: SkillsOptions[],
  advancedSkills: SkillsOptions[],
  intermediateSkills: SkillsOptions[],
  basicSkills: SkillsOptions[],
}

const FormComponent2: FC<FormComponent2Props> = ({ }) => {
  const router = useRouter();
  
  const [linkedinUsername, setLinkedinUsername] = useState("");
  const isLinkedinUsernameEmpty = linkedinUsername.trim() === "";

interface FormComponent2Props {
    
}

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

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

  const methods = useForm<FormValues>();

  const handleLinkedInAutoFill = (dataFromLinkedIn: FormValues) => {
    console.log("updating...")
    methods.reset(dataFromLinkedIn);
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