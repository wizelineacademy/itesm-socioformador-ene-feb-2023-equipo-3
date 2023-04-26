import { Input } from "../ui/Input";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";

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

const PastWorkForm = ({ handleChange, values, errors, touched }) => {
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
        value={values.pastWtitle}
        onChange={handleChange}
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
            name="startDate"
            value={values.startDate}
            onChange={handleChange}
            className={` ${
              errors.startDate && touched.startDate
                ? "border-2 border-rose-600"
                : ""
            }`}
          />
          {errors.startDate && touched.startDate && (
            <p className="text-sm text-pink-600">{errors.startDate}</p>
          )}
        </div>
        <div>
          <Input
            type="text"
            title="End Date"
            name="endDate"
            value={values.endDate}
            onChange={handleChange}
            className={` ${
              errors.endDate && touched.endDate
                ? "border-2 border-rose-600"
                : ""
            }`}
          />
          {errors.endDate && touched.endDate && (
            <p className="text-sm text-pink-600">{errors.endDate}</p>
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
          value={values.pastWDescription}
          onChange={handleChange}
          className='resize-none w-full'
          rows={5}
        />
		<p className="text-right text-gray-400">
          {values.pastWDescription.length}/500
        </p>
		</div>
      </div>
    </div>
  );
};

export default PastWorkForm;
