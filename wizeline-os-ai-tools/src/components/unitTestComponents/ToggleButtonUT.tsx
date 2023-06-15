import { FC, useState } from 'react'
import ToggleButtons from '../ui/ToggleButtons'
import { FormProvider, useForm } from 'react-hook-form';
import AIAssistantModal from '../AIAssistantModal/AIAssistantModal';

interface ToggleButtonUTProps {}

export interface FormValues {
    aiAsistant: any,
    aboutDescription: string | undefined,
}

const ToggleButtonUT: FC<ToggleButtonUTProps> = ({}) => {
    const methods = useForm<FormValues>();
    
    return (
        <FormProvider {...methods}>
            <form className="p-8">
                <AIAssistantModal></AIAssistantModal>
            </form>
        </FormProvider>

    )
}

export default ToggleButtonUT