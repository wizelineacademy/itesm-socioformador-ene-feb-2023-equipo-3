import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function AddButton({props}: any) {
  return (
    <>
      <IconButton id={props} size="small">
        <AddIcon sx={{ color: "#e83d44" }} fontSize="large" />
      </IconButton>
    </>
  );
}
