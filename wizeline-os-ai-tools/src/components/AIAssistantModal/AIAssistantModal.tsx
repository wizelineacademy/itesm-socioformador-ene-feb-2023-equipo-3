import { FC, useState } from 'react'
import GoalsSettings from './ModalComponents/GoalsSettings';
import { Dialog, Button } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AssistantQuestions from './ModalComponents/AssistantQuestions';
import Description from './ModalComponents/Description';
import Presentation from './ModalComponents/Presentation';

interface AssistantModalValues{
    audience?: string,
    objective?: string,
    tone?: string,
    question1?: string,
    question2?: string,
    question3?: string,
    question4?: string,
    question5?: string,
}

interface AIAssistantModalProps {

}

function getQuestions(){
    const questionsArray = [
        "How many years of experience do you have?",
        "What industries have you worked in?",
        "Do you have any experience leading teams? Describe it.",
        "What differentiates you for this role? Mention your strengths and soft skills. ",
        "What is your career orientation? "
    ]
    return questionsArray;
}


const AIAssistantModal: FC<AIAssistantModalProps> = ({}) => {
    function getStepContent(step:number) {
        switch (step) {
            case 0:
                return <Presentation></Presentation>
            case 1:
                return <Description activeStep={activeStep + 1} aboutMeText={"hello there"}></Description>
            case 2:
                return <GoalsSettings questions={data} setQuestions={setData}></GoalsSettings>
            case 3:
                return <AssistantQuestions activeQuestion={activeQuestion} 
                                            questionsArray={getQuestions()} 
                                            indexQuestion={indexQuestions[activeQuestion]} 
                                            questionsValues={data} 
                                            setQuestionsValues={handleChange}></AssistantQuestions>;
            case 4:
                return <Description activeStep={activeStep + 1} aboutMeText={"hello there"}></Description>
          default:
            return "unknown step";
        }
    }

    const [activeStep, setActiveStep] = useState(0);
    const [isModalOpen, setModalState] = useState(true);
    const [activeQuestion, setActiveQuestion] = useState(0);

    const [data, setData] = useState<AssistantModalValues>({
        audience: "General",
        objective: "Persuade",
        tone: "Informative",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
    })

    const indexQuestions = ["question1", "question2", "question3", "question4", "question5"];

    const handleChange = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setData((prev:any) => {
          return {...prev, [name]:value}
        })
    }

    const handleClose = () => {
        console.log(data)
        setModalState(false);
    };

    const handleNext = () => {
        console.log("handle Next");
        setActiveStep(activeStep + 1)
    };

    const handleNextQuestion = () => {
        console.log("nextQuestion");
        setActiveQuestion(activeQuestion + 1)
    }

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
                    
                    {getStepContent(activeStep)}
                </div>
                <div>
                    {activeStep === 0 ? (
                        <div className="grid">
                            <Button variant="contained" color="error" className='bg-red-500' disableElevation type="button" onClick={handleNext}>
                                Next
                            </Button>

                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                        <Button variant="outlined" color="error" type="button" onClick={activeStep === 1 ? (handleClose) : (handlePrevious)}>
                            {activeStep === 1 ? ("Create Manually") : ("Go Back")}
                        </Button>                                                           
                        <Button variant="contained" color="error" className='bg-red-500' disableElevation type={activeStep === 4 ? ("submit") : ("button")} onClick={activeStep < 3 ? (handleNext) : (activeQuestion < 4 ? (handleNextQuestion) : (activeStep === 4 ? (handleClose) : (handleNext)))}>
                                {activeStep === 4 ? ("Finish") : ("Next")}
                        </Button>
                    </div>
                    )}
                </div>
            </div>
        </Dialog>
    )
}

export default AIAssistantModal
