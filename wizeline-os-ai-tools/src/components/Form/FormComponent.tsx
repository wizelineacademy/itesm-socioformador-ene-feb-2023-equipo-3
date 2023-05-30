import { Formik, Form } from "formik";
import * as Yup from "yup";
import EducationForm from "../Form/EducationForm";
import ContactForm from "./ContactForm";
import PastWorkForm from "./PastWorkForm";
import SkillsForm from "./SkillsForm";
import AboutForm from "./AboutForm";
import { Input } from "../ui/Input";
import { Heading } from "../ui/Heading";
import AIAssitant from "../AIAssistant";
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { Button, Avatar } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

//------- LinkedInLoginButton component
const useStyles = makeStyles({
  root: {
    background: '#0077B5',
    color: '#ffffff',
    '&:hover': {
      background: '#333333',
    },
  },
});

interface FormProfileData {
  aboutDescription:   string  | undefined,
  fullName:           string,
  title:              string  | undefined,
  country:            string  | undefined,
  state:              string  | undefined,
  city:               string  | undefined,
  phoneNumber:        number  | undefined,
  avatarURL:          string  | undefined,
  schoolName:         string  | undefined,
  degree:             string  | undefined,
  specialization1:    string  | undefined, 
  specialization2:    string  | undefined,
  pastWDescription:   string  | undefined,
}

interface DescriptionLinkedIn {
  description1:       string,
  description1_link:  string,
  description2:       string,
  description2_link:  string,
}

interface EducationLinkedIn {
  college_degree:       string,
  college_degree_field: string,
  college_duration:     string,
  college_name:         string,
  college_url:          string,

}

interface CertificationLinkedIn {
  certificacion:  string,
  company_image:  string,
  company_name:   string,
  company_url:    string,
  credential_id:  string,
  issue_date:     string,
}

interface ExperienceLinkedIn {
  company_name: string,
  company_url:  string,
  duration:     string,
  ends_at:      string,
  location:     string,
  position:     string,
  starts_at:    string,
  summary:      string,
}

interface LinkedInData {
  about: string,
  activities: string[],
  articles: string[],
  awards: string[],
  background_cover_image_url: string,
  card_subtitle: string,
  card_title: string,
  certification: CertificationLinkedIn[],
  connections: string,
  courses: string[],
  description: DescriptionLinkedIn,
  education: EducationLinkedIn[],
  experience: ExperienceLinkedIn[],
  first_name: string,
  followers: string,
  fullName: string,
  headline: string,
  languages: string[],
  last_name: string,
  location: string,
  organizations: string[],
  people_also_viewed: string[],
  profile_photo: string,
  projects: string[],
  public_identifier: string,
  publications: string[],
  recommendations: string[],
  score: string[],
  similar_profiles: string[],
  volunteering: string[]
}

type LinkedInLoginButtonProps = {
  text: string;
  updateFormValues: (data: FormProfileData) => void;
};


const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ text }) => {
  const apiKey ="646fbe4ff645827fb0da75b3";
  const classes = useStyles();

  const { updateFormValues } = useContext(FormContext);
  let linkedInProfile: LinkedInData;

  const fetchProfileData = async () => {
  try {
    const resp = await axios.get(`https://api.scrapingdog.com/linkedin?api_key=${apiKey}&type=profile&linkId=silvanatorresferrera-11a162208`)
    const profileInfo = resp.data[0]
    linkedInProfile = profileInfo;
    console.log("LinkedIn fetch: ", linkedInProfile);
    const locationLinkedIn = linkedInProfile.location.split(", ");
    // LinkedInData to FormProfileData
    const profileData: FormProfileData = {
      aboutDescription  : linkedInProfile.about,
      fullName          : linkedInProfile.fullName,
      title             : linkedInProfile.headline,
      country           : locationLinkedIn[2],
      state             : locationLinkedIn[1],
      city              : locationLinkedIn[0],
      phoneNumber       : 0,
      avatarURL         : linkedInProfile.profile_photo,
      schoolName        : linkedInProfile.education[0]?.college_name,
      degree            : linkedInProfile.education[0]?.college_degree.concat(" in ", linkedInProfile.education[0]?.college_degree_field),
      specialization1   : linkedInProfile.certification[0]?.certificacion,
      specialization2   : linkedInProfile.certification[1]?.certificacion,
      pastWDescription  : linkedInProfile.experience[0]?.position.concat(" at ", linkedInProfile.experience[0].company_name),
    }

    console.log("Ordered data: ", profileData);
    updateFormValues(profileData);
  } catch (error) {
    console.log('Error al obtener los datos del perfil:', error);
  }
};

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
        onClick = {fetchProfileData}>
        {text}
      </Button>
    </div>
  );
};

