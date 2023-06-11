import { FC } from 'react';
import ToggleButtons from '@/components/ui/ToggleButtons';
import Divider from '@mui/material/Divider';

interface GoalsSettingsProps {
  questions: any;
  setQuestions:any;
}

interface Goals {
  [key: string]: string;
  audience: string;
  objective: string;
  tone: string;
}

const GoalsSettings: FC<GoalsSettingsProps> = ({questions, setQuestions}) => {

  const goalsNames = ["audience", "objective", "tone"];
  const audienceList = ["General", "Knowledgeable", "Expert"];
  const objectiveList = ["Inform", "Persuade", "Entertain"];
  const toneList = ["Formal", "Casual", "Informative", "Persuasive"];

  const optionsList = [audienceList, objectiveList, toneList]

  const handleOptionSelect = (optionName: keyof Goals, optionSelect: string | null) => {
    setQuestions((prevGoals:any) => ({
      ...prevGoals,
      [optionName]: optionSelect || "",
    }));
    console.log(optionSelect);
  };

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-2'>
            <p className='font-semibold'>Time to set some goals!</p>
            <p className='font-light'>In order to help you, we need to define the goals of your description. </p>
        </div>
        <div className='my-8'>
            {goalsNames.map((name, index) => (
                <div className='flex flex-col' key={index}>
                    <ToggleButtons
                        key={index}
                        option={questions[name]}
                        goalName={name.charAt(0).toUpperCase() + name.slice(1)}
                        optionsList={optionsList[index]}
                        setOption={(event:any, option:any) => handleOptionSelect(name as keyof Goals, option)}
                    />
                    {index === goalsNames.length - 1 ? ('') : (<Divider className='my-4'/>)}
                </div>
            ))}
            
        </div>
        <div className='flex flex-col'>
            <p className='font-light'>The next step will be to answer some questions about your experience in order to create your costum description!</p>
        </div>
    </div>
  );
};

export default GoalsSettings;
