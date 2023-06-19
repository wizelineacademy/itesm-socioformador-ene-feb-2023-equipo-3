import React, { FC, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@mui/material";
import Select from "react-select";
import { skillsOptions, SkillsOptions } from "@/utils/skillsData";
import { CustomDropdownIndicator } from "@/utils/CustomDropdownIndicator";
import BasicModal from "../ui/BasicModal";

interface FormValues {
  vacantName: string;
  vacantStartDate: string;
  vacantEndDate: string;
  vacantDescription: string;
  vacantSkills: SkillsOptions[];
}

const schema = yup.object().shape({
  vacantName: yup.string().required("Name is a required field"),
  vacantStartDate: yup.string().required("Start Date is a required field"),
  vacantEndDate: yup.string().required("End Date is a required field"),
  vacantDescription: yup.string().required("Description is a required field"),
});

interface NewVacantModalProps {
  open: boolean;
  handleClose: () => void;
  addNewVacant: any;
}

const defaultInputValues = {
  vacantName: "",
  vacantStartDate: "",
  vacantEndDate: "",
  vacantDescription: "",
  //vacantSkills: '',
};

const NewVacantModal: FC<NewVacantModalProps> = ({
  open,
  handleClose,
  addNewVacant,
}) => {
  const [values, setValues] = useState(defaultInputValues);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const addUser = (data: any) => {
    addNewVacant(data);
    console.log(data);
    handleClose();
  };

  const handleChange = (value: any) => {
    setValues(value);
  };

  useEffect(() => {
    if (open) setValues(defaultInputValues);
  }, [open]);

  const getContent = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor=""
          className="mb-1 block text-sm font-medium text-gray-900"
        >
          {" "}
          Name{" "}
        </label>
        <Controller
          name="vacantName"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              error={Boolean(errors?.vacantName?.message)}
              helperText={errors?.vacantName?.message}
              // value={values.vacantName}
              // onChange={(event) => handleChange({ ...values, vacantName: event.target.value })}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor=""
            className="mb-1 block text-sm font-medium text-gray-900"
          >
            {" "}
            Start Date{" "}
          </label>
          <Controller
            name="vacantStartDate"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                error={Boolean(errors?.vacantStartDate?.message)}
                helperText={errors?.vacantStartDate?.message}
                // value={values.vacantStartDate}
                // onChange={(event) => handleChange({ ...values, vacantStartDate: event.target.value })}
              />
            )}
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="mb-1 block text-sm font-medium text-gray-900"
          >
            {" "}
            End Date{" "}
          </label>
          <Controller
            name="vacantEndDate"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                error={Boolean(errors?.vacantEndDate?.message)}
                helperText={errors?.vacantEndDate?.message}
                // value={values.vacantEndDate}
                // onChange={(event) => handleChange({ ...values, vacantEndDate: event.target.value })}
              />
            )}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor=""
          className="mb-1 block text-sm font-medium text-gray-900"
        >
          {" "}
          Description{" "}
        </label>
        <Controller
          name="vacantDescription"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              multiline
              rows={5}
              {...field}
              error={Boolean(errors?.vacantDescription?.message)}
              helperText={errors?.vacantDescription?.message}
              // value={values.vacantDescription}
              // onChange={(event) => handleChange({ ...values, vacantDescription: event.target.value })}
            />
          )}
        />
      </div>
      <div>
        <label
          htmlFor=""
          className="mb-1 block text-sm font-medium text-gray-900"
        >
          {" "}
          Skill{" "}
        </label>
        <Controller
          name="vacantSkills"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              {...field}
              options={skillsOptions}
              isMulti
              placeholder="Select an option"
            />
          )}
        />
      </div>
    </form>
  );

  return (
    <BasicModal
      open={open}
      onClose={handleClose}
      content={getContent()}
      onSubmit={handleSubmit(addUser)}
    />
  );
};

export default NewVacantModal;
