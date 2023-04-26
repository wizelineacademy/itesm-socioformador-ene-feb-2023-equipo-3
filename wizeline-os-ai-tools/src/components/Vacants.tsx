import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CircleIcon from '@mui/icons-material/Circle';

export const vacants = [{
    id: 0,
    name: 'Software Engineer',
    description: 'Develop, test, and maintain software applications.',
    status: 'Available'
}, {
    id: 1,
    name: 'Frontend Developer',
    description: 'Create interactive web user interfaces.',
    status: 'Closed'
}, {
    id: 2,
    name: 'Backend Developer',
    description: 'Manage server-side logic and data storage.',
    status: 'Closed'
}, {
    id: 3,
    name: 'QA Engineer',
    description: 'Test software for defects and ensure quality.',
    status: 'Available'
}, {
    id: 4,
    name: 'UX/UI Designer',
    description: 'XYZ Software Solutions',
    status: 'Ending Soon'
}];

interface Data {
    id: number;
    name: string;
    description: string;
    status: string;
}

interface Props {
    data: Data[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            width: theme.spacing(5.5),
            height: theme.spacing(5.5),
            borderRadius: '50%',
            border: `2px solid ${theme.palette.common.white}`,
        },
    }),
);

const getColor = (status: string) => {
    if (status === "Available") {
        return "[#00A7E5]";
    } else if (status === "Closed") {
        return "red-500";
    } else if (status === "Ending Soon")  {
        return "[#EA8C35]";
    }
};

const VacantsItem: React.FC<Props> = ({ data }) => {
    const classes = useStyles();

    return (
        <div className="relative shadow-xl overflow-auto h-80">
            <table className="w-full text-left">
                <thead className="bg-white border border-gray-200">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col" className="text-base font-inter font-normal py-4">
                            Job Openings
                        </th>
                    </tr>

                </thead>
                <tbody>
                    {data.map((project) => (
                        <tr key={project.id} className="bg-white border border-gray-200 hover:bg-gray-50">
                            <td width={50} className="px-6">
                                <Avatar
                                    alt={project.name}
                                    src='../../public/avatars/example_1.jpg'
                                    className={classes.avatar}
                                />
                            </td>
                            <th className="py-4">
                                <div className="flex justify-between pr-5 items-center">
                                    <p className="font-inter text-lg font-semibold text-black">{project.name}</p>
                                    <CircleIcon className={`w-6 h-6 pl-1 text-${getColor(project.status)}`}/>
                                </div>
                                <p className="font-inter text-base font-light pr-10">{project.description}</p>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

//w-6 h-6 pl-1
export default function Vacants() {
    return (
        <div className="">
            <VacantsItem data={vacants} />
        </div>
    )
}