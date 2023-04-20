import { cn } from '@/utils/utils'
import { FC } from 'react'
import { Heading, headingVariants } from '../ui/Heading'
import { Input } from '../ui/Input'
import Multiselect from '../ui/Multiselect'

interface SkillsFormProps {
	skillsValues: any,
	action: any,
	data: any,
}

const SkillsForm: FC<SkillsFormProps> = ({ skillsValues, action, data }) => {
	return (
		<div className='flex flex-col gap-4'>
			<Heading className={cn(headingVariants({ size: 'default' }))}> Skills </Heading>
			<Multiselect
				inputValues={skillsValues.expertSkills}
				action={action}
				data={data}></Multiselect>
			<Multiselect
						inputValues={skillsValues.advancedSkills}
						action={action}
						data={data}></Multiselect>
			<Multiselect
						inputValues={skillsValues.intermediateSkills}
						action={action}
						data={data}></Multiselect>
			<Multiselect
						inputValues={skillsValues.noviceSkills}
						action={action}
						data={data}></Multiselect>
		</div>
	)
}

export default SkillsForm