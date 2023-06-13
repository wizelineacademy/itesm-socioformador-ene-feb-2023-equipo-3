import { FC } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";
import Select from 'react-select';
import { skillsOptions } from "@/utils/skillsData";
import { CustomDropdownIndicator } from '@/utils/CustomDropdownIndicator';
import Label from '../ui/Label';
import { makeStyles } from '@material-ui/core/styles';

interface SkillsForm2Props {
  
}



const SkillsForm2: FC<SkillsForm2Props> = ({}) => {
    const { control, formState: { errors }, watch } = useFormContext();
    return (
        <div className="flex flex-col gap-4">
            <Heading className={cn(headingVariants({ size: "default" }))}> Skills </Heading>
            <div>
                <Label title='Expert'></Label>
                <Controller
                name="expertSkills" // The name of the field in the form schema
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                    <Autocomplete
                    {...field}
                    multiple
                    options={skillsOptions} // Replace with your array of options
                    getOptionLabel={(option) => option.label}
                    
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        variant="outlined"
                        />
                    )}
                    onChange={(e, expertSkills) => field.onChange(expertSkills)}
                    value={field.value}
                    isOptionEqualToValue={(option, value) => option.value === value.value}
                    />
                )}
                />
            </div>
            <div>
                <Label title='Advanced'></Label>
                <Controller
                name="advancedSkills" // The name of the field in the form schema
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                    <Autocomplete
                    {...field}
                    multiple
                    options={skillsOptions} // Replace with your array of options
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        variant="outlined"
                        />
                    )}
                    onChange={(e, advancedSkills) => field.onChange(advancedSkills)}
                    value={field.value}
                    isOptionEqualToValue={(option, value) => option.value === value.value}
                    />
                )}
                />
            </div>
            <div>
                <Label title='Intermediate'></Label>
                <Controller
                name="intermediateSkills" // The name of the field in the form schema
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                    <Autocomplete
                    {...field}
                    multiple
                    options={skillsOptions} // Replace with your array of options
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        variant="outlined"
                        />
                    )}
                    onChange={(e, intermediateSkills) => field.onChange(intermediateSkills)}
                    value={field.value}
                    isOptionEqualToValue={(option, value) => option.value === value.value}
                    />
                )}
                />
            </div>
            <div>
                <Label title='Basic'></Label>
                <Controller
                name="basicSkills" // The name of the field in the form schema
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                    <Autocomplete
                    {...field}
                    multiple
                    options={skillsOptions} // Replace with your array of options
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        variant="outlined"
                        />
                    )}
                    onChange={(e, basicSkills) => field.onChange(basicSkills)}
                    value={field.value}
                    isOptionEqualToValue={(option, value) => option.value === value.value}
                    />
                )}
                />
            </div>
        </div>
    )
}

export default SkillsForm2