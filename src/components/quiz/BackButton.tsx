"use client"

/*
| Developed by Reskue
| Filename: BackButton.tsx
| Author: eric@reskue.art
*/

import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface BackButtonProps extends ButtonProps {
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const BackButtonStyled = styled(Button)(() => ({
    color: 'black',
    backgroundColor: "#F9F9F9",
    border: "none",
    fontWeight: "bold",
    padding: "&rem",
    fontFamily: "Roboto",
    fontSize: "16px",
    borderRadius: '0.625rem',
    width: "100%",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.12)",
    "&:hover": {
        backgroundColor: "#F9F9F9",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        color: "black",
    },
}));


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const BackButton: React.FC<BackButtonProps> = (props: BackButtonProps) => {
    const { children } = props;
    // Render
    //--------------------------------------------------------------------------
    return (
        <BackButtonStyled {...props}>
            {children}
        </BackButtonStyled>)
}

export default BackButton