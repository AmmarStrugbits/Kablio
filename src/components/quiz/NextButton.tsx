"use client"

/*
| Developed by Reskue
| Filename: NextButton.tsx
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
export interface NextButtonProps extends ButtonProps {
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const NextButtonStyled = styled(Button)(() => ({
    color: 'black',
    background: "linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)",
    border: "1px solid white",
    fontWeight: "bold",
    padding: "1rem",
    fontFamily: "Roboto",
    fontSize: "16px",
    borderRadius: '0.625rem',
    width: "100%",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.12)",
    "&:hover": {
        backgroundColor: "black",
        padding: "1rem",
        color: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "&:disabled": {
        opacity: 0.4,
    },
}));


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const NextButton: React.FC<NextButtonProps> = (props: NextButtonProps) => {
    const { children } = props;
    // Render
    //--------------------------------------------------------------------------
    return (
        <NextButtonStyled {...props}>
            {children}
        </NextButtonStyled>)
}

export default NextButton