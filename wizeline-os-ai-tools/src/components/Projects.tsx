import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

export const projects = [
  {
    id: 0,
    name: "Arcxp",
    company: "Washington Post",
    state: "Washington",
    country: "United States",
  },
  {
    id: 1,
    name: "CRM System Enhancement",
    company: "ABC Software Development",
    state: "New York",
    country: "United States",
  },
  {
    id: 2,
    name: "Data Analytics Platform Implementation",
    company: "Tech Innovators",
    state: "Madrid",
    country: "Spain",
  },
  {
    id: 3,
    name: "Artificial Intelligence Chatbot Development",
    company: "ABC Software Co.",
    state: "Beijing",
    country: "China",
  },
  {
    id: 4,
    name: "Multi-platform Mobile Wallet Development",
    company: "XYZ Software Solutions",
    state: "Quebec",
    country: "United States",
  },
];

interface Data {
  id: number;
  name: string;
  company: string;
  state: string;
  country: string;
}

interface Props {
  data: Data[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(6.5),
      height: theme.spacing(6.5),
      borderRadius: "50%",
      border: `2px solid ${theme.palette.common.white}`,
    },
  })
);

const ProjectItem: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className="relative overflow-x-auto shadow-xl">
      <table className="w-full text-left">
        <thead className="border border-gray-200 bg-white pl-20">
          <tr>
            <th
              scope="col"
              className="font-inter px-6 py-4 text-base font-normal"
            >
              Projects
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((project) => (
            <tr
              key={project.id}
              className="border border-gray-200 bg-white hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td width={50} className="px-6">
                <Avatar
                  alt={project.company}
                  src="../../public/avatars/example_1.jpg"
                  className={classes.avatar}
                />
              </td>
              <th className="py-4">
                <p className="font-inter text-lg font-semibold text-black">
                  {project.name}
                </p>
                <p className="font-inter text-base font-light">
                  {project.company}
                </p>
                <p className="font-inter text-sm font-normal text-[#878787]">
                  {project.state}, {project.country}
                </p>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Project() {
  return (
    <div>
      <ProjectItem data={projects} />
    </div>
  );
}
