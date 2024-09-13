/*
| Developed by Reskue
| Filename: ReferralLink.tsx
| Author: eric@reskue.art
*/

"use client"

import { theme } from '@/MUI/Theme'
import { Box, styled, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ReferralLinkLogo from '@/assets/images/ReferralLinkLogo.png'
import ComingSoon from '../ComingSoon'
// import ReferralLinkLogoMobile from '@/assets/images/ReferralLinkLogoMobile.png'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ReferralLinkProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const FindRewardsSectionBoxStyled = styled(Box)(({ theme }) => ({
    padding: "1rem",
    position: 'relative',
    paddingTop: "10rem",
    paddingBottom: "10rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "42rem",
    gap: "3.13rem",
    backgroundColor: 'rgba(255, 237, 130, 1)',
    [theme.breakpoints.down('lg')]: {
        padding: "1rem",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        minHeight: "34rem",
    },

}))

const TitleContainerBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",

    [theme.breakpoints.down('lg')]: {
        gap: "2rem",
    },
}))

const ContainerTitleSubtitle = styled(Box)(({ theme }) => ({
    color: "black",
    fontWeight: 400,
    fontSize: "3.13rem",
    textAlign: 'center',
    fontFamily: "Anton",
    position: 'relative',
    zIndex: '2',

    whiteSpace: 'pre-wrap',

    [theme.breakpoints.down('lg')]: {
        fontSize: "1.875rem",
    },
}))

const SubtitleBoxStyled = styled(Box)(({ theme }) => ({
    color: "rgba(80, 86, 98, 1)",
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "1.8rem",
    textAlign: 'center',
    fontFamily: "Roboto",
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.125rem',
    },
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ReferralLink: React.FC<ReferralLinkProps> = ({ children }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('lg'));
    // Render
    //--------------------------------------------------------------------------
    return (
        <FindRewardsSectionBoxStyled>
            <ComingSoon />
            <TitleContainerBoxStyled>
                <ContainerTitleSubtitle style={{}}>
                    <h2>
                        Share your unique referral links
                    </h2>
                </ContainerTitleSubtitle>
                <SubtitleBoxStyled>
                    <h3>
                        Share freely, but remember, submitting poor leads will hurt your rating
                    </h3>
                </SubtitleBoxStyled>
            </TitleContainerBoxStyled>
            <Image src={matchesMobile ? ReferralLinkLogo : ReferralLinkLogo} alt={'Contract view'} width={matchesMobile ? 175 : 300} />
        </FindRewardsSectionBoxStyled>
    )
}

export default ReferralLink
