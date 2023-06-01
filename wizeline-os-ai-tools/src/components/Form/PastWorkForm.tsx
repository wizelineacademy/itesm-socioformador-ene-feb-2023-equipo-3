import { Input } from "../ui/Input";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";
import { FormProfileData } from "./LinkedInLoginButton";

type Props = {
  formikProps: {
    values: {
      pastWTitle: string;
      startDate: string;
      endDate: string;
      pastWDescription: string;
    };
  };
};

type PastWorkFormProps = {
  handleChange: any;
  handleTextChange: (field: keyof FormProfileData, value: string) => void;
  values: Partial<FormProfileData>;
  errors: any;
  touched: any;
};

const PastWorkForm: React.FC<PastWorkFormProps> = ({ handleChange, handleTextChange, values, errors, touched }) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className={cn(headingVariants({ size: "default" }))}>
        {" "}
        Past Work{" "}
      </Heading>
      <Input
        type="text"
        title="Title *"
        name="pastWtitle"
        value={values.pastWTitle || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleTextChange("pastWTitle", e.target.value)}
        className={` ${
          errors.pastWtitle && touched.pastWtitle
            ? "border-2 border-rose-600"
            : ""
        }`}
      />
      {errors.pastWtitle && touched.pastWtitle && (
        <p className="text-sm text-pink-600">{errors.pastWtitle}</p>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            title="Start Date"
            name="pastWStart"
            value={values.pastWStart || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleTextChange("pastWStart", e.target.value)}
            className={` ${
              errors.pastWStart && touched.pastWStart
                ? "border-2 border-rose-600"
                : ""
            }`}
          />
          {errors.pastWStart && touched.pastWStart && (
            <p className="text-sm text-pink-600">{errors.pastWStart}</p>
          )}
        </div>
        <div>
          <Input
            type="text"
            title="End Date"
            name="pastWEnd"
            value={values.pastWEnd}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleTextChange("pastWEnd", e.target.value)}
            className={` ${
              errors.pastWEnd && touched.pastWEnd
                ? "border-2 border-rose-600"
                : ""
            }`}
          />
          {errors.pastWEnd && touched.pastWEnd && (
            <p className="text-sm text-pink-600">{errors.pastWEnd}</p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor=""
          className="text-md mb-1 block font-medium text-gray-900"
        >
        Description
        </label>
		<div className='border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5'>
		<textarea
          name="pastWDescription"
          placeholder="Description..."
          value={values.pastWDescription || ""}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleTextChange("pastWDescription", e.target.value)}
          className='resize-none w-full'
          rows={5}
        />
		<p className="text-right text-gray-400">
          {values.pastWDescription?.length}/500
        </p>
		</div>
      </div>
    </div>
  );
};

export default PastWorkForm;
