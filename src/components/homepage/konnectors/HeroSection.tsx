/*
| Developed by Reskue
| Filename: HeroSection.tsx
| Author: eric@reskue.art
*/

"use client"

import React from 'react'
import Image from 'next/image'

import { Box, Button, styled, useMediaQuery } from '@mui/material'

import gridWallPaperKablio from '@/assets/images/gridWallPaperKablio.png'
import KonnectorLogoHomepage from '@/assets/images/KonnectorLogoHomepage.png'
import { KablioMiniLogo } from '@/assets/svgs/miniLogo'
import { theme } from '@/MUI/Theme'

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

const H1Wrapper = styled('h1')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
});

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


const Title = styled('span')(({ theme }) => ({
    lineHeight: "1.15",
    fontFamily: "Anton",
    textTransform: 'capitalize',
    // fontSize: "5.375rem",
    color: "black",

    [theme.breakpoints.down('lg')]: {
        // fontSize: "3.8rem",
    },

    [theme.breakpoints.down('md')]: {
        // fontSize: "3rem",
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
    // textTransform: "uppercase",
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
                                <span style={{ fontSize: matchesMobile ? '1.875rem' : '3.75rem' }}> EARN REFERRAL BONUSES AS A {matchesMobile ? <br /> : null}</span>

                                <span style={{ fontSize: matchesMobile ? '3.125rem' : '6.875em' }}> KONNECTOR </span>
                                <span style={{ fontSize: matchesMobile ? '1.875rem' : '3.75rem' }}> IN </span>
                                <br />
                                <span style={{ fontSize: matchesMobile ? '2.8rem' : '2.9rem' }}>
                                    (CONSTRUCTION + {matchesMobile ? <br /> : null} ENERGY +{matchesMobile ? <br /> : null} ENGINEERING)</span>
                            </Title>
                        </H1Wrapper>
                        <Subtitle>Anybody can be a Konnector. {matchesMobile ? <br /> : null} Your network is valuable. </Subtitle>
                        <ButtonsBoxStyled>
                            <ButtonStyled
                                variant="contained"
                                startIcon={<KablioMiniLogo />}
                            >
                                <a href='https://at4r1q5j37o.typeform.com/to/CvzQJ2v2' target='_blank'>
                                    Pre-register
                                </a>
                            </ButtonStyled>
                        </ButtonsBoxStyled>
                    </TitlesBoxStyled>
                    <ImageBoxStyled>
                        <Image
                            src={KonnectorLogoHomepage}
                            alt="Konnector Logo Homepage"
                            style={{
                                width: "550px",
                                height: "auto"
                            }}
                        />
                    </ImageBoxStyled>
                </Box>
            </HeroSectionBoxStyled >
        </>
    )
}

export default HeroSection
