import { Input } from "../ui/Input";
import { Heading, headingVariants } from "../ui/Heading";
import { cn } from "@/utils/utils";

type Props = {
  formikProps: {
    values: {
      fullName: string;
      title: string;
      country: string;
      state: string;
      city: string;
      phoneNumber: number;
      avatarURL: string;
    };
  };
};

const ContactForm = ({ handleChange, values, errors, touched }) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading className={cn(headingVariants({ size: "default" }))}>
        {" "}
        Contact{" "}
      </Heading>
		<Input
			type="text"
			title="Full Name*"
			name="fullName"
			value={values.fullName}
			onChange={handleChange}
			className={` ${
			errors.fullName && touched.fullName ? "border-2 border-rose-600" : ""
			}`}
		/>
		{errors.fullName && touched.fullName && (
			<p className="text-sm text-pink-600">{errors.fullName}</p>
		)}
		<Input
			type="text"
			title="Title"
			name="title"
			value={values.title}
			onChange={handleChange}
			className={` ${
			errors.title && touched.title ? "border-2 border-rose-600" : ""
			}`}
		/>
		{errors.title && touched.title && (
			<p className="text-sm text-pink-600">{errors.title}</p>
		)}
		<div className="grid grid-cols-3 gap-4">
			<div>
			<Input
				type="text"
				title="Country"
				name="country"
				value={values.country}
				onChange={handleChange}
				className={` ${
				errors.country && touched.country
					? "border-2 border-rose-600"
					: ""
				}`}
			/>
			{errors.country && touched.country && (
				<p className="text-sm text-pink-600">{errors.country}</p>
			)}
			</div>
			<div>
			<Input
				type="text"
				title="State"
				name="state"
				value={values.state}
				onChange={handleChange}
				className={` ${
				errors.state && touched.state ? "border-2 border-rose-600" : ""
				}`}
			/>
			{errors.state && touched.state && (
				<p className="text-sm text-pink-600">{errors.state}</p>
			)}
			</div>
			<div>
			<Input
				type="text"
				title="City"
				name="city"
				value={values.city}
				onChange={handleChange}
				className={` ${
				errors.city && touched.city ? "border-2 border-rose-600" : ""
				}`}
			/>
			{errors.city && touched.city && (
				<p className="text-sm text-pink-600">{errors.city}</p>
			)}
			</div>
		</div>
		<Input
			type="text"
			title="Phone *"
			name="phoneNumber"
			value={values.phoneNumber}
			onChange={handleChange}
			className={` ${
			errors.phoneNumber && touched.phoneNumber ? "border-2 border-rose-600" : ""
			}`}
		/>
		{errors.phoneNumber && touched.phoneNumber && (
			<p className="text-sm text-pink-600">{errors.phoneNumber}</p>
		)}
		<Input
			type="text"
			title="Avatar URL"
			name="avatarURL"
			value={values.avatarURL}
			onChange={handleChange}
			className={` ${
			errors.avatarURL && touched.avatarURL ? "border-2 border-rose-600" : ""
			}`}
		/>
		{errors.avatarURL && touched.avatarURL && (
			<p className="text-sm text-pink-600">{errors.avatarURL}</p>
		)}

    </div>
  );
};

export default ContactForm;
