import { CustomDropdownIndicator } from '@/utils/CustomDropdownIndicator';
import { FC } from 'react'
import * as React from 'react'
import Select from "react-select";


interface MultiselectProps {
    inputValues: any,
	action: any,
    data: any,
	title: string,
}


const Multiselect: FC<MultiselectProps> = ({ inputValues, action, data, title}) => {
	return (
		<div>
			<label htmlFor="" className='block mb-1 text-sm font-medium text-gray-900'>{title}</label>
		<Select
				isMulti
				instanceId='skills'
				name='skills'
				options={data}
				components={{DropdownIndicator: CustomDropdownIndicator }}
				placeholder={title}
				styles={{
					placeholder: (base) => ({
						...base,
						fontSize: "1em",
						color: 'darkGray',
						fontWeight: 400
					})
				}}
				className="react-select"
				classNamePrefix="react-select"
				onChange={action}
				value={data.filter((obj: { value: any; }) => inputValues.includes(obj.value))}
		  />
		</div>
  )
}

export default Multiselect