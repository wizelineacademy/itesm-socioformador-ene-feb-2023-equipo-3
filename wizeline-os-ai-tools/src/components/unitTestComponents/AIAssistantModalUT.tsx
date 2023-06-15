import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import AIAssistantModal from '../AIAssistantModal/AIAssistantModal';

interface AIAssistantModalUTProps {}

export interface FormValues {
    aiAsistant: any,
    aboutDescription: string | undefined,
}

const AIAssistantModalUT: FC<AIAssistantModalUTProps> = ({}) => {
    const methods = useForm<FormValues>();
    
    return (
        <FormProvider {...methods}>
            <form className="p-8">
                <AIAssistantModal></AIAssistantModal>
            </form>
        </FormProvider>

    )
}

export default AIAssistantModalUT