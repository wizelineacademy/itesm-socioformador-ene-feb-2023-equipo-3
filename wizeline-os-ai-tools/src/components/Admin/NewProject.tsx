import React, { FC, useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "../ui/Input";
import { Button, buttonVariants } from "../ui/Button";

import NewVacantModal from "./NewVacantModal";
import { TextField } from "@mui/material";

interface projectFormValues {
    projectName: string;
    projectStartDate: string;
    projectEndDate: string;
    projectDescription: string;
    projectVacants: any;
}

const schema = yup.object().shape({
    projectName: yup.string().required('Name is a required field'),
    projectStartDate: yup.string().required('Start Date is a required field'),
    projectEndDate: yup.string().required('End Date is a required field'),
    projectDescription: yup.string().required('Description is a required field'),
});

  

interface NewProjectProps {
    
}

const NewProject: FC<NewProjectProps> = ({ }) => {

    const { control, handleSubmit, formState: { errors } } = useForm<projectFormValues>({
        resolver: yupResolver(schema),
    });

    /* --------------- VACANTS DATA BEGIN --------------- */
    interface Vacant {
        id: number;
        vacantName: string;
        vacantStartDate: string;
        vacantEndDate: string;
        vacantDescription: string;
    }

    const [vacants, setVacants] = useState<Vacant[]>([]);

    const [isVacantOpen, setVacantState] = useState(false);

    const handleOpen = () => {
        setVacantState(true);
    };
    const handleClose = () => {
        setVacantState(false);
    };

    const addNewVacant = (data: Vacant) => {
        vacants.push({ ...data });
    };

    /* --------------- VACANTS DATA ENDS --------------- */

    const onSubmit = (data: projectFormValues) => {
        data.projectVacants = vacants;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 m-8'>
            <div className="flex flex-col gap-4">
                <div>
                    <label htmlFor="" className="mb-1 block text-sm font-medium text-gray-900"> Name </label>
                    <Controller
                        name="projectName"
                        control={control}
                        render={({ field }) => (
                        <TextField
                            fullWidth
                            {...field}
                            error={Boolean(errors?.projectName?.message)}
                            helperText={errors?.projectName?.message}
                            // value={values.projectName}
                            // onChange={(event) => handleChange({ ...values, projectName: event.target.value })}
                        />
                        )}
                    />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className="mb-1 block text-sm font-medium text-gray-900"> Start Date </label>
                        <Controller
                            name="projectStartDate"
                            control={control}
                            render={({ field }) => (
                            <TextField
                                fullWidth
                                {...field}
                                error={Boolean(errors?.projectStartDate?.message)}
                                helperText={errors?.projectStartDate?.message}
                                // value={values.projectStartDate}
                                // onChange={(event) => handleChange({ ...values, projectStartDate: event.target.value })}
                            />
                            )}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="mb-1 block text-sm font-medium text-gray-900"> End Date </label>
                        <Controller
                            name="projectEndDate"
                            control={control}
                            render={({ field }) => (
                            <TextField
                                fullWidth
                                {...field}
                                error={Boolean(errors?.projectEndDate?.message)}
                                helperText={errors?.projectEndDate?.message}
                                // value={values.vacantEndDate}
                                // onChange={(event) => handleChange({ ...values, vacantEndDate: event.target.value })}
                            />
                            )}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className="mb-1 block text-sm font-medium text-gray-900"> Description </label>
                    <Controller
                        name="projectDescription"
                        control={control}
                        render={({ field }) => (
                        <TextField
                            fullWidth
                            multiline
                            rows={5}
                            {...field}
                            error={Boolean(errors?.projectDescription?.message)}
                            helperText={errors?.projectDescription?.message}
                            // value={values.projectDescription}
                            // onChange={(event) => handleChange({ ...values, projectDescription: event.target.value })}
                        />
                        )}
                    />
                </div>
                <div className="-bg-orange-600">
                    <label htmlFor="" className="text-md mb-1 block font-medium text-gray-900"> Vacancies </label>
                    <div className="flex flex-col mt-2">
                        {
                            vacants.length ? vacants.map((vacant) => (
                                <div className="mb-4 p-2 grid grid-cols-12 border rounded-md px-4" key={vacant.id} >
                                    <div className="flex gap-4 col-span-11">
                                        <div className="grid content-center">
                                            <p className="font-medium text-base">{vacant.vacantName}</p>
                                            <p className="font-light text-sm text-slate-500">{vacant.vacantDescription}</p>
                                        </div>
                                    </div>
                                    <div className="-bg-slate-200 col-span-1 grid content-center justify-items-end">
                                        <p>edit</p>
                                    </div>
                                </div>
                            )) : <p></p>
                        }
                    </div>
                    <div className="w-52">
                        <Button className={buttonVariants({ variant: "linkedin", size: "logIn" })} onClick={handleOpen}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-10 w-10 pr-4"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                            </svg>
                            Add Vacant
                        </Button>
                    </div>
                </div>
                <NewVacantModal open={isVacantOpen} handleClose={handleClose} addNewVacant={addNewVacant}></NewVacantModal>
            </div>

            <div className="-bg-orange-500 p-2 border border-slate-300 rounded-sm">
                    <div className="-bg-pink-100 flex justify-between">
                        <div className="-w-52">
                            <Input type="submit" value="Cancel" ></Input>
                        </div>
                        <div className="-w-52">
                            <Input type="submit" value="Save" className={buttonVariants({variant: 'linkedin', size: 'logIn'})}></Input>
                        </div>
                    </div>
            </div>
        </form>
    );
};

export default NewProject;