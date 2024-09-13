/*
| Developed by Reskue
| Filename: FooterSection.tsx
| Author: eric@reskue.art
*/

"use client"

import React from 'react'
import Image from 'next/image'

import { Box, styled } from '@mui/material'

import GiantKablioLogo from '@/assets/images/GiantKablioLogo.png'
import Footer from '../homepage/Footer'


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FooterSectionProps //extends buttonProps
{
    children?: React.ReactNode
    backgroundColor?: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const FooterSectionBoxStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<{ backgroundColor: string | undefined; }>(({ theme, backgroundColor = 'white' }) => ({
    backgroundColor: backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5rem',
    [theme.breakpoints.down('md')]: {},
}));


/////////////////////////////////////////////////////////////////////////

const ImageBoxStyled = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    width: "100vw",
});

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const FooterSection: React.FC<FooterSectionProps> = (props: FooterSectionProps) => {
    // Render
    //--------------------------------------------------------------------------
    return (
        <FooterSectionBoxStyled backgroundColor={props.backgroundColor}>
            <ImageBoxStyled>
                <Image
                    src={GiantKablioLogo}
                    alt="Big Kablio Logo"
                    layout="intrinsic"
                />
            </ImageBoxStyled>
            <Footer />
        </FooterSectionBoxStyled >
    )
}

export default FooterSection
