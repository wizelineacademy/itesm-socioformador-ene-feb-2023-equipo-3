import { Formik, Form } from "formik";
import * as Yup from "yup";
import EducationForm from "../Form/EducationForm";
import ContactForm from "./ContactForm";
import PastWorkForm from "./PastWorkForm";
import SkillsForm from "./SkillsForm";
import AboutForm from "./AboutForm";

const validationSchema = Yup.object().shape({
  aboutDescription: Yup.string().required("Description is required").max(500),
  fullName: Yup.string().required("Full Name is required"),
  title: Yup.string().required("Title is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  phoneNumber: Yup.number().required("phoneNumber is required"),
  avatarURL: Yup.string().required("Avatar URL is required"),
  schoolName: Yup.string().required("School Name is required"),
  degree: Yup.string().required("Degree is required"),
});

const FormComponent = () => {
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
		pastWDescription:"",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form className="container mx-auto">
          <div className="grid grid-cols-9">
            <div className="-bg-orange-500 col-span-6 flex flex-col gap-8">
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

              <input type="submit" />
            </div>
			<div className="col-span-3 bg-pink-500"></div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;

//<div className="col-span-3 bg-pink-500"></div>
