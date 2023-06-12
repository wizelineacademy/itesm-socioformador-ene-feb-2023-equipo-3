import React, { createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

/* const useStyles = makeStyles({
  root: {
    background: '#0077B5',
    color: '#ffffff',
    '&:hover': {
      background: '#333333',
    },
  },
});
 */
export interface FormProfileData {
  aiAsistant:         any,
  aboutDescription:   string  | undefined,
  fullName:           string,
  title:              string  | undefined,
  country:            string  | undefined,
  state:              string  | undefined,
  city:               string  | undefined,
  phoneNumber:        string  | undefined,
  schoolName:         string  | undefined,
  degree:             string  | undefined,
  specialization1:    string  | undefined, 
  specialization2:    string  | undefined,
  pastWTitle:         string  | undefined,
  pastWStart:         string  | undefined,
  pastWEnd:           string  | undefined,
  pastWDescription:   string  | undefined,
}

interface PDFData {
  aboutDescription: string,
  fullName: string,
  title: string,
  country: string,
  state: string,
  city: string,
  phoneNumber: string,
  schoolName: string,
  degree: string,
  specialization1: string,
  specialization2: string,
  pastWTitle: string,
  pastWStart: string,
  pastWEnd: string,
  pastWDescription: string
}

type LinkedInLoginButtonProps = {
  /* 
  type='button'
  onClick={handleFileUpload}
  className='button'
  disabled={!isFileUploaded}
  */
  text: string;
  onLinkedInClick: (dataFromLinkedIn: FormProfileData) => void; 
  linkedInUsername: string;
  disabled: boolean;
};

const PDFUploadButton: React.FC<LinkedInLoginButtonProps> = ({ text, onLinkedInClick, linkedInUsername, disabled }) => {
  // PDF useStates
  const [pdf, setPDF] = useState<File | null>(null); // File uploaded
  const [response, setResponse] = useState(null);     // CV data response
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  
  const classes = useStyles();

  let ExtractedCVData: PDFData;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setPDF(selectedFile || null);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      console.log(pdf)
      formData.append('file', pdf);
      const res = await axios.post('http://127.0.0.1:5000/generate-json', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      setResponse(res.data);
      console.log(res.data);      
      const profileInfo = res.data[0]
      ExtractedCVData = profileInfo;
      console.log("CV fetch: ", ExtractedCVData);
      // LinkedInData to FormProfileData
      const profileData: FormProfileData = {
        aiAsistant        : "",
        aboutDescription  : ExtractedCVData.aboutDescription,
        fullName          : ExtractedCVData.fullName,
        title             : ExtractedCVData.title,
        country           : ExtractedCVData.country,
        state             : ExtractedCVData.state,
        city              : ExtractedCVData.city,
        phoneNumber       : ExtractedCVData.phoneNumber,
        schoolName        : ExtractedCVData.schoolName,
        degree            : ExtractedCVData.degree,
        specialization1   : ExtractedCVData.specialization1,
        specialization2   : ExtractedCVData.specialization2,
        pastWTitle        : ExtractedCVData.pastWTitle,
        pastWStart        : ExtractedCVData.pastWStart,
        pastWEnd          : ExtractedCVData.pastWEnd,
        pastWDescription  : ExtractedCVData.pastWDescription,

      }

      console.log("Ordered data: ", profileData);

      onLinkedInClick(profileData);
      
    } catch (error) {
      console.log('Error al obtener los datos del perfil:', error);
    }
  };

  useEffect(() => {
    if (pdf !== null) {
      setIsFileUploaded(true);
    } else {
      setIsFileUploaded(false);
    }
    console.log(response);
}, [pdf]);


  return (
    <div>
      <Button 
        variant = "contained" 
        className={classes.root}
        style={{ textTransform: 'none', borderRadius: '50px' }}
        endIcon=
          {<Avatar style={{ background: 'transparent' }}>
            <LinkedInIcon style={{ color: 'white', fontSize: 25 }} />
          </Avatar>} 
        onClick = {fetchProfileData}
        disabled={disabled}
        >
        {text}
      </Button>
    </div>
  );
};

export default PDFUploadButton;