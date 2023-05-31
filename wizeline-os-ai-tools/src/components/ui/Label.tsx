import { FC } from 'react'

interface LabelProps {
    title: string | undefined,
}

const Label: FC<LabelProps> = ({title}) => {
  return <p className='block mb-1 text-md font-small text-gray-800'>{title}</p>
}

export default Label