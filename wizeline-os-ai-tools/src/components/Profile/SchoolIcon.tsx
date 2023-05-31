import SchoolIcon from '@mui/icons-material/School';
import { IconButton } from '@mui/material';

export default function EditButton(){
    return(
        <>
            <IconButton size='small'>
                <SchoolIcon sx={{color: "#00A7E5"}} fontSize='large'/>
            </IconButton>
        </>
    )
}