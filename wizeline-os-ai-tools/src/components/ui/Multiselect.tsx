import { FormikProps } from "formik";
import Select from "react-select";

interface MultiselectProps {
  field: any;
  form: FormikProps<any>;
  options: any;
  title?: string;
  isMulti?: boolean;
  placeholder?: string;
}

const Multiselect = ({
  field,
  form,
  options,
  title,
  isMulti,
  placeholder = "Select",
}: MultiselectProps) => {
  function onChange(option: any) {
    form.setFieldValue(
      field.name,
      option ? option.map((item: any) => item.value) : []
    );
  }

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(
            (option: any) =>
              field.value && field.value.indexOf(option.value) >= 0
          )
        : options.find((option: any) => option.value === field.value);
    } else {
      return isMulti ? [] : "";
    }
  };

  if (!isMulti) {
    return (
      <Select
        options={options}
        name={field.name}
        value={
          options
            ? options.find((option: any) => option.value === field.value)
            : ""
        }
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
        placeholder={placeholder}
      />
    );
  } else {
    return (
      <div>
        <label
          htmlFor=""
          className="mb-1 block text-sm font-medium text-gray-900"
        >
          {title}
        </label>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          name={field.name}
          value={getValue()}
          onChange={onChange}
          options={options}
          isMulti={true}
          placeholder={placeholder}
        />
      </div>
    );
  }
};

export default Multiselect;
