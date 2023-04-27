import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import { Button, buttonVariants } from '../ui/Button';

interface BasicModalProps {
    open: boolean;
    onClose: () => void;
    content: any;
    onSubmit: () => void;
}

const BasicModal: FC<BasicModalProps> = ({ open, onClose, content, onSubmit }) => {

    return (
        <Dialog open={open} onClose={onClose} fullWidth={true}>
            <div className='flex flex-col gap-8 m-8'>
            {content}
                <div className='grid grid-cols-2 gap-4'>
                    <Button className={buttonVariants({ variant: "outlined", size: "logIn", })} onClick={onClose}>Cancel</Button>
                    <Button className={buttonVariants({ variant: "filled", size: "logIn", })} onClick={onSubmit}> Submit </Button >
                </div>
            </div>
        </Dialog>
    )
}

export default BasicModal