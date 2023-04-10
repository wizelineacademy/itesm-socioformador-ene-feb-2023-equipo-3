import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import Textarea from '../ui/Textarea'

interface AboutFormProps {
    values: any,
}

const AboutForm: FC<AboutFormProps> = ({values}) => {
    
    return (
        <div className='flex flex-col gap-4'>
            <Heading className={cn(headingVariants({size: 'default'}))}> About </Heading>
            <Textarea id="about" valueField={values.about} title={values.about} onChange={values.handleChange}></Textarea>
        </div>
    )
}

export default AboutForm