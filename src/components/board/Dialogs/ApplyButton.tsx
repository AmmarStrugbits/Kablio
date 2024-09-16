"use client"

/*
| Developed by Reskue
| Filename: ApplyButton.tsx
| Author: eric@reskue.art
*/

import { Button, styled } from '@mui/material'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ApplyButtonProps //extends buttonProps
{
    children?: React.ReactNode;
    onClick: () => void;
    icon?: React.ReactNode;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ApplyButtonStyled = styled(Button)(() => ({
    color: 'black',
    background: "linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)",
    border: "none",
    fontWeight: "400",
    width: "100%",
    padding: "1rem",
    fontFamily: "Anton",
    fontSize: "18px",
    borderRadius: '0.625rem',
    "&:hover": {
        backgroundColor: "black",
        color: "white",
    },
    "&:disabled": {
        opacity: 0.4,
    },
}))
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick, children, icon }) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <ApplyButtonStyled
            onClick={onClick}>
            {icon && <div style={{ display: 'flex', marginRight: '0.5rem' }}>{icon}</div>}
            {children}
        </ApplyButtonStyled>
    )
}

export default ApplyButton
