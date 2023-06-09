import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { IconButton } from "@mui/material";

export default function EditButton() {
  return (
    <>
      <IconButton size="small">
        <CreateOutlinedIcon sx={{ color: "#00A7E5" }} fontSize="large" />
      </IconButton>
    </>
  );
}
