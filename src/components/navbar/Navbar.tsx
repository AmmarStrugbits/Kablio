/*
| Developed by Reskue
| Filename: Navbar.tsx
| Author: eric@reskue.tech
*/

"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { theme } from '@/MUI/Theme'

import { KablioLogo } from '@/assets/svgs/logo'
import { BurgerIcon } from '@/assets/svgs/BurgerIcon'
import { Box, Drawer, IconButton, styled, useMediaQuery } from '@mui/material'

import { NavbarProvider } from './contextMenu'
import { useAuth } from '@/hooks/useAuth'

import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import { usePathname } from "next/navigation";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarProps //extends buttonProps
{
}

export enum Occupation {
    JOBSEEKER = "Jobseeker",
    EMPLOYER = "Employer",
    RECRUITER = "Recruiter"
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const HeaderBoxStyled = styled(Box)(({ theme }) => ({
    height: "15vh",
    width: "100vw",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    zIndex: 100,
    [theme.breakpoints.down('md')]: {
        padding: '0rem 1rem 0rem 1rem',
    },
}))

const MenuBoxStyled = styled(Box)(({ theme }) => ({
    width: "87rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "1rem",
    padding: '0rem 1rem 0rem 1rem',
    [theme.breakpoints.down('md')]: {
        padding: '0rem 0rem 0rem 0rem',
    },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const Navbar: React.FC<NavbarProps> = () => {
    const { checkCredentials } = useAuth();
    const pathname = usePathname();
    const backgroundColor = (pathname === '/' || pathname === '/jobseeker' || pathname.startsWith('/blog')) ? (pathname.startsWith('/blog') ? 'white' : 'transparent') : '#00FBDF';
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    // Render
    //--------------------------------------------------------------------------

    return (
        <NavbarProvider>
            <HeaderBoxStyled
                sx={{ backgroundColor: { backgroundColor } }}
            >
                <MenuBoxStyled>
                    <Box>
                        <Link href="/">
                            <KablioLogo />
                        </Link>
                    </Box>
                    {matchesMobile ?
                        (
                            <>
                                <IconButton onClick={toggleMenu} aria-label="menu">
                                    <BurgerIcon width={'35px'} height={'35px'} />
                                </IconButton>
                                <Drawer
                                    anchor={'right'}
                                    open={isMenuOpen}
                                    onClose={toggleMenu}
                                    sx={{
                                        width: '100vw',
                                        '& .MuiDrawer-paper': { width: '100vw', boxSizing: 'border-box' },
                                    }}
                                >
                                    <MobileMenu onIconClick={toggleMenu} isUserLogged={checkCredentials()} onLinkClick={handleLinkClick} />
                                </Drawer>
                            </>
                        )
                        :
                        <DesktopMenu isUserLogged={checkCredentials()} />
                    }
                </MenuBoxStyled>
            </HeaderBoxStyled >
        </NavbarProvider>
    )
}

export default Navbar

