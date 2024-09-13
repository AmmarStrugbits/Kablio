/*
| Developed by Reskue
| Filename: FindContractSection.tsx
| Author: eric@reskue.art
*/

"use client"

import { theme } from '@/MUI/Theme'
import { Box, styled, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ContractKonnectors from '@/assets/images/ContractKonnectors.png'
import ContractKonnectorsMobile from '@/assets/images/ContractKonnectorsMobile.png'
import ComingSoon from '../ComingSoon'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FindContractSectionProps //extends buttonProps
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
    backgroundColor: 'rgba(249, 249, 249, 1)',
    [theme.breakpoints.down('lg')]: {
        padding: "1rem",
        paddingTop: "4rem",
        paddingBottom: "4rem",
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
const FindContractSection: React.FC<FindContractSectionProps> = ({ children }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('lg'));
    // Render
    //--------------------------------------------------------------------------
    return (
        <FindRewardsSectionBoxStyled>
            <ComingSoon />
            <TitleContainerBoxStyled>
                <ContainerTitleSubtitle style={{}}>
                    <h2>
                        <span>Find a contract with terms that work for you
                        </span>
                    </h2>
                </ContainerTitleSubtitle>
                <SubtitleBoxStyled>
                    <h3>
                        Activate as many contracts as you want.
                    </h3>
                </SubtitleBoxStyled>
            </TitleContainerBoxStyled>
            <Image src={matchesMobile ? ContractKonnectorsMobile : ContractKonnectors} alt={'Contract view'} width={matchesMobile ? 300 : 820} />
        </FindRewardsSectionBoxStyled>
    )
}

export default FindContractSection
