"use client"

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Typography, styled } from '@mui/material';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

interface ContainerProps {
    iconPosition: 'top' | 'left' | 'right' | 'bottom';
    width: number;
}

interface ImageSize {
    iconWidth: number;
}

export interface InfoCardWithIconHorizontalProps extends ContainerProps, ImageSize {
    title: string;
    text: JSX.Element;
    icon: StaticImageData;
    backgroundColor: string;
}

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const BackgroundGradient = styled(Box)<{ backgroundColor: string }>(({ theme, backgroundColor }) => ({

    height: "100%",
    display: 'flex',
    background: `radial-gradient(circle, ${backgroundColor} 0%, transparent 0%)`,
    borderRadius: '50%',
    position: 'relative',

    "&:after": {
        content: "''",
        width: '125%',
        height: '80%',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        background: backgroundColor,
        borderRadius: '100%',
        opacity: 0.7,
        filter: "blur(4rem)",
        [theme.breakpoints.down('md')]: {

            height: '90%',
            width: '250%',
        },
    },
}));

const Container = styled(Box)<ContainerProps>(({ theme, iconPosition, width }) => ({
    display: 'flex',
    flexDirection: iconPosition === 'top' ? 'column' :
        iconPosition === 'bottom' ? 'column-reverse' :
            iconPosition === 'left' ? 'row' :
                'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: iconPosition === 'top' || iconPosition === 'bottom' ? 'center' : 'left',
    margin: '0.625px',
    width: `${width}rem`,
    height: '250px',
    [theme.breakpoints.down('md')]: {
        width: "100%",
        gap: '1rem'
    },
}));

const TextZone = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: "0.5rem",
    paddingLeft: "2rem",
    paddingRight: "1rem",
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        width: "100%",
        paddingLeft: "0rem",
        paddingRight: "0rem",
        gap: "0.5rem",
        marginBottom: '1rem',
    },
}));

const Title = styled('h3')(({ theme }) => ({
    textTransform: 'uppercase',
    fontFamily: "Anton",
    color: "black",
    flex: 1,
    fontWeight: '400',
    lineHeight: '2.19rem',
    fontSize: '1.9rem',
    position: 'relative',
    zIndex: 1,
    wordWrap: "break-word",

    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
    },
}));

const Text = styled(Typography)(({ theme }) => ({
    display: 'block',
    fontFamily: "Roboto",
    color: "#505662",
    flex: 1,
    fontWeight: '400',
    lineHeight: '1.88rem',
    fontSize: '1.25rem',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
    },
}));

const StyledImage = styled(Image)<ImageSize>(({ iconWidth }) => ({
    maxWidth: `${iconWidth}rem`,
    height: `auto`,
    zIndex: 1,
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const InfoCardWithIconHorizontalJobSeeker: React.FC<InfoCardWithIconHorizontalProps> = (props: InfoCardWithIconHorizontalProps) => {
    const { icon, iconPosition, backgroundColor, title, text, iconWidth, width } = props

    // Render
    //--------------------------------------------------------------------------
    return (
        <Box>
            <BackgroundGradient backgroundColor={backgroundColor}>
                <Container iconPosition={iconPosition} width={width} >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignContent: 'flex-start'
                        }}>
                        <StyledImage src={icon} alt="Icon" iconWidth={iconWidth} />
                    </Box>
                    <TextZone>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                    </TextZone>
                </Container>
            </BackgroundGradient>
        </Box>
    );
}

export default InfoCardWithIconHorizontalJobSeeker
