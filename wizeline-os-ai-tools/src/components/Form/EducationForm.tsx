import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'

interface EducationFormProps {
  
}

const EducationForm: FC<EducationFormProps> = ({}) => {
  return(
    <div className='flex flex-col gap-4'>
        <Heading className={cn(headingVariants({size: 'default'}))}> Education </Heading>
        <Input placeholder='School Name' title='School Name'></Input>
        <Input placeholder='Degree' title='Degree'></Input>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <Input title='Specialization 1' placeholder='Specialization 1'></Input>
            </div>
            <div>
                <Input title='Specialization 2' placeholder='Specialization 1'></Input>
            </div>
        </div>

    </div>
  )
}

export default EducationForm