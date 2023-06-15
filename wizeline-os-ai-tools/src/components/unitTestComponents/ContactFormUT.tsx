import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ContactForm2 from "../Form/ContactForm";
import { Input } from '../ui/Input';

interface ContactFormUTProps {}

interface FormValues {
  fullName: string;
  title: string | undefined;
  country: string | undefined;
  state: string | undefined;
  city: string | undefined;
  phoneNumber: string | undefined;
  avatarURL: string | undefined;
}

const ContactFormUT: FC<ContactFormUTProps> = ({}) => {
  const methods = useForm<FormValues>();

	const handleSubmit = (data: FormValues) => {
		console.log(data);
	};
	
	return (
		<FormProvider {...methods}>
		<form onSubmit={methods.handleSubmit(handleSubmit)} className="p-8">
			<ContactForm2></ContactForm2>
			<Input id='submitButton' type="submit" value="Submit"></Input>
		</form>
		</FormProvider>
	);
};

export default ContactFormUT;
