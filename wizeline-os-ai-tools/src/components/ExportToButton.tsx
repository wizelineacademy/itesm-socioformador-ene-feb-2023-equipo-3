import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function BasicButtons() {
  return (
    <Button variant="outlined" className="inline-flex items-center justify-center space-x-2 px-8 py-2.5 rounded-md border-[#00A7E5]">
      <FileUploadOutlinedIcon className=" h-full w-5 text-[#00A7E5]" />
      <span className = "text-[#00A7E5] normal-case font-inter text-base">Export to</span>
    </Button>
  );
}