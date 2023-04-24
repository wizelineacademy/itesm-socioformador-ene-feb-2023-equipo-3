
import { Field } from "formik";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";
import Multiselect from "../ui/Multiselect";
import { stateOptions } from "@/utils/skillsData";


const SkillsForm = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className={cn(headingVariants({ size: "default" }))}>
        {" "}
        Skills{" "}
      </Heading>
      <Field
        name="expertSkills"
        placeholder="Select..."
        isMulti={true}
        component={Multiselect}
        title='Expert'
        options={stateOptions}
      />
      <Field
        name="advancedSkills"
        placeholder="Select..."
        isMulti={true}
        component={Multiselect}
        title='Advanced'
        options={stateOptions}
      />
      <Field
        name="intermediateSkills"
        placeholder="Select..."
        isMulti={true}
        component={Multiselect}
        title='Intermediate'
        options={stateOptions}
      />
      <Field
        name="noviceSkills"
        placeholder="Select..."
        isMulti={true}
        component={Multiselect}
        title='Novice'
        options={stateOptions}
      />
    </div>
  );
};

export default SkillsForm;
