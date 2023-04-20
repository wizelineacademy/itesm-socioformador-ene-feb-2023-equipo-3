import { FC, useState } from "react";
import { Input } from "../ui/Input";
import AboutForm from "./AboutForm";
import EducationForm from "./EducationForm";
import PastWorkForm from "./PastWorkForm";
import SkillsForm from "./SkillsForm";

import ContactForm from "./ContactForm";
import Multiselect from "../ui/Multiselect";
import { Button, buttonVariants } from "../ui/Button";
import { stateOptions } from "@/utils/skillsData";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";

interface FormComponentProps { }

const FormComponent: FC<FormComponentProps> = ({ }) => {
	const [contactDetails, setContact] = useState({
		fullName: "",
		title: "",
		country: "",
		state: "",
		city: "",
		phone: "",
		avatarURL: "",
	});

	const [aboutDetails, setAbout] = useState({
		descriptionAbout: "",
	});

	const [pastWorkDetails, setPastWork] = useState({
		pastWorkTitle: "",
		startDate: "",
		endDate: "",
		pastWorkDescription: "",
	});

	const [pastWorkSkills, setSkills] = useState<string[]>([]);
	const pastWorkSkillsChange = (e: any) => {
		setSkills(Array.isArray(e) ? e.map((x) => x.value) : []);
	};

	const [educationDetails, setEducation] = useState({
		schoolName: "",
		degree: "",
		specialization1: "",
		specialization2: "",
	});

	const [expertSkills, setExpertSkills] = useState<string[]>([]);
	const [advancedSkills, setAdvancedSkills] = useState<string[]>([]);
	const [intermediateSkills, setIntermediateSkills] = useState<string[]>([]);
	const [noviceSkills, setNoviceSkills] = useState<string[]>([]);

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;

		setAbout((prev: any) => {
			return { ...prev, [name]: value };
		});

		setContact((prev: any) => {
			return { ...prev, [name]: value };
		});

		setPastWork((prev: any) => {
			return { ...prev, [name]: value };
		});

		setEducation((prev: any) => {
			return { ...prev, [name]: value };
		});
	};

	const expertSkillsChange = (e: any) => {
		setExpertSkills(Array.isArray(e) ? e.map((x) => x.value) : []);
	};
	const advancedSkillsChange = (e: any) => {
		setAdvancedSkills(Array.isArray(e) ? e.map((x) => x.value) : []);
	};
	const intermediateSkillsChange = (e: any) => {
		setIntermediateSkills(Array.isArray(e) ? e.map((x) => x.value) : []);
	};
	const noviceSkillsChange = (e: any) => {
		setNoviceSkills(Array.isArray(e) ? e.map((x) => x.value) : []);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(contactDetails);
		console.log(aboutDetails);
		console.log(expertSkills);
		console.log(pastWorkSkills);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className=" -bg-slate-200 container mx-auto flex items-start"
		>
			<div className="m-8 flex w-2/3 flex-col gap-8">
				<div className="w-52">
					<Button
						className={buttonVariants({ variant: "linkedin", size: "logIn" })}
					>
						<p className="">Create with Linkedin</p>
					</Button>
				</div>
				<ContactForm
					inputValues={contactDetails}
					action={handleChange}
				></ContactForm>
				<AboutForm inputValues={aboutDetails} action={handleChange}></AboutForm>
				<PastWorkForm
					inputValues={pastWorkDetails}
					action={handleChange}
					inputValues2={pastWorkSkills}
					action2={pastWorkSkillsChange}
				></PastWorkForm>
				<EducationForm
					inputValues={educationDetails}
					action={handleChange}
				></EducationForm>
				<div className="flex flex-col gap-4">
					<Heading className={cn(headingVariants({ size: "default" }))}>
						{" "}
						Skills{" "}
					</Heading>
					<Multiselect
						title="Expert"
						inputValues={expertSkills}
						action={expertSkillsChange}
						data={stateOptions}
					></Multiselect>
					<Multiselect
						title="Advanced"
						inputValues={advancedSkills}
						action={advancedSkillsChange}
						data={stateOptions}
					></Multiselect>
					<Multiselect
						title="Intermediate"
						inputValues={intermediateSkills}
						action={intermediateSkillsChange}
						data={stateOptions}
					></Multiselect>
					<Multiselect
						title="Novice"
						inputValues={noviceSkills}
						action={noviceSkillsChange}
						data={stateOptions}
					></Multiselect>
				</div>

				{/* <SkillsForm inputValues={skills} action={handleChange} data={stateOptions}></SkillsForm> */}
				<div className="grid justify-items-end">
					<div className="w-52 ">
						<Input type="submit" value="Submit"></Input>
					</div>
				</div>
			</div>
			<div className="w-1/3 bg-gray-200" style={{ height: 2200 }}></div>
		</form>
	);
};

export default FormComponent;
