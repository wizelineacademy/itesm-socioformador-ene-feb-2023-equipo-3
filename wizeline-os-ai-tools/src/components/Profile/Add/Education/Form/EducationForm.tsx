import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { Heading, headingVariants } from "@/components/ui/Heading";
import { cn } from "@/utils/utils";
import Label from "@/components/ui/Label";

const EducationForm = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label title="School Name"></Label>
        <Controller
          control={control}
          name="schoolName"
          rules={{ required: "This field is required." }}
          render={({ field }) => (
            <TextField
              id="schoolName"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(errors?.schoolName)}
              helperText={errors.schoolName?.message?.toString() || ""}
            />
          )}
        />
      </div>
      <div>
        <Label title="Degree"></Label>
        <Controller
          control={control}
          name="degree"
          rules={{ required: "This field is required." }}
          render={({ field }) => (
            <TextField
              id="degree"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(errors?.degree)}
              helperText={errors.degree?.message?.toString() || ""}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label title="Specialization"></Label>
          <Controller
            control={control}
            name="specialization1"
            render={({ field }) => (
              <TextField
                id="specialization1"
                variant="outlined"
                fullWidth
                {...field}
              />
            )}
          />
        </div>
        <div>
          <Label title="Specialization"></Label>
          <Controller
            control={control}
            name="specialization2"
            render={({ field }) => (
              <TextField
                id="specialization2"
                variant="outlined"
                fullWidth
                {...field}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
