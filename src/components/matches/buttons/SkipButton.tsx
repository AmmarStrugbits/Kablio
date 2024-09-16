"use client"

/*
| Developed by Reskue
| Filename: SkipButton.tsx
| Author: eric@reskue.art
*/

import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SkipButtonProps extends ButtonProps {
    children?: React.ReactNode
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
    border: "1px solid rgba(0, 0, 0, 0.10)",
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
const SkipButton: React.FC<SkipButtonProps> = ({ onClick, disabled }) => {

    // Render
    //--------------------------------------------------------------------------
    return (<ButtonStyle fullWidth onClick={onClick} disabled={disabled}><ChevronRightIcon /></ButtonStyle>)
}

export default SkipButton;