
import { Field } from "formik";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";
import Multiselect from "../ui/Multiselect";
import { skillsOptions } from "@/utils/skillsData";


const SkillsForm = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className={cn(headingVariants({ size: "default" }))}>
        {" "}
        Skills{" "}
      </Heading>
      <Field
        id="expertSkills"
        name="expertSkills"
        placeholder="Select..."
        isMulti={true}
        component={Multiselect}
        title='Expert'
        options={skillsOptions}
      />
      <Field
        name="advancedSkills"
        placeholder="Select..."
        isMulti={true}
        component={Multiselect}
        title='Advanced'
        options={skillsOptions}
      />
      <Field
        name="intermediateSkills"
        placeholder="Select..."
        isMulti={true}
        component={Multiselect}
        title='Intermediate'
        options={skillsOptions}
      />
      <Field
        name="noviceSkills"
        placeholder="Select..."
        isMulti={true}
        component={Multiselect}
        title='Novice'
        options={skillsOptions}
      />
    </div>
  );
};

export default SkillsForm;
