import { FC } from 'react'
import { SkillsOptions } from '@/utils/skillsData';
import { FormProvider, useForm } from 'react-hook-form';
import SkillsForm from '../Form/SkillsForm';

interface SkillsFormUTProps { }

interface FormValues {
    expertSkills: SkillsOptions[],
    advancedSkills: SkillsOptions[],
    intermediateSkills: SkillsOptions[],
    basicSkills: SkillsOptions[],
}


const SkillsFormUT: FC<SkillsFormUTProps> = ({ }) => {
    const methods = useForm<FormValues>();

	const handleSubmit = (data: FormValues) => {
		console.log(data);
	};
	
	return (
		<FormProvider {...methods}>
		<form onSubmit={methods.handleSubmit(handleSubmit)} className="p-8">
			<SkillsForm></SkillsForm>
		</form>
		</FormProvider>
	);
}

export default SkillsFormUT