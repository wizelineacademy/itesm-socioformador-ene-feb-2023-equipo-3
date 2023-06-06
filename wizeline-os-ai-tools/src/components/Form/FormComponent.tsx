import { FC, useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { Heading } from '../ui/Heading';
import AboutForm from './AboutForm';
import ContactForm from './ContactForm';
import PastWorkForm from './PastWorkForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import { Input } from '../ui/Input';
import LinkedInLoginButton, { FormProfileData } from './LinkedInLoginButton';

interface FormComponent2Props {}

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
