import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Heading, headingVariants } from "../../../../ui/Heading";
import { cn } from "@/utils/utils";
import { useEffect } from "react";

const AboutForm = ({ props }: any) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  useEffect(() => {
    setValue("aboutDescription", props.description);
  }, [props.description, setValue]);

  const aboutDescription = watch("aboutDescription");
  const characterLimit = 800;
  const isExceededLimit =
    aboutDescription && aboutDescription.length > characterLimit;

  return (
    <div className="flex flex-col gap-4">
      <Heading className={cn(headingVariants({ size: "default" }))}>
        {" "}
        About{" "}
      </Heading>

      <div
        className={` ${
          errors.aboutDescription || isExceededLimit
            ? "block w-full rounded border border-rose-400 p-3.5 text-sm text-gray-900 focus:border-rose-400 focus:ring-rose-400"
            : "block w-full rounded border border-gray-300 p-3.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        }`}
      >
        <Controller
          control={control}
          name="aboutDescription"
          rules={{ required: "This field is required." }}
          render={({ field }) => (
            <textarea
              rows={8}
              id="aboutDescription"
              className="w-full resize-none"
              {...field}
            />
          )}
        />
        <p
          className={` ${
            errors.aboutDescription || isExceededLimit
              ? "text-right text-rose-600"
              : "text-right text-gray-400"
          }`}
        >
          {watch("aboutDescription") ? watch("aboutDescription").length : "0"}/
          {characterLimit}
        </p>
      </div>
    </div>
  );
};

export default AboutForm;
