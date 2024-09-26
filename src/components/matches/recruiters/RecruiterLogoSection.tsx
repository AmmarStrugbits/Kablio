"use client"

/*
| Developed by Reskue
| Filename: RecruiterLogoSection.tsx
| Author: eric@reskue.art
*/

import InformationNotAvailable from '@/assets/images/InformationNotAvailable.png'
import { PublicFileEmbeddable } from '@/shared/interfaces/JobPostClass'
import { Box, styled } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import EmployerUndisclosed from './EmployerUndisclosed'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface RecruiterLogoSectionProps //extends buttonProps
{
    children?: React.ReactNode,
    logo?: PublicFileEmbeddable,
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const RecruiterLogoSectionBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    border: '2px solid #D9D9D9',
    borderRadius: '5px',
    padding: '1rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const ImageBoxStyled = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "6rem",
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    [theme.breakpoints.down('lg')]: {
        width: "50%",
        // height: "3.75rem",
    },
    [theme.breakpoints.down('md')]: {
        // height: "3.75rem",
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const RecruiterLogoSection: React.FC<RecruiterLogoSectionProps> = (props: RecruiterLogoSectionProps) => {
    // Render
    //--------------------------------------------------------------------------
    return (
        <RecruiterLogoSectionBoxStyled>
            <EmployerUndisclosed />
            <ImageBoxStyled>
                < Image
                    src={props.logo?.url || InformationNotAvailable}
                    alt={props.logo?.originalname || 'orange kablio logo'}
                    layout="fill"
                    objectFit="contain"
                    style={{ overflow: 'hidden' }}
                />
            </ImageBoxStyled>
        </RecruiterLogoSectionBoxStyled>
    )
}

export default RecruiterLogoSection
