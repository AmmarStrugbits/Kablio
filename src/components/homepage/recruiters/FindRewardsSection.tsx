"use client"

import React from 'react'

import { theme } from '@/MUI/Theme'
import { Box, styled, useMediaQuery } from '@mui/material'

import StepOne from '@/assets/images/StepOne.png'
import StepTwo from '@/assets/images/StepTwo.png'
import StepThree from '@/assets/images/StepThree.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Image from 'next/image'
import Link from 'next/link'
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

const FindRewardsSectionBoxStyled = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: "10rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "42rem",
    gap: "3.13rem",
    background: '#00FBDF',
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
    gap: "2rem",

    [theme.breakpoints.down('lg')]: {
        gap: "1.5rem",
    },
}))

const BackgroundBlur = styled(Box)(({ theme }) => ({
    position: 'relative',

    background: `radial-gradient(circle, #DCFFD4 0%, transparent 0%)`,
    borderRadius: '50%',
    zIndex: '1',

    "&:after": {
        content: "''",
        width: '125%',
        height: '125%',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        background: "#DCFFD4",
        borderRadius: '50%',
        opacity: 1,
        filter: "blur(1rem)",
    },
    [theme.breakpoints.down('lg')]: {
        "&:after": {

            width: '115%',
            height: '150%',

        },
    },
}))



const StepContainerTitleSubtitle = styled(Box)(({ theme }) => ({
    color: "Black",
    fontWeight: 400,
    fontSize: "3.13rem",

    textAlign: 'center',
    fontFamily: "Anton",
    textTransform: "uppercase",
    position: 'relative',
    zIndex: '2',

    [theme.breakpoints.down('lg')]: {
        fontSize: "1.875rem",
    },
}))

const SubtitleBoxStyled = styled(Box)(({ theme }) => ({

    color: "white",
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "1.8rem",
    textAlign: 'center',
    fontFamily: "Roboto",
    [theme.breakpoints.down('lg')]: {
        fontSize: "1rem",
    },
}))

const StepContainerBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",
    [theme.breakpoints.down('lg')]: {
        flexDirection: "column",
    },
}))

const StepBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "23.75rem",
    height: "16.75rem",

    backgroundColor: "#1A1B23",
    borderRadius: "1.5rem",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",

    fontSize: "1.5rem",
    lineHeight: "2.5rem",

    padding: "2rem",
    gap: "0.8rem",

    [theme.breakpoints.down('lg')]: {
        height: "11.75rem",

        gap: "0.6rem",
    },

    [theme.breakpoints.down('md')]: {
        width: "21rem",
    },
}))

const StepBoxTitle = styled('h4')(({ theme }) => ({
    fontWeight: 500,
    fontFamily: "Anton",
    color: 'white',
    alignSelf: "center",
    fontSize: "1.875rem",
    textAlign: 'center',

    [theme.breakpoints.down('lg')]: {
        fontSize: "1.375rem",
    },
}))

const StepBoxSubtitle = styled('h5')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: "Roboto",
    fontSize: "1.125rem",
    color: "#D9D9D9",

    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
        fontSize: "1rem",
    },
}))

const LinkBoxStyled = styled(Box)(() => ({
    background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,
    backgroundClip: 'text',
    color: 'transparent',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '1rem',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: '0.5rem',
}))


const IconBoxStyled = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const FindRewardsSection: React.FC = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('lg'));
    // Render
    //--------------------------------------------------------------------------
    return (
        <FindRewardsSectionBoxStyled>
            <ComingSoon />
            <TitleContainerBoxStyled>
                <BackgroundBlur>
                    <StepContainerTitleSubtitle style={{}}>
                        <h2>
                            <span> + </span>
                            <span> find new {matchesMobile ? <br /> : " "}</span>
                            <span style={{ color: "white", backgroundColor: "black", padding: "0rem 0.5rem" }}>
                                jobs assignments
                            </span>
                        </h2>
                    </StepContainerTitleSubtitle>
                </BackgroundBlur >
                <SubtitleBoxStyled>
                    <h3 style={{ color: "#505662", padding: "0rem 0.5rem" }}>
                        Save time on BD efforts by accessing qualified jobs from top employers.
                    </h3>
                </SubtitleBoxStyled>
            </TitleContainerBoxStyled>
            <StepContainerBoxStyled>
                <StepBox>
                    <Image
                        src={StepOne}
                        alt="FirstStep"
                        width={matchesMobile ? 30 : 50}
                        height={matchesMobile ? 30 : 50}
                    />
                    <StepBoxTitle>Find assignement</StepBoxTitle>
                    <StepBoxSubtitle>Swipe through employer jobs</StepBoxSubtitle>

                    <Link href='/auth/signup' passHref>
                        <LinkBoxStyled>
                            <Box>
                                Access this
                            </Box>
                            <IconBoxStyled>
                                <ArrowForwardIcon sx={{ color: "#00FBDF" }} />
                            </IconBoxStyled>
                        </LinkBoxStyled>
                    </Link>
                </StepBox>

                <StepBox>
                    <Image
                        src={StepTwo}
                        alt="StepTwo"
                        width={matchesMobile ? 30 : 50}
                        height={matchesMobile ? 30 : 50}
                    />
                    <StepBoxTitle>Submit candidates</StepBoxTitle>
                    <StepBoxSubtitle>Submit them your way</StepBoxSubtitle>

                    <Link href='/auth/signup' passHref>
                        <LinkBoxStyled>
                            <Box>
                                See how
                            </Box>
                            <IconBoxStyled>
                                <ArrowForwardIcon sx={{ color: "#00FBDF" }} />
                            </IconBoxStyled>
                        </LinkBoxStyled>
                    </Link>
                </StepBox>

                <StepBox>
                    <Image
                        src={StepThree}
                        alt="StepThree"
                        width={matchesMobile ? 30 : 50}
                        height={matchesMobile ? 30 : 50}
                    />
                    <StepBoxTitle>Get paid</StepBoxTitle>
                    <StepBoxSubtitle>Keep 100% of your fee</StepBoxSubtitle>
                    <Link href='/auth/signup' passHref>
                        <LinkBoxStyled>
                            <Box>
                                Make this happen
                            </Box>
                            <IconBoxStyled>
                                <ArrowForwardIcon sx={{ color: "#00FBDF" }} />
                            </IconBoxStyled>
                        </LinkBoxStyled>
                    </Link>
                </StepBox>
            </StepContainerBoxStyled>
        </FindRewardsSectionBoxStyled>
    )
}

export default FindRewardsSection