const FormContext = createContext<{
  formValues: FormProfileData;
  updateFormValues: (data: FormProfileData) => void;
}>({
  formValues: {
    aboutDescription: "",
    fullName: "",
    title: "",
    country: "",
    state: "",
    city: "",
    phoneNumber: undefined,
    avatarURL: "",
    schoolName: "",
    degree: "",
    specialization1: "",
    specialization2: "",
    pastWDescription: "",
  },
  updateFormValues: () => {},
});

// ------- Form Component

const validationSchema = Yup.object().shape({
  aboutDescription: Yup.string().required("Description is required").max(500),
  fullName: Yup.string().required("Full Name is required"),
  title: Yup.string().required("Title is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  phoneNumber: Yup.number().required("Phone is required"),
  avatarURL: Yup.string().required("Avatar URL is required"),
  schoolName: Yup.string().required("School Name is required"),
  degree: Yup.string().required("Degree is required"),
});


interface FormProfileData {
  aboutDescription:   string  | undefined,
  fullName:           string,
  title:              string  | undefined,
  country:            string  | undefined,
  state:              string  | undefined,
  city:               string  | undefined,
  phoneNumber:        number  | undefined,
  avatarURL:          string  | undefined,
  schoolName:         string  | undefined,
  degree:             string  | undefined,
  specialization1:    string  | undefined, 
  specialization2:    string  | undefined,
  pastWDescription:   string  | undefined,
}

const FormComponent: React.FC = () => {

  const initialFormData: FormProfileData = {
    aboutDescription: "",
    fullName: "",
    title: "",
    country: "",
    state: "",
    city: "",
    phoneNumber: 0,
    avatarURL: "",
    schoolName: "",
    degree: "",
    specialization1: "",
    specialization2: "",
    pastWDescription: "",
  }
  
  const [formValues, setFormValues] = useState<FormProfileData>({
    aboutDescription: "",
    fullName: "",
    title: "",
    country: "",
    state: "",
    city: "",
    phoneNumber: undefined,
    avatarURL: "",
    schoolName: "",
    degree: "",
    specialization1: "",
    specialization2: "",
    pastWDescription: "",
  });

  const updateFormValues = (data: FormProfileData) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ...data,
    }));
  };

  return (
    <FormContext.Provider value={{formValues, updateFormValues}}>
      <Formik
        initialValues={{
          aboutDescription: formValues.aboutDescription,
          fullName: formValues.fullName,
          title: formValues.title,
          country: formValues.country,
          state: formValues.country,
          city: formValues.city,
          phoneNumber: formValues.phoneNumber,
          avatarURL: formValues.avatarURL,
          schoolName: formValues.schoolName,
          degree: formValues.degree,
          specialization1: formValues.specialization1,
          specialization2: formValues.specialization2,
          pastWDescription: formValues.pastWDescription,
        }}
        validationSchema={validationSchema}
        
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form className="container mx-auto">
            <div className="grid grid-cols-9">
              <div className="-bg-orange-500 col-span-6 m-8 flex flex-col gap-8">
                <Heading>Hello, name!</Heading>
                <p className="text-base font-light text-gray-400">
                  Fill out the following information to create your profile. If
                  you changed your mind and want to create you profile with
                  Linkedin, make sure to hit the button and start with the
                  process.
                </p>
                <div className="w-52">
                  <LinkedInLoginButton text = "Get From LinkedIn" updateFormValues={updateFormValues}/>  
                </div>

                <AboutForm
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                ></AboutForm>

                <ContactForm
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                ></ContactForm>

                <PastWorkForm
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                ></PastWorkForm>

                <EducationForm
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                ></EducationForm>

                <SkillsForm></SkillsForm>

                <div className="grid justify-items-end">
                  <div className="w-52">
                    <Input type="submit" value="Submit"></Input>
                  </div>
                </div>
              </div>
              <div className="col-span-3 bg-gray-200 pl-7 pr-5 pt-64">
                <AIAssitant
                  aboutText={values.aboutDescription}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </FormContext.Provider>
  );
};

export default FormComponent;
