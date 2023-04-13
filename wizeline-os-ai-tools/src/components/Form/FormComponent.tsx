import { FC } from 'react'
import { Input } from '../ui/Input'
import AboutForm from './AboutForm'
import EducationForm from './EducationForm'
import PastWorkForm from './PastWorkForm'
import SkillsForm from './SkillsForm'

import { useFormik } from 'formik'
import ContactForm from './ContactForm'
import Multiselect from '../ui/Multiselect'
import { Link } from 'lucide-react'
import { Button, buttonVariants } from '../ui/Button'

interface FormComponentProps {
  
}

const FormComponent: FC<FormComponentProps> = ({}) => {
  const formValues = useFormik({
      initialValues: {
        about: "ola",
      },

      onSubmit: (values) => {
          console.log("form submitted");
          console.log(values);
      },
  });

  console.log(formValues.values)


  return (
    <form action="" className=' container mx-auto flex items-start -bg-slate-200'>
      <div className='w-2/3 m-8 flex flex-col gap-8'>
        <div className='w-52'>
          <Button className={buttonVariants({variant: 'linkedin', size: 'logIn'})}>
            <p className=''>Create with Linkedin</p>
          </Button>
        </div>
        <ContactForm></ContactForm>
        <AboutForm></AboutForm>
        <PastWorkForm></PastWorkForm>
        <EducationForm></EducationForm>
        <SkillsForm></SkillsForm>
        <div className='grid justify-items-end'>
          <div className='w-52 '>
            <Button className={buttonVariants({variant: 'linkedin', size: 'logIn'})}>
              <p className=''>Submit</p>
            </Button>
          </div>
        </div>
      </div>
      <div className='w-1/3 bg-gray-200' style={{height: 2200}}>
      </div>
    </form>
  )
}

export default FormComponent