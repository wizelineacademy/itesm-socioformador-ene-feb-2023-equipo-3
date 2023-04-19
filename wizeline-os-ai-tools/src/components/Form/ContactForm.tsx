import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'
import Textarea from '../ui/Textarea'

interface ContactFormProps {
	inputValues: any,
	action: any,
}

const ContactForm: FC<ContactFormProps> = ({ inputValues, action }) => {
	return (
		<div className='flex flex-col gap-4'>
			<Heading className={cn(headingVariants({ size: 'default' }))}> Contact </Heading>
			<Input id="full_name"
				title='Full Name'
				placeholder='Full Name'
				name='fullName'
				onChange={action}
				value={inputValues.fullName}></Input>
			<Input id="Title"
				title='Title'
				placeholder='Title'
				name='title'
				onChange={action}
				value={inputValues.title}></Input>
			<div className='grid grid-cols-3 gap-4'>
				<Input id="Country"
					title='Country'
					placeholder='Country'
					name='country'
					onChange={action}
					value={inputValues.country}></Input>
				<Input id="State"
					title='State'
					placeholder='State'
					name='state'
					onChange={action}
					value={inputValues.state}></Input>
				<Input id="City"
					title='City'
					placeholder='City'
					name='city'
					onChange={action}
					value={inputValues.city}></Input>
			</div>
			<Input id="phone"
				title='Phone'
				placeholder='Phone'
				name='phone'
				onChange={action}
				value={inputValues.phone}></Input>
			<Input id="avatar"
				title='Avatar URL'
				placeholder='Avatar URL'
				name='avatarURL'
				onChange={action}
				value={inputValues.avatarURL}></Input>
		</div>
	)
}

export default ContactForm