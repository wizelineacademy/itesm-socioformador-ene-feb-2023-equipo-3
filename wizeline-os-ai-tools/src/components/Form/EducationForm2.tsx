import { FC } from 'react'
import { Controller, useFormContext } from "react-hook-form";
import { TextField,} from "@material-ui/core";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";
import Label from '../ui/Label';

interface EducationForm2Props {
  
}

const EducationForm2: FC<EducationForm2Props> = ({}) => {
    const { control, formState: { errors }, watch } = useFormContext();

    return (
        <div className="flex flex-col gap-4">
            <Heading className={cn(headingVariants({ size: "default" }))}> Education </Heading>
            <div>
                <Label title='School Name'></Label>
                <Controller
                    control={control}
                    name="schoolName"
                    rules={{ required: "this field is required." }}
                    render={({ field }) => (
                        <TextField
                        id="schoolName"
                        variant="outlined"
                        fullWidth
                        {...field}
                        error={Boolean(errors?.schoolName)}
                        helperText={errors.schoolName?.message?.toString() || '' }
                        />
                    )}
                />
            </div>
            <div>
                <Label title='Degree'></Label>
                <Controller
                    control={control}
                    name="degree"
                    rules={{ required: "this field is required." }}
                    render={({ field }) => (
                        <TextField
                        id="degree"
                        variant="outlined"
                        fullWidth
                        {...field}
                        error={Boolean(errors?.degree)}
                        helperText={errors.degree?.message?.toString() || '' }
                        />
                    )}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label title='Specialization'></Label>
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
                    <Label title='Specialization'></Label>
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
    )
}

export default EducationForm2