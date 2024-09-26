"use client";

import Image from "next/image";
import React from "react";

import { Box, keyframes, styled, useMediaQuery } from "@mui/material";

import KablioWallPaperInfiniteA from "@/assets/images/KablioWallPaperInfiniteA.png";
import KablioWallPaperInfiniteB from "@/assets/images/KablioWallPaperInfiniteB.png";
import { theme } from "@/MUI/Theme";

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const moveUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const moveDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const BoxViewStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    position: "relative",
    backgroundColor: "black",
    minHeight: "100vh",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
        minHeight: "30rem",
    },
}));

const ImageBoxStyled = styled(Box)(({ theme }) => ({
    width: "90vw",
    height: "75vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
        width: "100vw",
        height: "auto",
    },
}));

const IframeContainer = styled('div')<{ isMobile: boolean }>(({ isMobile }) => ({
    position: 'relative',
    paddingBottom: isMobile ? 'calc(171.4% + 41px)' : 'calc(44.635416666666664% + 41px)',
    height: 0,
    width: '100%',
    maxWidth: isMobile ? '100%' : '90%',
}));

const StyledIframe = styled('iframe')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    colorScheme: 'light',
});

const AnimatedImagesContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gap: "1rem",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));


const AnimatedImageWrapper = styled(Box)<{ animation: string }>(({ animation }) => ({
    width: "100%",
    height: "100%",
    animation: `${animation} 10s linear infinite`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (-webkit-min-device-pixel-ratio: 0)": { // Safari-only CSS
        animation: `${animation} 10s linear infinite`,
        willChange: "transform",
        backfaceVisibility: "hidden",
    },
}));

const WallpaperImage = styled(Image)({
    width: "100%",
    height: "auto",
    objectFit: "cover",
    objectPosition: "center",
});

const getAnimatedImages = (isMobile: boolean) => {
    const images = [];
    const count = isMobile ? 1 : 4;
    for (let i = 0; i < count; i++) {
        images.push(
            <AnimatedImageWrapper key={`A-${i}`} animation={moveUp}>
                <WallpaperImage src={KablioWallPaperInfiniteA} alt={`Kablio WallPaper Infinite A-${i}`} />
            </AnimatedImageWrapper>,
            <AnimatedImageWrapper key={`B-${i}`} animation={moveDown}>
                <WallpaperImage src={KablioWallPaperInfiniteB} alt={`Kablio WallPaper Infinite B-${i}`} />
            </AnimatedImageWrapper>
        );
    }
    return images;
};

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const ScreenShotsSection: React.FC = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <BoxViewStyled>
            <AnimatedImagesContainer>{getAnimatedImages(matchesMobile)}</AnimatedImagesContainer>
            <ImageBoxStyled>
                <IframeContainer isMobile={matchesMobile}>
                    <StyledIframe
                        src={matchesMobile
                            ? "https://demo.arcade.software/hL1OMU9myvOzrxT8100F?embed&show_copy_link=true"
                            : "https://demo.arcade.software/V1chyyDYKtsDrSw29GJA?embed&show_copy_link=true"
                        }
                        title={matchesMobile ? "kablio.com/account/matches" : "Arcade Demo"}
                        loading="lazy"
                        allowFullScreen
                        allow="clipboard-write"
                    />
                </IframeContainer>
            </ImageBoxStyled>
        </BoxViewStyled>
    );
};

export default ScreenShotsSection;