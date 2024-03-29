import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";
import Label from "@/components/ui/Label";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";

const PastWorkForm = ({ props }: any) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const pastWDescription = watch("pastWDescription");
  const characterLimit = 800;
  const isExceededLimit =
    pastWDescription && pastWDescription.length > characterLimit;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label title="Title"></Label>
        <Controller
          control={control}
          name="pastWtitle"
          rules={{ required: "This field is required." }}
          render={({ field }) => (
            <TextField
              id="pastWtitle"
              variant="outlined"
              fullWidth
              {...field}
              error={Boolean(errors?.pastWtitle)}
              helperText={errors.pastWtitle?.message?.toString() || ""}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label title="Start Date"></Label>
          <Controller
            control={control}
            name="pastWStartDate"
            rules={{ required: "This field is required." }}
            render={({ field, fieldState }) => (
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="ja"
              >
                <DatePicker
                  {...field}
                  format="YYYY/MM/DD"
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )}
                  // Validation is not fired with the default react-hook-form mode. So you need this custom onChange event handling.
                  onChange={(date) => field.onChange(date)}
                />
              </LocalizationProvider>
            )}
          />
        </div>
        <div>
          <Label title="End Date"></Label>
          <Controller
            control={control}
            name="pastWEndDate"
            rules={{ required: "This field is required." }}
            render={({ field, fieldState }) => (
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="ja"
              >
                <DatePicker
                  {...field}
                  format="YYYY/MM/DD"
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                    />
                  )}
                  // Validation is not fired with the default react-hook-form mode. So you need this custom onChange event handling.
                  onChange={(date) => field.onChange(date)}
                />
              </LocalizationProvider>
            )}
          />
        </div>
      </div>
      <div>
        <Label title="Description"></Label>
        <div
          className={` ${
            errors.pastWDescription || isExceededLimit
              ? "block w-full rounded border border-rose-600 p-3.5 text-sm text-gray-900 focus:border-rose-600 focus:ring-rose-600"
              : "block w-full rounded border border-gray-300 p-3.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          }`}
        >
          <Controller
            control={control}
            name="pastWDescription"
            rules={{ required: "This field is required." }}
            render={({ field }) => (
              <textarea
                rows={5}
                id="pastWDescription"
                className="w-full resize-none"
                {...field}
              />
            )}
          />
          <p
            className={` ${
              errors.pastWDescription || isExceededLimit
                ? "text-right text-rose-600"
                : "text-right text-gray-400"
            }`}
          >
            {watch("pastWDescription") ? watch("pastWDescription").length : "0"}
            /{characterLimit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastWorkForm;
