"use client"

/*
| Developed by Reskue
| Filename: HeaderJobDescription.tsx
| Author: eric@reskue.art
*/

import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import { JobPostClass } from '@/shared/interfaces/JobPostClass'
import { theme } from '@/MUI/Theme'
import CompanyLogoSection from '../company/CompanyLogoSection'
import RecruiterLogoSection from '../recruiters/RecruiterLogoSection'
import RoleSummary from '../RoleSummary'
import CompanySummary from '../CompanySummary'


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HeaderJobDescriptionProps //extends buttonProps
{
    jobPost: JobPostClass,
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const HeaderSectionBoxStyled = styled(Box)(({ theme }) => ({
    borderTop: `4px solid ${theme.palette.primary.main}`,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '0rem 2rem',
    marginBottom: 10,

    [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: '1rem 0.5rem 1rem 0.5rem',
    },
}))

const TitlesBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1rem',
    gap: '1rem',
    minHeight: '8rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        width: '100%',

        minHeight: '0',
    },

}))

const TitleTypographyStyled = styled(Typography)(({ theme }) => ({
    display: 'block',
    fontSize: '1.75rem',
    fontFamily: "Anton",

    [theme.breakpoints.down('md')]: {
        fontSize: '1.375rem',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HeaderJobDescription: React.FC<HeaderJobDescriptionProps> = (props: HeaderJobDescriptionProps) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Render
    //--------------------------------------------------------------------------
    return (
        <HeaderSectionBoxStyled>
            <Box
                display={'flex'}
                flexDirection={'column'}
                width={'100%'}
                alignItems={matchesMobile ? 'flex-start' : ''}
                sx={{
                }}
            >
                {/* Header*/}
                <TitlesBoxStyled>
                    <Box flex={1} width={'100%'} >
                        <TitleTypographyStyled fontSize='1.75rem' fontFamily="Anton">{props.jobPost?.title}</TitleTypographyStyled>
                    </Box>
                    <Box flex={1} width={'100%'}
                        sx={{
                            height: '100px',
                        }} >

                        {props.jobPost?.companyName ? <CompanyLogoSection logo={props.jobPost?.logo} /> : <RecruiterLogoSection logo={props.jobPost?.logo} />}

                    </Box>
                </TitlesBoxStyled>

                {matchesMobile ? null :
                    <Box
                        display={'flex'}
                        flexDirection={matchesMobile ? 'column' : 'row'}
                        width={'100%'}
                        borderTop={matchesMobile ? `2px solid ${theme.palette.primary.main}` : 'none'}
                    >
                        {/*Left side of header*/}
                        {matchesMobile ? null : <RoleSummary jobPost={props.jobPost} />}

                        {/*Right side of header*/}
                        {matchesMobile ? null : <CompanySummary jobPost={props.jobPost} />}

                    </Box>
                }
            </Box>
        </HeaderSectionBoxStyled >
    )
}

export default HeaderJobDescription
