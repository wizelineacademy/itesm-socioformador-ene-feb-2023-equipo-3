import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';


const employee_data = [ 
    {employee_name: 'Joaquín Bravo', avatar: '../../public/avatars/example_1.jpg', role: "Senior, Technology Manager", skills: "Python, Drupal, PHP"},
    {employee_name: 'Joaquín Bravo', avatar: '../../public/avatars/example_1.jpg', role: "Senior, Technology Manager", skills: "Python, Drupal, PHP"},
    {employee_name: 'Joaquín Bravo', avatar: '../../public/avatars/example_1.jpg', role: "Senior, Technology Manager", skills: "Python, Drupal, PHP"},
    {employee_name: 'Joaquín Bravo', avatar: '../../public/avatars/example_1.jpg', role: "Senior, Technology Manager", skills: "Python, Drupal, PHP"},
    {employee_name: 'Joaquín Bravo', avatar: '../../public/avatars/example_1.jpg', role: "Senior, Technology Manager", skills: "Python, Drupal, PHP"},
    {employee_name: 'Joaquín Bravo', avatar: '../../public/avatars/example_1.jpg', role: "Senior, Technology Manager", skills: "Python, Drupal, PHP"},
    {employee_name: 'Joaquín Bravo', avatar: '../../public/avatars/example_1.jpg', role: "Senior, Technology Manager", skills: "Python, Drupal, PHP"}
  ];

interface Data {
    avatar: string;
    employee_name: string; 
    role: string;
    skills: string; // a modificar
}
  
interface Props {
    data: Data[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 700,
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        borderRadius: '50%',
        border: `2px solid ${theme.palette.common.white}`,
      },
  }),
);

  
const ColabTableItem: React.FC<Props> = ({ data }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width = {50}> </TableCell>
                            <TableCell width = {270}>Employee Name</TableCell>
                            <TableCell width = {220}>Role</TableCell>
                            <TableCell width = {300}>Skills</TableCell>
                            <TableCell width = {50}> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.employee_name}>
                        <TableCell>
                            <Avatar
                            alt={row.employee_name}
                            src={row.avatar}
                            className={classes.avatar}
                            />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.employee_name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.role}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.skills}
                        </TableCell>
                        <TableCell>
                            <StarBorderIcon>

                            </StarBorderIcon>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </TableContainer>
    );
};
  

export default function ColabTable() {
  return (
    <div>
        <ColabTableItem data = {employee_data} />
    </div>
  )
}