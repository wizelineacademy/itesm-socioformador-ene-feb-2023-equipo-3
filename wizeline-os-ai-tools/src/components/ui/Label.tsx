import { FC } from 'react'

interface LabelProps {
    title: string,
}

const Label: FC<LabelProps> = ({title}) => {
  return <label htmlFor="" className='block mb-1 text-md font-small text-gray-800'>{title}</label>
}

export default Label