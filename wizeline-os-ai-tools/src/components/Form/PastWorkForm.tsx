import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'
import Textarea from '../ui/Textarea'


interface PastWorkFormProps {
  
}

const PastWorkForm: FC<PastWorkFormProps> = ({}) => {
  return (
    <div className='flex flex-col gap-4'>
        <Heading className={cn(headingVariants({size: 'default'}))}> Past Work </Heading>
        <Input placeholder='Title' title='Title'></Input>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <Input title='Start Date' type='date' placeholder='Start Date'></Input>
            </div>
            <div>
                <Input title='End Date' type='date' placeholder='End Date'></Input>
            </div>
        </div>
        <div>
            <Textarea title='Description'></Textarea>
        </div>
    </div>
  )
}

export default PastWorkForm