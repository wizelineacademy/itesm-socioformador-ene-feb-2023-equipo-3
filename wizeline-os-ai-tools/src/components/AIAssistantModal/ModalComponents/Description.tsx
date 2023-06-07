import { FC } from 'react'

interface DescriptionProps {
    activeStep: number;
    aboutMeText: string;
}

const Description: FC<DescriptionProps> = ({activeStep, aboutMeText}) => {
    return (
        <div>
            {activeStep === 2 ? (
                <div className='flex flex-col gap-2'>
                    <p className='font-light'>By answering a few questions, you will be able to create your personal About Me in the style below:</p>
                    <p className='font-light italic'>“John Doe has over 8 years of experience in software development, primarily in Oil and Apparel industries. He has experience leading teams of 6-10 engineers. John Doe is most passionate about finding simple ways to solve problems, leading technical teams and learning new technologies in Frontend as React, and bringing help whenever he can. His career has been oriented to FE solutions though he has worked also with BE. ” </p>
                    <p className='font-semibold'>Would you like help to create your About Me?</p>
                </div>
                ) : (
                    <div className='flex flex-col gap-2'>
                        <p className='font-light'>Using the information you provided, here is your personal profile:</p>
                        <p className='text-neutral-500'>{aboutMeText}</p>
                        <p>Would you like to use this About Me?</p>
                    </div>
                )}
        </div>
    );
}

export default Description