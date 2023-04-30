import { styled } from '@mui/material/styles';
import * as React from 'react';
import Tab from '@mui/base/Tab';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tabs from '@mui/base/Tabs';
import Box from '@mui/material/Box'
import SearchBar from "@/components/SearchBar";
import ColabTable from "@/components/ColabTable";

const AntTabs = styled(Tabs)({
    marginLeft: '16px',
    marginRight: '16px',
    '& .MuiTabs-indicator': {
      backgroundColor: 'bg-slate-300',
    },
  });

  const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      minWidth: 0,
      [theme.breakpoints.up('sm')]: {
        minWidth: 0,
      },
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      paddingRight: '16px',
      paddingLeft: '16px',
      paddingTop: '4px',
      paddingBottom: '4px',
      borderRadius: '2px',
      borderTop: '1px solid #e5e7eb',
      borderLeft: '1px solid #e5e7eb',
      borderRight: '1px solid #e5e7eb',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&.Mui-selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
        backgroundColor: 'white',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
      },
    }),
  );


  interface StyledTabProps {
    label: string;
  }


export default function ViewTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

  return (
    <Box sx={{width: '100%', backgroundColor: '#e5e7eb' } }>
        <AntTabs defaultValue={0} onChange={handleChange}>
        <TabsList>
            <AntTab value={0}>Colaborators</AntTab>
            <AntTab value={2}>Projects</AntTab>
        </TabsList>
            <TabPanel value={0}></TabPanel>
            <TabPanel value={2}></TabPanel>

        </AntTabs>
        {value === 0 && (
                <div className="p-2 flex columns-2 bg-white ">
                <div className="p-2 w-1/3">
                  <img
                    className="p-2 m-2 "
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg?w=640"
                  ></img>
                </div>
                <div className=" mx-8 mb-4 flex w-2/3 columns-1 flex-col ">
                  <SearchBar></SearchBar>
                  <ColabTable></ColabTable>
                </div>
              </div>
        )}
    </Box>

  );
}
