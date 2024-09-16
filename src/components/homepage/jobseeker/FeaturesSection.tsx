"use client"

/*
| Developed by Reskue
| Filename: FeaturesSection.tsx
| Author: eric@reskue.art
*/

import React from 'react'

import { Box, styled, useMediaQuery } from '@mui/material'

import RelevantJobseeker from '@/assets/images/RelevantJobseeker.png'
import JobMatches from '@/assets/images/JobMatches.png'
import ScrollFreeZone from '@/assets/images/ScrollFreeZone.png'
import InfoCardwithIconVertical from '../InfoCardWithIconVertical'
import { theme } from '@/MUI/Theme'
import InfoCardwithIconVerticalJobSeeker from './InfoCardWithIconVerticalJobSeeker'


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

const ApplicationPresentationSection = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: '1rem',
    paddingTop: '5rem',
    paddingBottom: '5rem',

    gap: '1rem',

    backgroundColor: "#F5F4ED",

    [theme.breakpoints.down('lg')]: {
        paddingTop: '2rem',
        paddingBottom: '3rem',
    },
}))

const TitleBoxStyled = styled(Box)(({ theme }) => ({
    color: "black",
    fontWeight: "400",
    fontSize: "3rem",
    lineHeight: "4rem",
    textAlign: 'center',
    fontFamily: "Anton",
    paddingTop: '2rem',
    // paddingLeft: "2rem",
    // paddingRight: "2rem",

    [theme.breakpoints.down('lg')]: {
        flexDirection: "column",
        fontSize: "1.875rem",
        lineHeight: "2.5rem",
    },
}))

const FeaturesBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "#F5F4ED",
    gap: "10rem",

    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        gap: "0.1rem",
    },
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const FeaturesSection: React.FC = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    // Render
    //--------------------------------------------------------------------------
    return (
        <ApplicationPresentationSection>
            <TitleBoxStyled>
                <h2>
                    <span>Discover jobs </span>
                    <span style={{ color: "white", backgroundColor: "black", padding: "0rem 0.5rem" }}>
                        5x faster
                    </span>
                    <span> without endless scrolling</span>
                </h2>
            </TitleBoxStyled>

            <FeaturesBoxStyled>
                <InfoCardwithIconVerticalJobSeeker
                    title="personalised recommendations"
                    text="AI-powered matches"
                    icon={RelevantJobseeker} iconPosition="bottom"
                    backgroundColor="#00FBDF"
                    iconWidth={5}
                    width={13}
                />
                <InfoCardwithIconVerticalJobSeeker
                    title="Companies apply to you"
                    text="Make yourself a target"
                    icon={JobMatches}
                    iconPosition="bottom"
                    backgroundColor="#00FBDF"
                    iconWidth={matchesMobile ? 6 : 9}
                    width={13}
                />
                <InfoCardwithIconVerticalJobSeeker
                    title="Swipe Experience"
                    text="Skip, save or apply"
                    icon={ScrollFreeZone}
                    iconPosition="bottom"
                    backgroundColor="#00FBDF"
                    iconWidth={matchesMobile ? 4 : 5}
                    width={13}
                />
            </FeaturesBoxStyled>
        </ApplicationPresentationSection >
    )
}

export default FeaturesSection
