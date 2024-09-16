"use client"

/*
| Developed by Reskue
| Filename: EmployerUndisclosed.tsx
| Author: eric@reskue.art
*/

import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface EmployerUndisclosedProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const EmployerUndisclosedBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    [theme.breakpoints.down('lg')]: {
        width: '60%',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const EmployerUndisclosed: React.FC<EmployerUndisclosedProps> = () => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <EmployerUndisclosedBoxStyled>
            <Typography sx={{ color: '#505662', fontFamily: 'Roboto', fontSize: '1.125rem' }}>Employer undisclosed</Typography>
            <Typography sx={{ color: '#505662', fontFamily: 'Roboto', fontSize: '0.875rem' }}>Role managed by a recruiter</Typography >
        </EmployerUndisclosedBoxStyled >
    )
}

export default EmployerUndisclosed
