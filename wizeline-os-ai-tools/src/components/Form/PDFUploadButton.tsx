import React, { createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Input } from '../ui/Input';

import { makeStyles } from '@material-ui/core/styles';

/* const useStyles = makeStyles({
  root: {
    background: '#0077B5',
    color: '#ffffff',
    '&:hover': {
      background: '#333333',
    },
  },
}); */

export interface FormPDFProfileData {
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

type PDFUploadButtonProps = {
  onPDFClick: (datafromPDF: FormPDFProfileData) => void; 
};

const PDFUploadButton: React.FC<PDFUploadButtonProps> = ({ onPDFClick }) => {
  const [pdf, setPDF] = useState<File | null>(null); // File uploaded
  const [response, setResponse] = useState(null);     // CV data response
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  
  let ExtractedCVData: PDFData;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setPDF(selectedFile || null);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      console.log(pdf)
      if (pdf) {
        formData.append('file', pdf);
        const res = await axios.post('http://127.0.0.1:5000/generate-json', formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        });
        setResponse(res.data);
        console.log(res.data);
        console.log(res.data[0]); 
        console.log(res.data.fullName);  
        const profileInfo = res.data;
        ExtractedCVData = profileInfo;
        console.log("CV fetch: ", ExtractedCVData);
        // PDFData to FormPDFProfileData
        const profileData: FormPDFProfileData = {
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

        console.log("PDF Data Extracted: ", profileData);

        onPDFClick(profileData);
      }
      
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
      <Input 
        type = "file"
        onChange={handleFileChange}
      />
      <Button
        type='button'
        onClick={handleFileUpload}
        className='button'
        disabled={!isFileUploaded}
      >
        Upload CV
      </Button>
    </div>
  );
};

export default PDFUploadButton;