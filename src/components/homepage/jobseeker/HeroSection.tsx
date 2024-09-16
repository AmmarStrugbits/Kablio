"use client"

/*
| Developed by Reskue
| Filename: HeroSection.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import Image from 'next/image'
import { Box, Button, styled, useMediaQuery } from '@mui/material'
import FirstPageDesign from '@/assets/images/FirstPageDesign.png'
import FirstPageIcons from '@/assets/images/FirstPageIcons.png'
import { KablioMiniLogo } from '@/assets/svgs/miniLogo'
import { theme } from '@/MUI/Theme'
import { useAuth } from '@/hooks/useAuth'

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
    height: '100vh',
    width: "100%",
    objectFit: "cover",
    zIndex: "-1",
    background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,
    marginBottom: '0',

}))

const ImageStyled = styled(Image)(({ theme }) => ({
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: "0px",
    overflow: 'hidden',
    width: "100%",
    objectFit: "cover",
    zIndex: "-1",
    [theme.breakpoints.down('lg')]: {

        height: '100vh',
    },
}))

const HeroSectionBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "85vh",
    width: "100vw",
    objectFit: "contain",
    position: "relative",

    [theme.breakpoints.down('md')]: {
        width: "100%",
        height: "85vh",
        alignItems: 'flex-start',
    },
}))

const TitlesBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    [theme.breakpoints.down('lg')]: {
        width: "50%",
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    [theme.breakpoints.down('md')]: {

        justifyContent: 'flex-start',
        paddingTop: '1rem',
        width: "100%",
    },
}))

const H1Wrapper = styled('h1')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
});

const Title = styled('span')(({ theme }) => ({
    lineHeight: "1",
    fontFamily: "Anton",
    fontSize: "9rem",
    color: "black",
    height: "auto",
    [theme.breakpoints.down('lg')]: {
        fontSize: "6.5rem",
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "5rem",
    },
}))

const Subtitle = styled('span')(({ theme }) => ({
    lineHeight: "1.25",
    fontFamily: "Anton",
    fontSize: "3.375rem",
    color: "black",
    height: "auto",
    [theme.breakpoints.down('lg')]: {
        fontSize: "2.5rem",
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "2.5rem",
    },
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    textTransform: "uppercase",
    fontFamily: "Anton",
    fontWeight: "500",
    fontSize: "1.30rem",
    width: '50%',
    minWidth: 'fit-content',
    maxWidth: '300px',

    [theme.breakpoints.down('lg')]: {
        width: '100%'
    },
    [theme.breakpoints.down('md')]: {
        maxWidth: '500px',
        width: '100%',
        marginTop: '2rem'
    },
}))

const ImageBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',

    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HeroSection: React.FC = () => {
    const { checkCredentials } = useAuth();

    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Render
    //--------------------------------------------------------------------------
    return (
        <>
            <BackgroundBoxStyled>
                <ImageStyled
                    src={FirstPageDesign}
                    alt="Kablio design"
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
                            <Title>FIND {matchesMobile ? <br /> : null}THAT JOB</Title>
                            <Subtitle>IN CONSTRUCTION +<br />ENERGY +<br />ENGINEERING</Subtitle>
                        </H1Wrapper>
                        <Box>
                            <ButtonStyled
                                href={checkCredentials() ? '/account/matches' : '/auth/signup'}
                                variant="contained"
                                startIcon={<KablioMiniLogo />}
                            >
                                Discover Jobs
                            </ButtonStyled>
                        </Box>
                    </TitlesBoxStyled>
                    <ImageBoxStyled>
                        <Image
                            src={FirstPageIcons}
                            alt="Kablio design"
                            style={{
                                width: "30rem",
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
