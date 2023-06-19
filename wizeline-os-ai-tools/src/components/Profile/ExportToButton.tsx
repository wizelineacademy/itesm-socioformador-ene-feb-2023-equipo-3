import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

export default function BasicButtons() {
  return (
    <Button
      variant="outlined"
      className="inline-flex items-center justify-center space-x-2 rounded-md px-8 py-2.5"
      sx={{
        borderColor: "#e83d44",
        ":hover": {
          borderColor: "#e83d44",
          color: "#e83d44",
        },
      }}
    >
      <FileUploadOutlinedIcon className=" h-full w-5 text-[#e83d44]" />
      <span className="font-inter text-base normal-case text-[#e83d44]">
        Export to
      </span>
    </Button>
  );
}
