import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import Textarea from '../ui/Textarea'

interface AboutFormProps {
  
}

const AboutForm: FC<AboutFormProps> = ({}) => {
    return (
        <div className='flex flex-col gap-4'>
            <Heading className={cn(headingVariants({size: 'default'}))}> About </Heading>
            <Textarea></Textarea>
        </div>
    )
}

export default AboutForm