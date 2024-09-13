/*
| Developed by Reskue
| Filename: RemoveButton.tsx
| Author: eric@reskue.art
*/

"use client "

import { Button, styled } from '@mui/material'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface RemoveButtonProps //extends buttonProps
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
const RemoveButtonStyled = styled(Button)(() => ({
    border: '2px solid #FF6331',
    backgroundColor: 'white',
    fontFamily: "roboto",
    fontSize: '18px',
    fontWeight: '400',
    color: '#FF6331',
    borderRadius: '10px',
    width: "100%",
    "&:hover": {
        backgroundColor: "#FF6331",
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
const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick, children, icon }) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <RemoveButtonStyled
            onClick={onClick}>
            {icon && <div style={{ display: 'flex', marginRight: '0.5rem' }}>{icon}</div>}
            {children}
        </RemoveButtonStyled>
    )
}

export default RemoveButton
