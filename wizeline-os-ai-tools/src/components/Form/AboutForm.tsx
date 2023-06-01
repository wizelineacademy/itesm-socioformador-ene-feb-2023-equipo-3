import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";
import { FormProfileData } from "./LinkedInLoginButton";

type AboutFormProps = {
  handleChange: any;
  handleTextChange: (field: keyof FormProfileData, value: string) => void;
  values: Partial<FormProfileData>;
  errors: any;
  touched: any;
};

const AboutForm: React.FC<AboutFormProps> = ({handleChange, handleTextChange, values, errors, touched }): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className={cn(headingVariants({ size: "default" }))}>
        {" "}
        About{" "}
      </Heading>

      <div
        className={` ${
          errors.aboutDescription && touched.aboutDescription
            ? "block w-full rounded border-2 border-rose-600 p-3.5 text-sm text-gray-900 focus:border-rose-600 focus:ring-rose-600"
            : "block w-full rounded border border-gray-300 p-3.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        }`}
      >
      <textarea
        name="aboutDescription"
        placeholder="Description..."
        value={values.aboutDescription || ""}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleTextChange("aboutDescription", e.target.value)}
        className="w-full resize-none"
        id=""
        rows={5}
      />
        <p className= {` ${
          errors.aboutDescription && touched.aboutDescription
            ? "text-right text-rose-600"
            : "text-right text-gray-400"
        }`}>
          {values.aboutDescription?.length}/800
        </p>
      </div>
      {errors.aboutDescription && touched.aboutDescription && (
        <p className="text-sm text-pink-600">{errors.aboutDescription}</p>
      )}
    </div>
  );
};

export default AboutForm;
