import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { Heading, headingVariants } from "@/components/ui/Heading";
import { cn } from "@/utils/utils";

import { skillsOptions } from "@/utils/skillsData";
import Label from '@/components/ui/Label';


export function SkillItem({ skill }: any) {
    // Funcion para eliminar un artista
    async function deleteArtist(id: string) {
        try {
            fetch(`/api/edit/skills/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }).then(() => {
                window.location.reload();
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="font-inter mr-3 rounded bg-[#e83d44] p-2 font-semibold text-white flex items-center justify-between">
            <span> {skill.name} </span>
            <IconButton onClick={() => deleteArtist(skill.id_skills)} className='ml-2' size="small">
                <CloseIcon sx={{ color: "#FFF" }} fontSize="small" />
            </IconButton>
        </div>
    );
}



const SkillsForm = ({ props }: any) => {
    const { control, formState: { errors }, watch } = useFormContext();

    return (
        <div className="flex flex-col gap-4">
            <Heading className={cn(headingVariants({ size: "default" }))}> Skills </Heading>
            <section>
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
                <div className="mt-5 flex flex-wrap gap-y-4">
                    {props?.props.skills.map((skill: any) => {
                        if (skill.id_level === 1) {
                            return <SkillItem skill={skill} key={skill.id_skills} />;
                        }
                        return null;
                    })}
                </div>

            </section>
            <section>
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
                <div className="mt-5 flex flex-wrap gap-y-4">
                    {props?.props.skills.map((skill: any) => {
                        if (skill.id_level === 2) {
                            return <SkillItem skill={skill} key={skill.id_skills} />;
                        }
                        return null;
                    })}
                </div>
            </section>
            <section>
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
                <div className="mt-5 flex flex-wrap gap-y-4">
                    {props?.props.skills.map((skill: any) => {
                        if (skill.id_level === 3) {
                            return <SkillItem skill={skill} key={skill.id_skills} />;
                        }
                        return null;
                    })}
                </div>
            </section>
            <section>
                <Label title='Basic'></Label>
                <Controller
                    name="basicSkills"  // The name of the field in the form schema
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
                <div className="mt-5 flex flex-wrap gap-y-4">
                    {props?.props.skills.map((skill: any) => {
                        if (skill.id_level === 4) {
                            return <SkillItem skill={skill} key={skill.id_skills} />;
                        }
                        return null;
                    })}
                </div>
            </section>
        </div>
    )
}

export default SkillsForm