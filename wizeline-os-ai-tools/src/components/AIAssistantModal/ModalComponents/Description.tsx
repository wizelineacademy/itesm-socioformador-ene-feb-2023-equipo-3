import { FC } from 'react'

interface DescriptionProps {
  
}

const Description: FC<DescriptionProps> = ({}) => {
    return (
        <div className='flex flex-col gap-2'>
                <p className='font-light'>By answering a few questions, you will be able to create your personal About Me in the style below:</p>
                <p className='font-light italic'>“John Doe has over 8 years of experience in software development, primarily in Oil and Apparel industries. He has experience leading teams of 6-10 engineers. John Doe is most passionate about finding simple ways to solve problems, leading technical teams and learning new technologies in Frontend as React, and bringing help whenever he can. His career has been oriented to FE solutions though he has worked also with BE. ” </p>
                <p className='font-semibold'>Would you like help to create your About Me?</p>
        </div>
    );
}

export default Description