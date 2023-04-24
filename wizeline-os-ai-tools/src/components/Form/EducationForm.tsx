import { Input } from "../ui/Input";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";

type Props = {
  formikProps: {
    values: {
      schoolName: string;
      degree: string;
      specialization1: string;
      specialization2: string;
    };
  };
};

const EducationForm = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className={cn(headingVariants({ size: "default" }))}>
        {" "}
        Education{" "}
      </Heading>
      <Input
        type="text"
        title="School Name *"
        name="schoolName"
        value={values.schoolName}
        onChange={handleChange}
        className={` ${
          errors.schoolName && touched.schoolName
            ? "border-2 border-rose-600"
            : ""
        }`}
      />
      {errors.schoolName && touched.schoolName && (
        <p className="text-sm text-pink-600">{errors.schoolName}</p>
      )}
      <Input
        type="text"
        title="Degree"
        name="degree"
        value={values.degree}
        onChange={handleChange}
        className={` ${
          errors.degree && touched.degree ? "border-2 border-rose-600" : ""
        }`}
      />
      {errors.degree && touched.degree && (
        <p className="text-sm text-pink-600">{errors.degree}</p>
      )}
      <div className="grid grid-cols-2 gap-4">
		<div>
			<Input
			type="text"
			title="Specialization"
			name="specialization1"
			value={values.specialization1}
			onChange={handleChange}
			/>
		</div>
        <div>
		<Input
			type="text"
			title="Specialization"
			name="specialization2"
			value={values.specialization2}
			onChange={handleChange}
			/>
		</div>
      </div>
    </div>
  );
};

export default EducationForm;
