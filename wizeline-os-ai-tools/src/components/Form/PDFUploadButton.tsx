import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Input } from "../ui/Input";
import { makeStyles } from "@material-ui/core/styles";
import { FormValues } from "@/components/Form/FormComponent";

const useStyles = makeStyles({
  root: {
    background: "#0077B5",
    color: "#ffffff",
    "&:hover": {
      background: "#333333",
    },
  },
});

type PDFUploadButtonProps = {
  onPDFClick: (datafromPDF: FormValues) => void;
};

const PDFUploadButton: React.FC<PDFUploadButtonProps> = ({ onPDFClick }) => {
  const [pdf, setPDF] = useState<File | null>(null); // File uploaded
  const [response, setResponse] = useState(null); // CV data response
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  let ExtractedCVData: FormValues;
  const classes = useStyles();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setPDF(selectedFile || null);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      console.log(pdf);
      if (pdf) {
        formData.append("file", pdf);
        const res = await axios.post(
          "http://127.0.0.1:5000/generate-json",
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        );
        setResponse(res.data);
        console.log(res.data);
        const profileInfo = res.data;
        ExtractedCVData = profileInfo;
        console.log("CV fetch: ", ExtractedCVData);
        // PDFData to FormPDFProfileData
        const profileData: FormValues = {
          aiAsistant: "",
          aboutDescription: ExtractedCVData.aboutDescription,
          fullName: ExtractedCVData.fullName,
          title: ExtractedCVData.title,
          country: ExtractedCVData.country,
          state: ExtractedCVData.state,
          city: ExtractedCVData.city,
          phoneNumber: ExtractedCVData.phoneNumber,
          avatarURL: "",
          schoolName: ExtractedCVData.schoolName,
          degree: ExtractedCVData.degree,
          specialization1: ExtractedCVData.specialization1,
          specialization2: ExtractedCVData.specialization2,
          pastWtitle: ExtractedCVData.pastWtitle,
          pastWStartDate: "",
          pastWEndDate: "",
          pastWDescription: ExtractedCVData.pastWDescription,
          expertSkills: [],
          advancedSkills: [],
          intermediateSkills: [],
          basicSkills: [],
        };

        console.log("PDF Data Extracted: ", profileData);

        onPDFClick(profileData);
      }
    } catch (error) {
      console.log("Error al obtener los datos del perfil:", error);
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
    <div className="flex items-center">
      <Input title="CV File" type="file" onChange={handleFileChange} />
      <Button
        variant="contained"
        className={classes.root}
        style={{ textTransform: "none", borderRadius: "50px" }}
        type="button"
        onClick={handleFileUpload}
        disabled={!isFileUploaded}
      >
        Upload CV
      </Button>
    </div>
  );
};

export default PDFUploadButton;
