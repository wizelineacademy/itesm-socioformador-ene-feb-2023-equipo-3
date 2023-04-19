import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'
import Textarea from '../ui/Textarea'

import { useFormik } from 'formik'
import * as Yup from "yup";


interface PastWorkFormProps {
    inputValues: any,
    action: any,
}

const PastWorkForm: FC<PastWorkFormProps> = ({ inputValues, action }) => {

    return (
        <div className='flex flex-col gap-4'>
            <Heading className={cn(headingVariants({ size: 'default' }))}> Past Work </Heading>
            <Input id='title'
                placeholder='Title'
                title='Title'
                name='pastWorkTitle'
                onChange={action}
                value={inputValues.pastWorkTitle}></Input>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <Input id='startDate'
                        title='Start Date'
                        placeholder='Start Date'
                        name='startDate'
                        onChange={action}
                        value={inputValues.startDate}></Input>
                </div>
                <div>
                    <Input id='endDate'
                        title='End Date'
                        placeholder='End Date'
                        name='endDate'
                        onChange={action}
                        value={inputValues.endDate}></Input>
                </div>
            </div>
            <Textarea id='description'
                title='Description'
            ></Textarea>
            <Input id='skills'
                title='Skills'
                placeholder='Skills'
                name='skills'
                onChange={action}
                value={inputValues.skills}></Input>
        </div>
    )
}

export default PastWorkForm