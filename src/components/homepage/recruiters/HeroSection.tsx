"use client"

/*
| Developed by Reskue
| Filename: HeroSection.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import Image from 'next/image'

import { Box, Button, Typography, styled, useMediaQuery } from '@mui/material'
import { theme } from '@/MUI/Theme'

import gridWallPaperKablio from '@/assets/images/gridWallPaperKablio.png'
import EmployerLanding from '@/assets/images/EmployerLanding.png'
import { KablioMiniLogo } from '@/assets/svgs/miniLogo'

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

const BackgroundBoxStyled = styled(Box)(() => ({
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: "0px",
    height: '115vh',
    width: "100%",
    objectFit: "cover",
    zIndex: "-1",
    background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,
    marginBottom: '0',
}))

const ImageStyled = styled(Image)(() => ({
    position: "absolute",
    top: "30%",
    bottom: "0px",
    right: "0%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden"
}))

const HeroSectionBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "85vh",
    width: "100vw",
    objectFit: "contain",
    position: "relative",
    background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,

    [theme.breakpoints.down('md')]: {
        alignItems: 'flex-start',
    },
}))

const TitlesBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
    paddingLeft: "1rem",
    paddingRight: "1rem",
    height: '100%',
    [theme.breakpoints.down('lg')]: {
        width: "50%",
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    [theme.breakpoints.down('md')]: {
        width: "100%",
    },
}))

const H1Wrapper = styled('h1')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
});

const Title = styled(Typography)(({ theme }) => ({
    lineHeight: "1",
    fontFamily: "Anton",
    fontSize: "5rem",
    color: "black",

    [theme.breakpoints.down('lg')]: {
        fontSize: "3.8rem",
    },

    [theme.breakpoints.down('md')]: {
        fontSize: "3rem",
    },
}))

const Subtitle = styled('h5')(({ theme }) => ({
    lineHeight: "1.25",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "rgba(80, 86, 98, 1)",

    [theme.breakpoints.down('md')]: {
        fontSize: "1.125rem",
    },
}))



const ButtonsBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: "1rem",
    marginBottom: "2rem",
    width: '100%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'flex-start',
    },
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    textTransform: "uppercase",
    fontFamily: "Anton",
    fontWeight: "500",
    fontSize: "1.30rem",
    width: '50%',
    minWidth: 'fit-content',

    [theme.breakpoints.down('lg')]: {
        width: '50%',
        maxWidth: '400px',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const ImageBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('lg')]: {
        width: '50%',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HeroSection: React.FC = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    // Render
    //--------------------------------------------------------------------------
    return (
        <>
            <BackgroundBoxStyled>

                <ImageStyled
                    src={gridWallPaperKablio}
                    alt="gridWallPaperKablio"
                    style={{
                        position: "absolute",
                        top: "30%",
                        bottom: "0px",
                        right: "0%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        overflow: "hidden"
                    }}
                />
            </BackgroundBoxStyled>
            <HeroSectionBoxStyled>
                <Box
                    sx={{
                        width: '87rem',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <TitlesBoxStyled>

                        <H1Wrapper>
                            <Title>
                                <span style={{ fontSize: '0.7em' }}>JOB MARKETPLACE FOR {matchesMobile ? <br /> : null}</span>
                                RECRUITERS
                                <span style={{ fontSize: '0.7em' }}> IN </span>
                                <br />
                                <span style={{ fontSize: '0.8em' }}> CONSTRUCTION +<br />ENERGY +<br />ENGINEERING<br /> </span>
                            </Title>
                        </H1Wrapper>
                        <Subtitle>We make it less tough to find good candidates + job assignments</Subtitle>
                        <ButtonsBoxStyled>
                            <ButtonStyled
                                href='https://calendly.com/kablio_hello/30min?month=2024-02'
                                variant="contained"
                                startIcon={<KablioMiniLogo />}
                            >
                                GET EARLY ACCESS
                            </ButtonStyled>
                            <ButtonStyled
                                sx={{
                                    textTransform: "none",
                                }}
                                href='/pre-register/employer-recruiter'
                                variant="outlined"
                            >
                                Pre-register
                            </ButtonStyled>
                        </ButtonsBoxStyled>
                    </TitlesBoxStyled>
                    <ImageBoxStyled>
                        <Image
                            src={EmployerLanding}
                            alt="Employer Landing"
                            style={{
                                width: "550px",
                                height: "auto"
                            }}
                        />
                    </ImageBoxStyled>
                </Box>
            </HeroSectionBoxStyled>
        </>
    )
}

export default HeroSection
