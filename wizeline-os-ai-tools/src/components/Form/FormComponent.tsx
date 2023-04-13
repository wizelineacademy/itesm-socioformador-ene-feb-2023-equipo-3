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
import { type } from 'os'

interface FormComponentProps {
  
}

const FormComponent: FC<FormComponentProps> = ({}) => {
  // const formValues = useFormik({
  //     initialValues: {
  //       about: "ola",
  //     },

  //     onSubmit: (values) => {
  //         console.log("form submitted");
  //         console.log(values);
  //     },
  // });

  // console.log(formValues.values)

  const [educationDetails, setEducation] = useState({
    schoolName: "",
    degree: "",
    specialization1: "",
    specialization2: "",
  });

  const [contactDetails, setContact] = useState({
    fullName: "",
    title: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    avatarURL: "",
  });

  const handleChange = (e:any) => {
    const name = e.target.name;
    const value = e.target.value;

    setEducation((prev:any) => {
      return {...prev, [name]:value}
    })

    setContact((prev:any) => {
      return {...prev, [name]:value}
    })
  };

  

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(educationDetails);
  }

  

  return (
    <form onSubmit={handleSubmit} className=' container mx-auto flex items-start -bg-slate-200' >
      

      <div className='w-2/3 m-8 flex flex-col gap-8'>
      <div className='bg-orange-500'>
        <p>{JSON.stringify(educationDetails)}</p>
      </div> 
        <div className='w-52'>
          <Button className={buttonVariants({variant: 'linkedin', size: 'logIn'})}>
            <p className=''>Create with Linkedin</p>
          </Button>
        </div>
        <ContactForm function1={handleChange} value2={contactDetails}></ContactForm>
        <AboutForm></AboutForm>
        <PastWorkForm></PastWorkForm>
        <EducationForm function1={handleChange} value2={educationDetails}></EducationForm>
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