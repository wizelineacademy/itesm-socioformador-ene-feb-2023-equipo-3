import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import Textarea from '../ui/Textarea'

interface AboutFormProps {
    inputValues: any,
    action: any,
}

const AboutForm: FC<AboutFormProps> = ({ inputValues, action }) => {

    return (
        <div className='flex flex-col gap-4'>
            <Heading className={cn(headingVariants({ size: 'default' }))}> About </Heading>
            <Textarea id="about"></Textarea>
        </div>
    )
}

export default AboutForm