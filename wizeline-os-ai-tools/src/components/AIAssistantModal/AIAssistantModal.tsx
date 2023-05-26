import { FC, useState } from 'react'
import GoalsSettings from './ModalComponents/GoalsSettings';
import { Dialog, Button } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

interface AssistantModalValues{
    audience: string,
    objective: string,
    tone: string,
    question1: string,
    question2: string,
    question3: string,
    question4: string,
    question5: string,
}

interface AIAssistantModalProps {

}

function getStepContent(step:number) {
    switch (step) {
        case 0:
            return <GoalsSettings></GoalsSettings>
        // case 1:
        //     return <Question1></Question1>;
        // case 2:
        //     return <Question2></Question2>;
        // case 3:
        //     return <Question3></Question3>;
        // case 4:
        //     return <Question4></Question4>;
        // case 5:
        //     return <Question5></Question5>; 
      default:
        return "unknown step";
    }
}

const AIAssistantModal: FC<AIAssistantModalProps> = ({}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [isModalOpen, setModalState] = useState(true);

    const [question1, setQuestion1State] = useState("");
    const [question2, setQuestion2State] = useState("");
    const [question3, setQuestion3State] = useState("");
    const [question4, setQuestion4State] = useState("");
    const [question5, setQuestion5State] = useState("");

    const handleClose = () => {
        setModalState(false);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    };

    const handleSubmit = (data: any) => {
        console.log(data);
    }

    const handlePrevious = () => {
        setActiveStep(activeStep - 1);
    };





    return (
        <Dialog open={isModalOpen}  fullWidth maxWidth="sm" >
                <div className='flex flex-col gap-8 m-8'>
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <SmartToyIcon className="content-center text-4xl" />
                            <h2 className=" text-2xl font-semibold">Profile Assistant</h2>
                        </div>
                        
                        {getStepContent(0)}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button type="button" onClick={activeStep === 0 ? (handleClose) : (handlePrevious)}>
                            {activeStep === 0 ? ("Create Manually") : ("Go Back")}
                        </Button>
                        <Button type={activeStep === 5 ? ("submit") : ("button")} onClick={activeStep === 5 ? (handleClose) : (handleNext)}>
                            {activeStep === 5 ? ("Finish") : ("Next")}
                        </Button>

                    </div>
                    

                </div>
            </Dialog>
    
    )
}

export default AIAssistantModal