import { FC, useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { Heading } from '../ui/Heading';
import AboutForm from './AboutForm';
import ContactForm from './ContactForm';
import PastWorkForm from './PastWorkForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import { Input } from '../ui/Input';
import AIAssistantModal from '../AIAssistantModal/AIAssistantModal';
import LinkedInLoginButton, { FormProfileData } from './LinkedInLoginButton';
import PDFUploadButton, { FormPDFProfileData } from "@/components/Form/PDFUploadButton";

interface FormComponent2Props {}

interface FormValues{
    aiAssistant: any,
    aboutDescription: string,
    fullName: string,
    title: string,
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

const validationSchema = Yup.object().shape({
    aboutDescription: Yup.string().required("Description is required").max(800),
    fullName: Yup.string().required("Full Name is required"),
    title: Yup.string().required("Title is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    phoneNumber: Yup.number().required("Phone is required"),
    avatarURL: Yup.string().required("Avatar URL is required"),
    pastWtitle: Yup.string().required("Title is required"),
    pastWDescription: Yup.string().required("Description is required").max(800),
    pastWStartDate: Yup.string().required("Start Date is required"),
    pastWEndDate: Yup.string().required("End Date is required"),
    schoolName: Yup.string().required("School Name is required"),
    degree: Yup.string().required("Degree is required"),
});

interface FormComponent2Props {
    
}

const FormComponent2: FC<FormComponent2Props> = ({}) => {       
    const methods = useForm<FormValues>({
        //resolver: yupResolver(validationSchema),
    })

const FormComponent2: FC<FormComponent2Props> = ({ }) => {
  const [linkedinUsername, setLinkedinUsername] = useState("");
  const isLinkedinUsernameEmpty = linkedinUsername.trim() === "";
  const handleLinkedinUsernameChange = (event: any) => {
    setLinkedinUsername(event.target.value);
  };

  const onSubmit = (data: FormProfileData) => {
    console.log(data);
  };

  const methods = useForm<FormProfileData>();
          
  const handleLinkedInAutoFill = (dataFromLinkedIn: FormProfileData) => {
    console.log("updating...")
    methods.reset(dataFromLinkedIn);
  };

    const handlePDFAutofill = (datafromPDF: FormPDFProfileData) => {
        console.log("updating...")
        methods.reset(datafromPDF);
      };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="container mx-auto">
        <div className="grid grid-cols-9">
          <div className="-bg-orange-500 col-span-6 m-8 flex flex-col gap-8">
            <Heading>Hello, name!</Heading>
            <p className="text-base font-light text-gray-400">
              Fill out the following information to create your profile. If
              you changed your mind and want to create your profile with
              Linkedin, make sure to hit the button and start with the
              process.
            </p>
            <div className="flex items-center">
                <div className="w-52 mr-4">
                  <Input
                    type = "text"
                    title = "LinkedIn Username"
                    value = {linkedinUsername}
                    onChange = {handleLinkedinUsernameChange}
                    placeholder = "LinkedIn Username"
                  />
                </div>
                <div className="flex-gow mt-5">
                  <LinkedInLoginButton 
                      text = "Get From LinkedIn" 
                      onLinkedInClick = {handleLinkedInAutoFill}
                      linkedInUsername = {linkedinUsername}
                      disabled = {isLinkedinUsernameEmpty}
                    />
                </div>
                <div>
                  <PDFUploadButton
                     onPDFClick={}
                  />
                </div>
              </div>
            <AboutForm></AboutForm>
            <ContactForm></ContactForm>
            <PastWorkForm></PastWorkForm>
            <EducationForm />
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

export default FormComponent2;
