import { FC, useState } from 'react'
import LinkedInLoginButton from '../Form/LinkedInLoginButton'
import { Input } from '../ui/Input'
import { SkillsOptions } from '@/utils/skillsData';
import { FormProvider, useForm } from 'react-hook-form';

interface LinkedinLoginButtonUTProps {

}

export interface FormValues {
    aiAsistant: any,
    aboutDescription: string | undefined,
    fullName: string,
    title: string | undefined,
    country: string | undefined,
    state: string | undefined,
    city: string | undefined,
    phoneNumber: string | undefined,
    avatarURL: string | undefined,
    schoolName: string | undefined,
    degree: string | undefined,
    specialization1: string | undefined,
    specialization2: string | undefined,
    pastWtitle: string | undefined,
    pastWStartDate: string | undefined,
    pastWEndDate: string | undefined,
    pastWDescription: string | undefined,
    expertSkills: SkillsOptions[],
    advancedSkills: SkillsOptions[],
    intermediateSkills: SkillsOptions[],
    basicSkills: SkillsOptions[],
}

const LinkedinLoginButtonUT: FC<LinkedinLoginButtonUTProps> = ({ }) => {
    const methods = useForm<FormValues>();

    const [linkedinUsername, setLinkedinUsername] = useState("");
    const isLinkedinUsernameEmpty = linkedinUsername.trim() === "";

    const handleLinkedinUsernameChange = (event: any) => {
        setLinkedinUsername(event.target.value);
    };

    const handleLinkedInAutoFill = (dataFromLinkedIn: FormValues) => {
        console.log("updating...")
        methods.reset(dataFromLinkedIn);
    };

    return (
        <FormProvider {...methods}>
            <form className="p-8">
                <div className="w-52 mr-4">
                    <Input
                        type="text"
                        title="LinkedIn Username"
                        value={linkedinUsername}
                        onChange={handleLinkedinUsernameChange}
                        placeholder="LinkedIn Username"
                    />
                </div>
                <div className="flex-gow mt-5">
                    <LinkedInLoginButton
                        text="Get From LinkedIn"
                        onLinkedInClick={handleLinkedInAutoFill}
                        linkedInUsername={linkedinUsername}
                        disabled={isLinkedinUsernameEmpty}
                    />
                </div>
            </form>
        </FormProvider>

    )
}

export default LinkedinLoginButtonUT