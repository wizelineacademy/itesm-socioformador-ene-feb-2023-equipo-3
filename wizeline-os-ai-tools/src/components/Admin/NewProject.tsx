import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/Input";
import { Button, buttonVariants } from "../ui/Button";
import React, { useState } from "react";
import NewVacantModal from "./NewVacantModal";

const validationSchema = Yup.object().shape({
  projectName: Yup.string().required("Project Name is required"),
  projectStartDate: Yup.string().required("Start Date is required"),
  projectEndDate: Yup.string().required("End Date is required"),
  projectDescription: Yup.string().required("Description is required").max(500),
});

const NewProject = () => {
    const [vacants, setVacants] = useState<Vacant[]>([]);

    const handleVacantSubmit = (data: any) => {
        console.log(data);
    };

    const [isVacantOpen, setVacantState] = useState(false);

    const handleOpen = () => {
        setVacantState(true);
    };
    const handleClose = () => {
        setVacantState(false);
    };

    interface Vacant {
        id: number;
        vacantName: string;
        vacantStartDate: string;
        vacantEndDate: string;
        vacantDescription: string;
    }

    const addNewVacant = (data: Vacant) => {
        vacants.push({ ...data });
    };

    return (
        <Formik
        initialValues={{
            projectName: "",
            projectStartDate: "",
            projectEndDate: "",
            projectDescription: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
            console.log(values);
        }}
        >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
            <Form className="container mx-auto flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <div>
                        <Input
                            type="text"
                            title="Project Name"
                            name="projectName"
                            value={values.projectName}
                            onChange={handleChange}
                            className={` ${
                            errors.projectName && touched.projectName
                                ? "border-2 border-rose-600"
                                : ""
                            }`}
                        />
                        {errors.projectName && touched.projectName && (
                            <p className="text-sm text-pink-600">{errors.projectName}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Input
                            type="text"
                            title="Start Date"
                            name="projectStartDate"
                            value={values.projectStartDate}
                            onChange={handleChange}
                            className={` ${
                                errors.projectStartDate && touched.projectStartDate
                                ? "border-2 border-rose-600"
                                : ""
                            }`}
                            />
                            {errors.projectStartDate && touched.projectStartDate && (
                            <p className="text-sm text-pink-600">
                                {errors.projectStartDate}
                            </p>
                            )}
                        </div>
                        <div>
                            <Input
                            type="text"
                            title="End Date"
                            name="projectEndDate"
                            value={values.projectEndDate}
                            onChange={handleChange}
                            className={` ${
                                errors.projectEndDate && touched.projectEndDate
                                ? "border-2 border-rose-600"
                                : ""
                            }`}
                            />
                            {errors.projectEndDate && touched.projectEndDate && (
                            <p className="text-sm text-pink-600">
                                {errors.projectEndDate}
                            </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="" className="mb-1 block text-sm font-medium text-gray-900"> Description </label>
                        <div
                                className={` ${
                                errors.projectDescription && touched.projectDescription
                                    ? "block w-full rounded border-2 border-rose-600 p-3.5 text-sm text-gray-900 focus:border-rose-600 focus:ring-rose-600"
                                    : "block w-full rounded border border-gray-300 p-3.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                }`}
                            >
                                <textarea
                                name="projectDescription"
                                placeholder="Description..."
                                value={values.projectDescription}
                                onChange={handleChange}
                                className="w-full resize-none"
                                id=""
                                rows={5}
                                />
                                <p
                                className={` ${
                                    errors.projectDescription && touched.projectDescription
                                    ? "text-right text-rose-600"
                                    : "text-right text-gray-400"
                                }`}
                                >
                                {values.projectDescription.length}/500
                                </p>
                        </div>
                        {errors.projectDescription && touched.projectDescription && (
                            <p className="text-sm text-pink-600">
                            {errors.projectDescription}
                            </p>
                        )}
                    </div>

                    <div className="-bg-orange-600">
                        <label htmlFor="" className="text-md mb-1 block font-medium text-gray-900"> Vacancies </label>
                        <div className="flex flex-col mt-2">
                            {
                                vacants.length ? vacants.map((vacant) => (
                                    <div className="mb-4 p-2 grid grid-cols-12 border rounded-md px-4">
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
                
                
                
            </Form>
            
        )}
        </Formik>
    );
};

export default NewProject;
