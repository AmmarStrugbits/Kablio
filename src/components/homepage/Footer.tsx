"use client"

/*
| Developed by Reskue
| Filename: Footer.tsx
| Author: eric@reskue.art
*/

import React from 'react'

import Link from 'next/link'

import { Box, Typography, styled } from '@mui/material'

import { Instagram } from '@/assets/svgs/Instagram'
import { LinkedIn } from '@/assets/svgs/LinkedIn'
import { LinkedinLink, instagramLink } from '@/shared/const/SocialMediaLink'
import { theme } from '@/MUI/Theme'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FooterProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/


const LinkFooterBoxStyled = styled(Box)({
    display: "flex",
    flex: '1',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingTop: "1rem",
    paddingBottom: "1rem",

    fontSize: "1.2rem",
    [theme.breakpoints.down('lg')]: {
        fontSize: "1.2rem",
    },
    [theme.breakpoints.down('md')]: {
        flex: '1',
    },
});

const SocialLinksBoxStyled = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
});

const LinksBoxStyled = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0rem",
});

const LegalLinksBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: '1.5rem',

    fontSize: '0.85rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '0.85rem',
        gap: '1rem',
    },
}));

const LinkStyled = styled(Link)(() => ({
    color: 'white',
}))

const CopyrightTypographyStyled = styled(Typography)(() => ({
    fontFamily: "Inter",
    fontSize: "0.875rem",
    color: "grey",
    opacity: "0.4",
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Footer: React.FC<FooterProps> = () => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <LinkFooterBoxStyled>

            <Typography fontFamily="Anton" fontSize="20px" color="white">Follow us</Typography>

            <SocialLinksBoxStyled>
                <Box>
                    <Link href={LinkedinLink}>
                        <LinkedIn />
                    </Link>
                </Box>
                <Link href={instagramLink}>
                    <Instagram />
                </Link>
            </SocialLinksBoxStyled>

            <LinksBoxStyled>
                <LegalLinksBoxStyled>
                    <LinkStyled href="/talk-to-us">Talk to us</LinkStyled>
                    <LinkStyled href="/about-us">About us</LinkStyled>
                    <LinkStyled href="/privacy">Privacy</LinkStyled>
                    <LinkStyled href="/terms-and-conditions">Terms & Conditions</LinkStyled>
                </LegalLinksBoxStyled>
                <CopyrightTypographyStyled>Copyright © 2023 Kablio</CopyrightTypographyStyled>
            </LinksBoxStyled>

        </LinkFooterBoxStyled >
    )
}

export default Footer
