import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'
import Textarea from '../ui/Textarea'

interface ContactFormProps {
  value2:any;
  //onChange:any;
  function1:any;
  
}

const ContactForm: FC<ContactFormProps> = ({value2, function1}) => {
  return (
    <div className='flex flex-col gap-4'>
        <Heading className={cn(headingVariants({size: 'default'}))}> Contact </Heading>
        <Input id="full_name" title='Full Name' placeholder='Full Name' name='fullName' 
        value={value2.full_name}
        onChange={function1}></Input>
        <Input id="Title" title='Title' placeholder='Title'></Input>
        <div className='grid grid-cols-3 gap-4'>
        <Input id="Country" title='Country' placeholder='Country'></Input>
        <Input id="State" title='State' placeholder='State'></Input>
        <Input id="City" title='City' placeholder='City'></Input>
        </div>
        <Input id="phone" title='Phone' placeholder='Phone'></Input>
        <Input id="avatar" title='Avatar URL' placeholder='Avatar URL'></Input>
    </div>
  )
}

export default ContactForm