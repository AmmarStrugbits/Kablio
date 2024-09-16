"use client"

/*
| Developed by Reskue
| Filename: ApplyButton.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ApplyButtonProps extends ButtonProps {
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const ButtonStyle = styled(Button)(({ theme }) => ({
    backgroundColor: "#D9D9D9",
    gap: "0.625rem",
    color: "black",
    borderRadius: "0.625rem",
    boxShadow: "0px 13px 19px -7px rgba(0, 0, 0, 0.10)",
    padding: "0.375rem 1.25rem",
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: "black",
    }


}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick }) => {

    // Render
    //--------------------------------------------------------------------------
    return (<ButtonStyle fullWidth onClick={onClick} startIcon={<DoneIcon />}>Apply</ButtonStyle>)
}

export default ApplyButton