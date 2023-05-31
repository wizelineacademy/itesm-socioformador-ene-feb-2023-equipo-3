import TextAreaControlled from '@/components/ui/TextAreaControlled'
import { FC } from 'react'

interface AssistantQuestionsProps {
    activeQuestion: number;
    questionsValues: any,
    questionsArray: string[],
    setQuestionsValues: any,
    indexQuestion: any,
}



const AssistantQuestions: FC<AssistantQuestionsProps> = ({activeQuestion, questionsArray, questionsValues, setQuestionsValues, indexQuestion}) => {
    

    return (
        <div>
            <p>{questionsArray[activeQuestion]}</p>
            <TextAreaControlled textName={indexQuestion} textInput={questionsValues[indexQuestion]} valueChange={setQuestionsValues}></TextAreaControlled>
        </div>
    
    )
}

export default AssistantQuestions