import { cn } from '@/utils/utils'
import React from 'react'
import { FC } from 'react'

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> { 
    //valueField: string,
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps> (
    ({ className, placeholder, title, ...props}, ref) => {

        const [text, setText] = React.useState('');

        return (
            <div>
                <label htmlFor="" className='block mb-1 text-md font-medium text-gray-900'>{title}</label>
                <div className={cn(
                    'border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5',
                    className)}>
                    
                    <textarea 
                    className='resize-none w-full'
                    placeholder="Type in here…"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    rows={5}
                    {...props}></textarea>
                    <p className='text-gray-400 text-right'>{text.length}/500</p>
                </div>
            </div>

            
        )
    }
)

export default Textarea

{/* <div>
<label htmlFor="" className='block mb-1 text-md font-medium text-gray-900'>{title}</label>
<div className={cn(
    'border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5',
    className)}>
    <textarea 
    className='resize-none w-full'
    placeholder="Type in here…"
    rows={5}
    {...props}></textarea>
    <p className='text-gray-400 text-right'>{text.length}/500</p>
</div>
</div> */}