import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'

interface EducationFormProps {
  // onChange:(newValue: string) => void;
  // value: string;

  value2:any;
  //onChange:any;
  function1:any;

}

const EducationForm: FC<EducationFormProps> = ({value2, function1}) => {
  return(
    <div className='flex flex-col gap-4'>
        <Heading className={cn(headingVariants({size: 'default'}))}> Education </Heading>
        <Input placeholder='School Name' title='School Name' name='schoolName' 
        value={value2.schoolName} 
        onChange={function1}></Input>
        <Input placeholder='Degree' title='Degree' name='degree' 
        value={value2.degree} 
        onChange={function1}></Input>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <Input title='Specialization 1' placeholder='Specialization 1' name='specialization1' 
                value={value2.specialization1} 
                onChange={function1}></Input>
            </div>
            <div>
                <Input title='Specialization 2' placeholder='Specialization 1' name='specialization2' 
                value={value2.specialization2} 
                onChange={function1}></Input>
            </div>
        </div>

    </div>
  )
}

export default EducationForm