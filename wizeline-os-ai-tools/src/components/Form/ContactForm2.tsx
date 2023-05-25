import { FC } from 'react'
import { Controller, useFormContext } from "react-hook-form";
import { TextField,} from "@material-ui/core";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";
import Label from '../ui/Label';

interface ContactForm2Props {
  
}

const ContactForm2: FC<ContactForm2Props> = ({}) => {
    const { control, formState: { errors }, watch } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
        <Heading className={cn(headingVariants({ size: "default" }))}> Contact </Heading>
        <div>
            <Label title='Full Name'></Label>
            <Controller
                control={control}
                name="fullName"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                    <TextField
                    id="fullName"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={Boolean(errors?.fullName)}
                    helperText={errors.fullName?.message?.toString() || '' }
                    />
                )}
            />
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div>
                <Label title='Country'></Label>
                <Controller
                    control={control}
                    name="country"
                    rules={{ required: "This field is required." }}
                    render={({ field }) => (
                        <TextField
                        id="country"
                        variant="outlined"
                        fullWidth
                        {...field}
                        error={Boolean(errors?.country)}
                        helperText={errors.country?.message?.toString() || '' }
                        />
                    )}
                />
            </div>
            <div>
                <Label title='State'></Label>
                <Controller
                    control={control}
                    name="state"
                    rules={{ required: "This field is required." }}
                    render={({ field }) => (
                        <TextField
                        id="state"
                        variant="outlined"
                        fullWidth
                        {...field}
                        error={Boolean(errors?.state)}
                        helperText={errors.state?.message?.toString() || '' }
                        />
                    )}
                />
                {/* {errors.state && touched.state && ( <p className="text-sm text-pink-600">{errors.state}</p> )} */}
            </div>
            <div>
                <Label title='City'></Label>
                <Controller
                    control={control}
                    name="city"
                    rules={{ required: "This field is required." }}
                    render={({ field }) => (
                        <TextField
                        id="city"
                        variant="outlined"
                        fullWidth
                        {...field}
                        error={Boolean(errors?.city)}
                        helperText={errors.city?.message?.toString() || '' }
                        />
                    )}
                />
            </div>
        </div>
        <div>
            <Label title='Phone Number'></Label>
            <Controller
                control={control}
                name="phoneNumber"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                    <TextField
                    id="phoneNumber"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={Boolean(errors?.phoneNumber)}
                    helperText={errors.phoneNumber?.message?.toString() || '' }
                    />
                )}
            />
        </div>
        <div>
            <Label title='Avatar URL'></Label>
            <Controller
                control={control}
                name="avatarURL"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                    <TextField
                    id="avatarURL"
                    variant="outlined"
                    fullWidth
                    {...field}
                    error={Boolean(errors?.avatarURL)}
                    helperText={errors.avatarURL?.message?.toString() || '' }
                    />
                )}
            />
        </div>

  </div>
  )
}

export default ContactForm2