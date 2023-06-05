import * as React from 'react'
import { cn } from '@/utils/utils'


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, title, ...props }, ref) => {
    return (
        <div>
            <p className='block mb-1 text-sm font-medium text-gray-900'>{title}</p>
            <input
                className={cn(
                '-bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5',
                className
                )}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }