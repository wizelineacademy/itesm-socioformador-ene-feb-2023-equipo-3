import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import ContactForm2 from '../Form/ContactForm';

interface ContactFormUTProps {}

interface FormValues {
    fullName:           string,
    title:              string  | undefined,
    country:            string  | undefined,
    state:              string  | undefined,
    city:               string  | undefined,
    phoneNumber:        string  | undefined,
    avatarURL:          string  | undefined,
}

const ContactFormUT: FC<ContactFormUTProps> = ({}) => {
    
    const methods = useForm<FormValues>();

  return(
    <FormProvider {...methods}>
    
      <ContactForm2></ContactForm2>

    </FormProvider>
  )
}

export default ContactFormUT