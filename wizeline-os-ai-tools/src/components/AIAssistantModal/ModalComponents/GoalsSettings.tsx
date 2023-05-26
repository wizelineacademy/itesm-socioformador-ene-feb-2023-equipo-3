// import { FC, useState } from 'react'
// import ToggleButtons from '@/components/ui/ToggleButtons';

// interface GoalsSettingsProps {
  
// }

// const GoalsSettings: FC<GoalsSettingsProps> = ({}) => {
//     const [goals, setGoals] = useState({
//         audience: "",
//         objective: "",
//         tone: "",
//     })

//     const goalsNames = ["Audience", "Objective", "Tone"];
    
//     const [audience, setAudience] = useState<string | null>("General");
//     const audienceList = ["General", "Knowledgeable", "Expert"];

//     const [objective, setObjective] = useState<string | null>("Persuade");
//     const objectiveList = ["Inform", "Persuade", "Enterntain"];

//     const [tone, setTone] = useState<string | null>("Informative");
//     const toneList = ["Formal", "Casual", "Informative", "Persuasive"];

//     const handleAudienceSelect = ( event: React.MouseEvent<HTMLElement>, audienceSelect: string | null) => {
//         setAudience(audienceSelect);
//         console.log(audienceSelect);
//     };
//     const handleObjectiveSelect = ( event: React.MouseEvent<HTMLElement>, objectiveSelect: string | null) => {
//         setObjective(objectiveSelect);
//         console.log(objectiveSelect);
//     };
//     const handleToneSelect = ( event: React.MouseEvent<HTMLElement>, toneSelect: string | null) => {
//         setTone(toneSelect);
//         console.log(toneSelect);
//     };

//   return (
//     <div className='flex flex-col gap-4'>
//         <ToggleButtons option={audience} goalName={goalsNames[0]} optionsList={audienceList} setOption={handleAudienceSelect}></ToggleButtons>
//         <ToggleButtons option={objective} goalName={goalsNames[1]} optionsList={objectiveList} setOption={handleObjectiveSelect}></ToggleButtons>
//         <ToggleButtons option={tone} goalName={goalsNames[2]} optionsList={toneList} setOption={handleToneSelect}></ToggleButtons>
//     </div>
//     // <>
//     //     {/* {goalsNames.map((name:any, index:number) => (
//     //         <ToggleButtons option={audience} goalName={name} optionsList={audienceList} setOption={handleAlignment}></ToggleButtons>
//     //     ))} */}
        
//     // </>
//   )
// }

// export default GoalsSettings

import { FC, useState } from 'react';
import ToggleButtons from '@/components/ui/ToggleButtons';
import Divider from '@mui/material/Divider';

interface GoalsSettingsProps {}

interface Goals {
  [key: string]: string;
  audience: string;
  objective: string;
  tone: string;
}

const GoalsSettings: FC<GoalsSettingsProps> = () => {
  const [goals, setGoals] = useState<Goals>({
    audience: "General",
    objective: "Persuade",
    tone: "Informative",
  });

  const goalsNames = ["audience", "objective", "tone"];
  const audienceList = ["General", "Knowledgeable", "Expert"];
  const objectiveList = ["Inform", "Persuade", "Entertain"];
  const toneList = ["Formal", "Casual", "Informative", "Persuasive"];

  const optionsList = [audienceList, objectiveList, toneList]

  const handleOptionSelect = (optionName: keyof Goals, optionSelect: string | null) => {
    setGoals((prevGoals) => ({
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
                <div className='flex flex-col'>
                    <ToggleButtons
                        key={index}
                        option={goals[name]}
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
