import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NextRouter } from "next/router";

export default function BackButton({router}:any) {
    return (
        <>
            <IconButton size="medium" onClick={() => router.back()}>
                <ArrowBackIcon sx={{ color: "#000" }} fontSize="medium" />
            </IconButton>
        </>
    )
}