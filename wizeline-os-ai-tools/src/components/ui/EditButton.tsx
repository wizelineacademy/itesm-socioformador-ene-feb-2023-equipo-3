import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { IconButton } from "@mui/material";

export default function EditButton({props}: any) {
  return (
    <>
      <IconButton id={props} size="small">
        <CreateOutlinedIcon sx={{ color: "#e83d44" }} fontSize="large" />
      </IconButton>
    </>
  );
}
