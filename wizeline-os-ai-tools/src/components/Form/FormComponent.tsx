import { FC } from 'react'
import { Input } from '../ui/Input'
import AboutForm from './AboutForm'
import EducationForm from './EducationForm'
import PastWorkForm from './PastWorkForm'

interface FormComponentProps {
  
}

const FormComponent: FC<FormComponentProps> = ({}) => {
  return (
    
    <form action="" className=' container mx-auto h-screen flex items-start -bg-slate-200'>
      <div className='w-2/3 m-8 flex flex-col gap-4'>
        <AboutForm></AboutForm>
        <PastWorkForm></PastWorkForm>
        <EducationForm></EducationForm>
      </div>
      <div className='w-1/3 bg-gray-200 h-screen'>
        
      </div>
    
    </form>
  )
}

export default FormComponent

/*
<form action="" className='h-screen flex items-start'>
        <div className='relative w-2/3 h-full flex flex-col bg-slate-200'>
          <div className='container mx-auto bg-orange-200'>
            <p>a</p>

          </div>

        </div>
        <div className='relative w-1/3 h-full flex flex-col bg-slate-500'>
          <p>a</p>

        </div>
      </form>


*/