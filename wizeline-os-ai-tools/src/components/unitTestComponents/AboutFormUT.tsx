import { FC } from 'react'
import AboutForm2 from '../Form/AboutForm';
import { FormProvider, useForm } from "react-hook-form";
import { Input } from '../ui/Input';

interface AboutFormUTProps {}

interface FormValues {
    aboutDescription: string;
  }

const AboutFormUT: FC<AboutFormUTProps> = ({}) => {
    const methods = useForm<FormValues>();

	const handleSubmit = (data: FormValues) => {
		console.log(data);
	};
	
	return (
		<FormProvider {...methods}>
		<form onSubmit={methods.handleSubmit(handleSubmit)} className="p-8">
			<AboutForm2></AboutForm2>
			<Input id='submitButton' type="submit" value="Submit"></Input>
		</form>
		</FormProvider>
	);
}

export default AboutFormUT