"use client"
/*
| Developed by Reskue
| Filename: KablioSignUp.tsx
| Author: eric@reskue.art
*/

import { KablioLogo } from '@/assets/svgs/logo'
import { KablioMiniLogo } from '@/assets/svgs/miniLogo'
import { useAuth } from '@/hooks/useAuth'
import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface KablioSignUpProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const KablioSignUpBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFED82',
    width: '100%',
    padding: '2rem',
    gap: '1.5rem',
    borderRadius: '1rem',
    [theme.breakpoints.down('md')]: {
    },
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    fontFamily: "Anton",
    fontWeight: "400",
    fontSize: "1.375rem",
    padding: '2rem 4rem',
    [theme.breakpoints.down('md')]: {
        maxWidth: '500px',
        width: '100%',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const KablioSignUp: React.FC<KablioSignUpProps> = ({ }) => {
    const { checkCredentials } = useAuth();
    // Render
    //--------------------------------------------------------------------------
    return (
        <KablioSignUpBox>
            <KablioLogo />
            <Typography
                sx={{
                    fontFamily: 'Roboto',
                    fontSize: '1.15rem',
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                Find thousands of jobs in Construction, Energy and Engineering today
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ButtonStyled
                    href={checkCredentials() ? '/account/matches' : '/auth/signup'}
                    variant="contained"
                    startIcon={<KablioMiniLogo />}
                >
                    Sign-Up
                </ButtonStyled>
            </Box>
        </KablioSignUpBox>
    )
}

export default KablioSignUp
