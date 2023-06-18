import { FC } from "react";

interface LabelProps {
  title: string | undefined;
}

const Label: FC<LabelProps> = ({ title }) => {
  return <p className="text-md font-small mb-1 block text-gray-800">{title}</p>;
};

export default Label;
