import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'
import Textarea from '../ui/Textarea'

import { useFormik } from 'formik'
import * as Yup from "yup";


interface PastWorkFormProps {
  
}

const PastWorkForm: FC<PastWorkFormProps> = ({}) => {
    const pastWorkValues = useFormik({
        initialValues: {
          title: "",
          start_date: "",
          finish_date: "",
          description: "",
          skills: "",
        },
    
        onSubmit: (values) => {
            console.log("form submitted");
            console.log(values);
        },
    });

    console.log(pastWorkValues.values);
    return (
        <div className='flex flex-col gap-4'>
            <Heading className={cn(headingVariants({size: 'default'}))}> Past Work </Heading>
            <Input id='title' placeholder='Title' title='Title' value={pastWorkValues.values.title} onChange={pastWorkValues.handleChange}></Input>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <Input id='start_date' title='Start Date' placeholder='Start Date' value={pastWorkValues.values.start_date} onChange={pastWorkValues.handleChange}></Input>
                </div>
                <div>
                    <Input id='finish_date' title='End Date' placeholder='End Date' value={pastWorkValues.values.finish_date} onChange={pastWorkValues.handleChange}></Input>
                </div>
            </div>
            <Textarea id='description' title='Description'></Textarea>
            <Input id='skills' title='Skills' placeholder='Skills' value={pastWorkValues.values.skills} onChange={pastWorkValues.handleChange}></Input>
        </div>
    )
}

export default PastWorkForm