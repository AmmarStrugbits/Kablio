"use client"

/*
| Developed by Reskue
| Filename: BenefitsSection.tsx
| Author: eric@reskue.art
*/

import React from 'react'

import { theme } from '@/MUI/Theme'
import { Box, useMediaQuery } from '@mui/material'

import MakeBrandPop from '@/assets/images/MakeBrandPop.png'
import AIPowerForCV from '@/assets/images/AIPowerForCV.png'
import { styled } from '@mui/system'
import InfoCardWithIconHorizontal from '../InfoCardWithIconHoriztonal'
import ComingSoon from '../ComingSoon'


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
const BenefitsSectionBoxStyled = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: "rgba(255, 237, 130, 1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: '44rem',
    paddingLeft: '15rem',
    paddingRight: '15rem',
    [theme.breakpoints.down('md')]: {

        height: '44rem',
        gap: '1rem',
        padding: "1.2rem",
        paddingTop: "5rem",
        paddingBottom: "5rem",
    },
}));

const InfoCardsContainerBoxStyled = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5rem'
    },
}));
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const BenefitsSection: React.FC = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Render
    //--------------------------------------------------------------------------
    return (
        <BenefitsSectionBoxStyled>
            <ComingSoon />
            <InfoCardsContainerBoxStyled>
                <InfoCardWithIconHorizontal
                    title="MAKE YOUR RECRUITER BRAND POP"
                    text={<span>Make noise.<br /> Be the recruiter everybody wants to work with.</span>}
                    icon={MakeBrandPop}
                    iconposition={matchesMobile ? "bottom" : "left"}
                    backgroundColor="#DCFFD4"
                    iconwidth={matchesMobile ? 6.25 : 10}
                    width={50}
                />

                <InfoCardWithIconHorizontal
                    title="AI-POWER YOUR WRITING"
                    text={<span>Easily generate your profile and technical job descriptions</span>}
                    backgroundColor="#00FBDF"
                    icon={AIPowerForCV}
                    iconposition={matchesMobile ? "bottom" : "right"}
                    iconwidth={matchesMobile ? 6.875 : 12}
                    width={50}
                />

            </InfoCardsContainerBoxStyled>

        </BenefitsSectionBoxStyled >
    )
}

export default BenefitsSection
