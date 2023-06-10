import { FC } from 'react'
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface ToggleButtonsProps {
    option: any,
    goalName: any,
    optionsList: any,
    setOption: any,
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d50000',
    },
    secondary: {
      main: '#b71c1c',
    },
  },
});

const ToggleButtons: FC<ToggleButtonsProps> = ({option, goalName, optionsList, setOption}) => {

    return (
        <div className='flex gap-8 align-middle'>
            <div className='my-auto w-20'>
                <p className='font-medium'>{goalName}</p>
            </div>
            <ThemeProvider theme={theme}>
                <ToggleButtonGroup value={option} exclusive onChange={setOption} className='bg-red-100'>
                    {optionsList.map((nameOption:any, index:number) => (
                        <ToggleButton key={index} value={nameOption} color='primary' className='text-red-500'>
                            {nameOption}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </ThemeProvider>
        </div>
    )
}

export default ToggleButtons