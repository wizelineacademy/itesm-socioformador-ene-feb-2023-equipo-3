import { FC, useState } from 'react'
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
  const [contactDetails, setContact] = useState({
    fullName: "",
    title: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    avatarURL: "",
  });

  const [aboutDetails, setAbout] = useState({
    descriptionAbout: "",
  });

  const [pastWorkDetails, setPastWork] = useState({
    pastWorkTitle: "",
    startDate: "",
    endDate: "",
    pastWorkDescription: "",
  })

  const [educationDetails, setEducation] = useState({
    schoolName: "",
    degree: "",
    specialization1: "",
    specialization2: "",
  });

  const handleChange = (e:any) => {
    const name = e.target.name;
    const value = e.target.value;

    setAbout((prev:any) => {
      return {...prev, [name]:value}
    })

    setContact((prev:any) => {
      return {...prev, [name]:value}
    })

    setPastWork((prev:any) => {
      return {...prev, [name]:value}
    })

    setEducation((prev:any) => {
      return {...prev, [name]:value}
    })
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(contactDetails);
  }


  return (
    <form onSubmit={handleSubmit} className=' container mx-auto flex items-start -bg-slate-200'>
      <div className='w-2/3 m-8 flex flex-col gap-8'>
        <div className='w-52'>
          <Button className={buttonVariants({variant: 'linkedin', size: 'logIn'})}>
            <p className=''>Create with Linkedin</p>
          </Button>
        </div>
        <ContactForm inputValues={contactDetails} action={handleChange}></ContactForm>
        <AboutForm inputValues={aboutDetails} action={handleChange}></AboutForm>
        <PastWorkForm inputValues={pastWorkDetails} action={handleChange}></PastWorkForm>
        <EducationForm inputValues={educationDetails} action={handleChange}></EducationForm>
        <SkillsForm></SkillsForm>
        <div className='grid justify-items-end'>
          <div className='w-52 '>
          <Input type='submit' value='Submit'></Input>
          </div>
        </div>
      </div>
      <div className='w-1/3 bg-gray-200' style={{height: 2200}}>
      </div>
    </form>
  )
}

export default FormComponent