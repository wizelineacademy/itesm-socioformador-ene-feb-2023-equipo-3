import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../ui/Input';
import PastWorkForm2 from '../Form/PastWorkForm';

interface PastWorkUTProps {}

interface FormValues {
    pastWtitle:         string  | undefined,
    pastWStartDate:         string  | undefined,
    pastWEndDate:           string  | undefined,
    pastWDescription:   string  | undefined,
}

const PastWorkUT: FC<PastWorkUTProps> = ({}) => {
    const methods = useForm<FormValues>();

	const handleSubmit = (data: FormValues) => {
		console.log(data);
	};
	
	return (
		<FormProvider {...methods}>
		<form onSubmit={methods.handleSubmit(handleSubmit)} className="p-8">
			<PastWorkForm2></PastWorkForm2>
			<Input id='submitButton' type="submit" value="Submit"></Input>
		</form>
		</FormProvider>
	);
}

export default PastWorkUT