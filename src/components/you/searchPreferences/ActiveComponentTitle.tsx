"use client"

/*
| Developed by Reskue
| Filename: ActiveComponentTitle.tsx
| Author: eric@reskue.art
*/

import { Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ActiveComponentTitleProps //extends buttonProps
{
    children?: React.ReactNode,
    title: string
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TitleTypographyStyled = styled(Typography)(({ theme }) => ({
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: '1.875rem',
    padding: '1rem',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.375rem',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ActiveComponentTitle: React.FC<ActiveComponentTitleProps> = (props: ActiveComponentTitleProps) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <TitleTypographyStyled >{props.title}</TitleTypographyStyled>
    )
}

export default ActiveComponentTitle
