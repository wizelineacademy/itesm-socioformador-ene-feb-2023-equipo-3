import { Formik, Form } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from 'react';
import EducationForm from "../Form/EducationForm";
import ContactForm from "./ContactForm";
import PastWorkForm from "./PastWorkForm";
import SkillsForm from "./SkillsForm";
import AboutForm from "./AboutForm";
import { Input } from "../ui/Input";
import { Heading } from "../ui/Heading";
import AIAssitant from "../AIAssistant";
import { FormProfileData } from "./LinkedInLoginButton";
import LinkedInLoginButton from "./LinkedInLoginButton";

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

const FormComponent = () => {
  
  const [textValues, setTextValues] = useState<Partial<FormProfileData>>({});

  const handleTextChange = (field: keyof FormProfileData, value: string) => {
    console.log("Changing: ", field, " for ", value);
    setTextValues((prevTextValues) => ({
      ...prevTextValues,
      [field]: value,
    }));
    console.log(textValues);
  };

  const handleButtonClick = () => {
    console.log("CLICK");
    handleTextChange('aboutDescription', 'Some text...');
    handleTextChange('title', 'Software Engineer');
    handleTextChange('country', 'Mexico');
    handleTextChange('state', 'Hidalgo');
    handleTextChange('city', 'Pachuca');
    handleTextChange('phoneNumber', '7751322087');
    handleTextChange('avatarURL', 'some url...');
    handleTextChange('schoolName', 'ITESM');
    handleTextChange('degree', 'Software Engineer');
    handleTextChange('specialization1', 'Cybersecurity');
    handleTextChange('specialization2', 'Videogames');
    handleTextChange('pastWTitle', 'Some text');
    // Agrega más llamadas a handleTextChange para otros campos
  };

  const handleLinkedInAutoFill = (dataFromLinkedIn: FormProfileData) => {
    console.log("updating...")
    handleTextChange('aboutDescription', dataFromLinkedIn.aboutDescription || "");
    handleTextChange('fullName', dataFromLinkedIn.fullName || "");
    handleTextChange('title', dataFromLinkedIn.title || "");
    handleTextChange('country', dataFromLinkedIn.country || "");
    handleTextChange('state', dataFromLinkedIn.state || "");
    handleTextChange('city', dataFromLinkedIn.city || "");
    handleTextChange('phoneNumber', dataFromLinkedIn.phoneNumber || "");
    handleTextChange('avatarURL', dataFromLinkedIn.avatarURL || "");
    handleTextChange('schoolName', dataFromLinkedIn.schoolName || "");
    handleTextChange('degree', dataFromLinkedIn.degree || "");
    handleTextChange('specialization1', dataFromLinkedIn.specialization1 || "");
    handleTextChange('specialization2', dataFromLinkedIn.specialization2 || "");
    handleTextChange('pastWTitle', dataFromLinkedIn.pastWTitle || "");
    handleTextChange('pastWStart', dataFromLinkedIn.pastWStart || "");
    handleTextChange('pastWEnd', dataFromLinkedIn.pastWEnd || "");
    handleTextChange('pastWDescription', dataFromLinkedIn.pastWDescription || "");
  };

  return (
    <Formik
      initialValues={{
        aboutDescription: textValues.aboutDescription || "",
        fullName: textValues.fullName || "",
        title: textValues.title || "",
        country: textValues.country || "",
        state: textValues.state || "",
        city: textValues.city || "",
        phoneNumber: textValues.phoneNumber || 0,
        avatarURL: textValues.avatarURL || "",
        schoolName: textValues.schoolName || "",
        degree: textValues.degree || "",
        specialization1: textValues.specialization1 || "",
        specialization2: textValues.specialization2 || "",
        pastWTitle: textValues.pastWTitle || "",
        pastWStart: textValues.pastWStart || "",
        pastWEnd: textValues.pastWEnd || "",
        pastWDescription: textValues.pastWDescription || "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({handleSubmit, handleChange, values, errors, touched }) => (
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
                <LinkedInLoginButton text = "Get From LinkedIn" onLinkedInClick={handleLinkedInAutoFill}/>  
              </div>

              <AboutForm
                handleChange={handleChange}
                handleTextChange={handleTextChange}
                values={textValues}
                errors={errors}
                touched={touched}
              ></AboutForm>

              <ContactForm
                handleChange={handleChange}
                handleTextChange={handleTextChange}
                values={textValues}
                errors={errors}
                touched={touched}
              ></ContactForm>

              <PastWorkForm
                handleChange={handleChange}
                handleTextChange={handleTextChange}
                values={textValues}
                errors={errors}
                touched={touched}
              ></PastWorkForm>

              <EducationForm
                handleChange={handleChange}
                handleTextChange={handleTextChange}
                values={textValues}
                errors={errors}
                touched={touched}
              ></EducationForm>

              <button type="button" onClick={handleButtonClick}>
                Change Text Values
              </button>

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
  );
};

export default FormComponent;
