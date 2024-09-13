/*
| Developed by Reskue
| Filename: PreviousButton.tsx
| Author: eric@reskue.art
*/

"use client"

import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface PreviousButtonProps extends ButtonProps {
    onClick?: () => void;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const ButtonStyle = styled(Button)(({ theme }) => ({
    backgroundColor: "#F9F9F9",
    gap: "0.625rem",
    color: "black",
    borderRadius: "0.625rem",
    boxShadow: "0px 13px 19px -7px rgba(0, 0, 0, 0.10)",
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
const PreviousButton: React.FC<PreviousButtonProps> = ({ onClick, disabled }) => {

    // Render
    //--------------------------------------------------------------------------
    return (<ButtonStyle fullWidth onClick={onClick} disabled={disabled}><ArrowBackIosNewIcon /></ButtonStyle>)
}

export default PreviousButton;