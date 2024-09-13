/*
| Developed by Reskue
| Filename: BenefitsSection.tsx
| Author: eric@reskue.art
*/

"use client"

import React from 'react'
import { theme } from '@/MUI/Theme'
import { Box, styled, useMediaQuery } from '@mui/material'
import HonestJobDescriptions from '@/assets/images/HonestJobDescriptions.png'
import AIPowerForCV from '@/assets/images/AIPowerForCV.png'
import InfoCardWithIconHorizontalJobSeeker from './InfoCardWithIconHorizontalJobSeeker'
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
        height: '40rem',
        gap: '1rem',
        padding: "1rem",
        paddingTop: "5rem",
        paddingBottom: "4rem",
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
            <Box>
                <InfoCardWithIconHorizontalJobSeeker
                    title="honest job descriptions"
                    text={<span>Always same format{matchesMobile ? " " : <br />}+ we point out missing information</span>}
                    backgroundColor="#00FBDF"
                    icon={HonestJobDescriptions}
                    iconPosition={matchesMobile ? "bottom" : "right"}
                    iconWidth={matchesMobile ? 15 : 18.5}
                    width={51}
                />
            </Box>
            <Box>
                <InfoCardWithIconHorizontalJobSeeker
                    title="AI-power your cv + Profile"
                    text={<span>Easily generate content with AI + other tools</span>}
                    icon={AIPowerForCV}
                    iconPosition={matchesMobile ? "bottom" : "left"}
                    backgroundColor="#DCFFD4"
                    iconWidth={matchesMobile ? 6.85 : 12}
                    width={50}
                />
            </Box>
        </BenefitsSectionBoxStyled >


    )
}

export default BenefitsSection
