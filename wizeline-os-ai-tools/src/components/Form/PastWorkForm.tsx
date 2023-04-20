import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'
import Textarea from '../ui/Textarea'

import { useFormik } from 'formik'
import * as Yup from "yup";
import Multiselect from '../ui/Multiselect'
import { stateOptions } from '@/utils/skillsData'


interface PastWorkFormProps {
    inputValues: any,
    action: any,
    inputValues2: any,
    action2: any,
}

const PastWorkForm: FC<PastWorkFormProps> = ({ inputValues, action, inputValues2, action2}) => {

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
            <Multiselect title='Skills' 
                        inputValues={inputValues2} 
                        action={action2} 
                        data={stateOptions}></Multiselect>
        </div>
    )
}

export default PastWorkForm