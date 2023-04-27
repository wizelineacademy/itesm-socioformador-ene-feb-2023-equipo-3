import { Formik, Form } from "formik";
import * as Yup from "yup";
import EducationForm from "../Form/EducationForm";
import ContactForm from "./ContactForm";
import PastWorkForm from "./PastWorkForm";
import SkillsForm from "./SkillsForm";
import AboutForm from "./AboutForm";
import { Input } from "../ui/Input";
import { Button, buttonVariants } from "../ui/Button";
import { Heading } from "../ui/Heading";
import AIAssitant from "../AIAssistant";
import { useState } from "react";

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
  const [aboutText, setAboutText] = useState<string>("");

  return (
    <Formik
      initialValues={{
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
      }}
      validationSchema={validationSchema}
      
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched, setFieldValue }) => (
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
                <Button
                  className={buttonVariants({
                    variant: "linkedin",
                    size: "logIn",
                  })}
                >
                  <p className="">Create with Linkedin</p>
                </Button>
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
  );
};

export default FormComponent;
