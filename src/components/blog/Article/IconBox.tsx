"use client"
/*
| Developed by Reskue
| Filename: IconBox.tsx
| Author: eric@reskue.art
*/


import React from 'react'
import { Box, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface IconBoxProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const IconBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    height: 'fit-content',
    [theme.breakpoints.down('md')]: {
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const IconBox: React.FC<IconBoxProps> = ({ children }) => {

    // Render
    //--------------------------------------------------------------------------
    return (<IconBoxStyled>{children}</IconBoxStyled>)
}

export default IconBox
