"use client"

/*
| Developed by Reskue
| Filename: CompanyLogoSection.tsx
| Author: eric@reskue.art
*/

import { PublicFileEmbeddable } from '@/shared/interfaces/JobPostClass'
import { Box, styled } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import InformationNotAvailable from '@/assets/images/InformationNotAvailable.png'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CompanyLogoSectionProps //extends buttonProps
{
    children?: React.ReactNode,
    logo?: PublicFileEmbeddable,
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ImageBoxStyled = styled(Box)(({ theme }) => ({
    height: '100px',
    position: 'relative',
    // maxWidth: '100%',
    // maxHeight: '100%',

    [theme.breakpoints.down('md')]: {
        // width: "75px",
        height: "75px",
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const CompanyLogoSection: React.FC<CompanyLogoSectionProps> = (props: CompanyLogoSectionProps) => {
    // Render
    //--------------------------------------------------------------------------
    return (
        <ImageBoxStyled>
            < Image
                src={props.logo?.url || InformationNotAvailable}
                alt={props.logo?.originalname || 'orange kablio logo'}
                fill
                style={{
                    objectFit: "contain",
                    overflow: 'hidden',
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}
            />
        </ImageBoxStyled>
    )
}

export default CompanyLogoSection
