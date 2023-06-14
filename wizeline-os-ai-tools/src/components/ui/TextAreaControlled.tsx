import React from 'react';
import { FC } from 'react'
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";

interface TextAreaControlledProps extends React.HTMLAttributes<HTMLTextAreaElement> { 
    textInput: string;
    textName: any;
    valueChange: any;
}

const TextAreaControlled = React.forwardRef<HTMLTextAreaElement, TextAreaControlledProps> (
    ({ className, placeholder, title, textInput, valueChange, textName, ...props}, ref) => {

        const characterLimit = 250;
        const isExceededLimit = textInput && textInput.length > characterLimit;
        
        return (
            <div
                className={` ${
                    isExceededLimit
                    ? "block w-full rounded border-2 border-rose-600 p-3.5 text-sm text-gray-900 focus:border-rose-600 focus:ring-rose-600"
                    : "block w-full rounded border border-gray-300 p-3.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }`}
            >
                <textarea
                name={textName}
                placeholder="Description..."
                value={textInput}
                onChange={valueChange}
                className="w-full resize-none"
                id=""
                rows={5}
                />
                <p className= {` ${
                isExceededLimit
                    ? "text-right text-rose-600"
                    : "text-right text-gray-400"
                }`}>
                {textInput.length}/{characterLimit}
                </p>
            </div>
            //{errors.aboutDescription && || isExceededLimit && ( <p className="text-sm text-pink-600">{errors.aboutDescription}</p>)}
        )
    }
)

export default TextAreaControlled