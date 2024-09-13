/*
| Developed by Reskue
| Filename: NavbarQuizz.tsx
| Author: eric@reskue.tech
*/

"use client"

import LightGreyKablioLogo from '@/assets/svgs/authNavBar/LightGreyKablioLogo.svg'
import { Box, styled, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { theme } from '@/MUI/Theme'

// Dans votre composant NavbarQuizz

// import { LogoQuizz } from '@/assets/svgs/LogoQuizz'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarQuizzProps //extends buttonProps
{
    children?: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const HeaderBoxStyled = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100vw',
    height: '4.375rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0rem 1rem',
    boxShadow: '0px 2px 10px #D9D9D9',
    zIndex: 900,
    [theme.breakpoints.down('md')]: {
        height: '2.8rem',
    },

}))
const LinkContainerBoxStyled = styled(Box)(({ theme }) => ({
    zIndex: 900,

    height: '100%', // Prend toute la hauteur de la navbar
    display: 'flex',
    alignItems: 'center', // Centre le lien verticalement dans la navbar
    position: 'relative', // Pour le positionnement de la barre de soulignement
    '&.active': {
        color: '#00FBDF',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4.5rem',
            height: '2px',
            backgroundColor: '#00FBDF',
        },
    },
    [theme.breakpoints.down('md')]: {
        '&.active': {
            color: '#00FBDF',
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '3.25rem',
                height: '2px',
                backgroundColor: '#00FBDF',
            },
        },
    },
}))

const LinkStyled = styled(Link)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: '1.125rem',
    '&.active': {
        color: '#00FBDF',
    },

    [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem',
    },

}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const NavbarQuizz: React.FC<NavbarQuizzProps> = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    const pathname = usePathname();
    // Render
    //--------------------------------------------------------------------------

    return (
        <HeaderBoxStyled>
            <Box>
                <Link href="/">
                    <Image src={LightGreyKablioLogo} alt='Light Grey Kablio Logo' width={matchesMobile ? 140 : 190} />
                </Link>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"1.56rem"} height={'100%'}>
                <LinkContainerBoxStyled className={pathname == "/auth/login" ? "active" : ""}>
                    <LinkStyled href="/auth/login" className={pathname == "/auth/login" ? "active" : ""}>
                        Login
                    </LinkStyled>
                </LinkContainerBoxStyled>
                <LinkContainerBoxStyled className={pathname == "/auth/signup" ? "active" : ""}>
                    <LinkStyled href="/auth/signup" className={pathname == "/auth/signup" ? "active" : ""}>
                        Sign up
                    </LinkStyled>
                </LinkContainerBoxStyled>
            </Box>
        </HeaderBoxStyled >
    )
}

export default NavbarQuizz

