import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'

interface EducationFormProps {
	inputValues: any,
	action: any,
}

const EducationForm: FC<EducationFormProps> = ({ inputValues, action }) => {
	return (
		<div className='flex flex-col gap-4'>
			<Heading className={cn(headingVariants({ size: 'default' }))}> Education </Heading>
			<Input placeholder='School Name'
				title='School Name'
				name='schoolName'
				onChange={action}
				value={inputValues.schoolName}></Input>
			<Input placeholder='Degree' 
				title='Degree'
				name='degree'
				onChange={action}
				value={inputValues.degree}></Input>
			<div className='grid grid-cols-2 gap-4'>
				<div>
					<Input title='Specialization' 
						placeholder='Specialization'
						name='specialization1'
						onChange={action}
						value={inputValues.specialization1}></Input>
				</div>
				<div>
					<Input title='Specialization' 
						placeholder='Specialization'
						name='specialization2'
						onChange={action}
						value={inputValues.specialization2}></Input>
				</div>
			</div>

		</div>
	)
}

export default EducationForm