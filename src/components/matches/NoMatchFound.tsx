"use client"

/*
| Developed by Reskue
| Filename: NoMatchFound.tsx
| Author: eric@reskue.art
*/

import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

import { theme } from '@/MUI/Theme'
import { styled } from '@mui/system'
import BookCallButton from '../quiz/NextButton';
import PreferencesButton from '../board/PreferencesButton'
import { KablioLogoNoMatchFound } from '@/assets/svgs/KablioLogoNoMatchFound'


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/


const NoMatchFoundBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    width: '65%',
    height: '100vh',
    [theme.breakpoints.down('lg')]: {
        width: '100%',
        padding: '0.3rem',
    },
}))

const TitlesSectionBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '1rem',
    padding: '1rem',
    [theme.breakpoints.down('lg')]: {

    },
}))

const BookCallSectionBoxStyled = styled(Box)(({ theme }) => ({
    borderTop: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: '#FFED82',
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    gap: '1rem',
    padding: '1rem',
    [theme.breakpoints.down('lg')]: {

    },
}))

const SearchPreferencesSectionBoxStyled = styled(Box)(({ theme }) => ({
    borderTop: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    gap: '1rem',
    padding: '1rem',
    [theme.breakpoints.down('lg')]: {},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const NoMatchFound: React.FC = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Render
    //--------------------------------------------------------------------------
    return (
        <NoMatchFoundBoxStyled>
            <Box sx={{ display: matchesMobile ? 'flex' : 'none' }}>
                <KablioLogoNoMatchFound />
            </Box>
            <TitlesSectionBoxStyled>
                <Typography sx={{ fontSize: matchesMobile ? '1.7rem' : '2.188rem', fontWeight: 'bold' }}>You&apos;re fully charged! 🔋🔌</Typography>
                <Typography sx={{ fontSize: '1rem' }}>We&apos;re working hard to bring you more jobs!</Typography>
            </TitlesSectionBoxStyled>
            <BookCallSectionBoxStyled>
                <Typography sx={{ fontSize: '1.063rem', fontWeight: 'bold' }}>We&apos;re low on jobs, but high on help! Book a chat with Matt, our CEO, to get personal help. </Typography>
                <BookCallButton
                    href='https://calendly.com/kablio_hello/30min?month=2024-02'
                    sx={{
                        fontFamily: 'Anton',
                        fontSize: '1rem',
                        fontWeight: 'normal',
                        maxWidth: matchesMobile ? '100%' : '15.5rem',
                        height: '3.125rem'
                    }}>BOOK CALL</BookCallButton>
            </BookCallSectionBoxStyled>
            <SearchPreferencesSectionBoxStyled>
                <Typography sx={{ fontSize: matchesMobile ? '1rem' : '1.25rem', fontWeight: 'bold' }}>Complete your search preferences </Typography>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'normal' }}>The more you tell us, the better recommendations we can give. </Typography>
                <PreferencesButton href='/account/you/preferences' sx={{ maxWidth: '32rem', textTransform: "none", fontWeight: 'normal' }} />
            </SearchPreferencesSectionBoxStyled>
        </NoMatchFoundBoxStyled>
    )
}

export default NoMatchFound