/*
| Developed by Reskue
| Filename: FeaturesSection.tsx
| Author: eric@reskue.art
*/

"use client"

import React from 'react'

import { Box, styled, useMediaQuery } from '@mui/material'

import RelevantJobseeker from '@/assets/images/RelevantJobseeker.png'
import ScrollFreeZone from '@/assets/images/ScrollFreeZone.png'
import InfoCardwithIconVertical from './InfoCardWithIconVertical'
import FindTheRightRecruiterMin from '@/assets/images/FindTheRightRecruiterMin.png'
import { theme } from '@/MUI/Theme'
import ComingSoon from './ComingSoon'

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
    position: 'relative',
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
    padding: '2rem',
    paddingLeft: "2rem",
    paddingRight: "2rem",

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
    gap: "11rem",

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
            <ComingSoon />
            <TitleBoxStyled>
                <h2>
                    <span>Candidates </span>
                    <span style={{ color: "white", backgroundColor: "black", padding: "0rem 0.5rem" }}>
                        matched
                    </span>

                    <span> to your jobs</span>
                </h2>
            </TitleBoxStyled>

            <FeaturesBoxStyled>
                <InfoCardwithIconVertical
                    title="QUALITY INBOUND ONLY"
                    text="Only revelant talent sees your jobs"
                    icon={RelevantJobseeker} iconPosition="bottom"
                    backgroundColor="#00FBDF"
                    iconWidth={5}
                    width={18}
                />
                <InfoCardwithIconVertical
                    title="smart talent outreach"
                    text="Message a talent shortlist"
                    icon={FindTheRightRecruiterMin}
                    iconPosition="bottom"
                    backgroundColor="#00FBDF"
                    iconWidth={matchesMobile ? 6 : 9}
                    width={18}
                />
                <InfoCardwithIconVertical
                    title="Swipe through profiles"
                    text="Reject, save or proceed"
                    icon={ScrollFreeZone}
                    iconPosition="bottom"
                    backgroundColor="#00FBDF"
                    iconWidth={matchesMobile ? 3 : 5}
                    width={18}
                />
            </FeaturesBoxStyled>
        </ApplicationPresentationSection >
    )
}

export default FeaturesSection
