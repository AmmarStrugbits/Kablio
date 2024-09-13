/*
| Developed by Reskue
| Filename: InfoNotAvailable.tsx
| Author: eric@reskue.art
*/

"use client"

import { Typography, useMediaQuery } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'

import InformationNotAvailable from '@/assets/images/InformationNotAvailable.png'
import Image from 'next/image';
import { theme } from '@/MUI/Theme';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface InfoNotAvailableProps //extends buttonProps
{
    children?: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const InfoNotAvailableBoxStyled = styled(Box)((theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
    color: '#FF6331',
    fontFamily: 'Roboto',
    fontSize: '1rem',

    [theme.breakpoints.down('md')]: {

    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const InfoNotAvailable: React.FC<InfoNotAvailableProps> = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    const InfoNotAvailable = "Information not given or found";

    // Render
    //--------------------------------------------------------------------------
    return (
        <InfoNotAvailableBoxStyled>
            <TypographyStyled>{InfoNotAvailable}</TypographyStyled>
            <Image src={InformationNotAvailable} alt={'orange kablio logo'} width={matchesMobile ? 25 : 30}></Image>
        </InfoNotAvailableBoxStyled>
    )
}

export default InfoNotAvailable