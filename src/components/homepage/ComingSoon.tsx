"use client"

/*
| Developed by Reskue
| Filename: ComingSoon.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Box, Typography, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ComingSoonProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ComingSoonBoxStyled = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,

    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '133px',

    [theme.breakpoints.down('md')]: {
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ComingSoon: React.FC<ComingSoonProps> = ({ children }) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <ComingSoonBoxStyled>
            <Typography
                sx={{
                    color: 'black',
                    fontFamily: 'Anton',
                    fontSize: '0.7rem',
                }}
            >
                Coming Soon
            </Typography>
        </ComingSoonBoxStyled>
    )
}

export default ComingSoon
