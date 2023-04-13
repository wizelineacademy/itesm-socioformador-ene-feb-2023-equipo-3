import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'

interface SkillsFormProps {
  
}

const SkillsForm: FC<SkillsFormProps> = ({}) => {
  return (
    <div className='flex flex-col gap-4'>
        <Heading className={cn(headingVariants({size: 'default'}))}> Skills </Heading>
        <Input placeholder='Expert'></Input>
        <Input placeholder='Advanced'></Input>
        <Input placeholder='Intermediate'></Input>
        <Input placeholder='Novice'></Input>
    </div>
  )
}

export default SkillsForm