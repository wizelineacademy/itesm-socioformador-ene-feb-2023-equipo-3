import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Dialog, Button } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GoalsSettings from "./ModalComponents/GoalsSettings";
import AssistantQuestions from "./ModalComponents/AssistantQuestions";
import Description from "./ModalComponents/Description";
import Presentation from "./ModalComponents/Presentation";
interface AssistantModalValues {
  audience?: string;
  objective?: string;
  tone?: string;
  question1?: string;
  question2?: string;
  question3?: string;
  question4?: string;
  question5?: string;
}

interface Conversation {
  role: string;
  content: string;
}

interface AIAssistantModalProps {}

const AIAssistantModal: FC<AIAssistantModalProps> = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

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
  });

  const indexQuestions = [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
  ];
  const [generatedText, setGeneratedText] = useState("");

  const getQuestions = () => [
    "How many years of experience do you have?",
    "What industries have you worked in?",
    "Do you have any experience leading teams? Describe it.",
    "What differentiates you for this role? Mention your strengths and soft skills.",
    "What is your career orientation?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    console.log(data);
    setModalState(false);
    setValue("aboutDescription", generatedText);
  };

  const handleNext = () => {
    console.log("handle Next");
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleNextQuestion = () => {
    console.log("nextQuestion");
    setActiveQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    console.log("previousQuestion");
    setActiveQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const handlePrevious = () => {
    setGeneratedText("Loading...");
    setActiveStep((prevStep) => prevStep - 1);
  };

  const [conversation, setConversation] = useState<Conversation[]>([]);

  const getImprovements = async (
    inputData: AssistantModalValues,
    setInputText: any
  ) => {
    const text = `you are an expert in writing about me sections for the employees of a software development company, first you have to join all the parts that the colaborator give to us, the first part is about How many years of experience the colaborator has that is this part “${inputData.question1}”, the second part is about What industries have the colaborator work in, which is this part “${inputData.question2}", the third part is about if the colaborator has any experience leading teams, that is this part “${inputData.question3}”, the fourth part is about what differentiates the colaborator for the role at the company, that is this part “${inputData.question4}”, and the last part is about the colaborator career orientation, that is this part “${inputData.question5}”, once you have join all the parts you have to enrich it to give me a description text, the final text must be less than 500 characters, in a single paragraph, should be written in 1rst person, write only the text, do not add descriptions or opinions. It should start with the phrase "John Doe is a Software Engineer", also the type of audience you are writting for is ${inputData.audience}, your objective should be to ${inputData.objective}, and the tone you need to use is ${inputData.tone}`;

    const chatHistory = [...conversation, { role: "user", content: text }];
    const response = await fetch("/api/OpenAIChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: chatHistory }),
    });

    const data = await response.json();
    setConversation([
      ...chatHistory,
      { role: "assistant", content: data.result.choices[0].message.content },
    ]);

    setInputText(data.result.choices[0].message.content);
  };

  const handleDataCreation = () => {
    getImprovements(data, setGeneratedText);
    console.log(generatedText);

    setActiveStep((prevStep) => prevStep + 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Presentation />;
      case 1:
        return (
          <Description
            activeStep={activeStep + 1}
            aboutMeText={generatedText}
          />
        );
      case 2:
        return <GoalsSettings questions={data} setQuestions={setData} />;
      case 3:
        return (
          <AssistantQuestions
            activeQuestion={activeQuestion}
            questionsArray={getQuestions()}
            indexQuestion={indexQuestions[activeQuestion]}
            questionsValues={data}
            setQuestionsValues={handleChange}
          />
        );
      case 4:
        return (
          <Description
            activeStep={activeStep + 1}
            aboutMeText={generatedText}
          />
        );
      default:
        return "unknown step";
    }
  };

  return (
    <Dialog open={isModalOpen} fullWidth maxWidth="sm">
      <div className="m-8 flex flex-col gap-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <SmartToyIcon className="content-center text-4xl" />
            <h2 className="text-2xl font-semibold">Profile Assistant</h2>
          </div>

          {getStepContent(activeStep)}
        </div>
        <div>
          {activeStep === 0 ? (
            <div className="grid">
              <Button
                variant="contained"
                color="error"
                className="bg-red-500"
                disableElevation
                type="button"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outlined"
                color="error"
                type="button"
                onClick={
                  activeStep === 1
                    ? handleClose
                    : activeStep < 3
                    ? handlePrevious
                    : activeQuestion < 4
                    ? handlePreviousQuestion
                    : handlePrevious
                }
              >
                {activeStep === 1 ? "Create Manually" : "Go Back"}
              </Button>
              <Button
                variant="contained"
                color="error"
                className="bg-red-500"
                disableElevation
                type={activeStep === 4 ? "submit" : "button"}
                onClick={
                  activeStep < 3
                    ? handleNext
                    : activeQuestion < 4
                    ? handleNextQuestion
                    : activeStep === 4
                    ? handleClose
                    : handleDataCreation
                }
              >
                {activeStep === 4 ? "Finish" : "Next"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default AIAssistantModal;
