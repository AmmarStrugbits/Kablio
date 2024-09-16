"use client"

/*
| Developed by Reskue
| Filename: NavbarAccount.tsx
| Author: eric@reskue.tech
*/

import React from 'react'
import { theme } from '@/MUI/Theme'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import YouMenu from './YouMenu'

import { Box, styled, useMediaQuery, keyframes } from '@mui/material'
import { AnchorLinks, anchorLinks, navLinks } from '@/shared/const/NavLinksAccount'

import { LogoNavbarAccount } from '@/assets/svgs/navbarAccount/LogoNavbarAccount'
import { MatchesIcon } from '@/assets/svgs/navbarAccount/navigation/MatchesIcon'
import { InboundIcon } from '@/assets/svgs/navbarAccount/navigation/InboundIcon'
import { BoardIcon } from '@/assets/svgs/navbarAccount/navigation/BoardIcon'
import { InboxIcon } from '@/assets/svgs/navbarAccount/navigation/InboxIcon'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarAccountProps //extends buttonProps
{
    children?: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const HeaderBoxStyled = styled(Box)(({ theme }) => ({
    position: 'fixed',
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
        bottom: 0,
        backgroundColor: 'black'
    },
}))

const NavLinkBoxStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    height: '100%',

    [theme.breakpoints.down('md')]: {
        marginBottom: '0.8rem',
        justifyContent: 'space-around',
        width: '100%'
    },
}))

const slideInFromTop = keyframes`
from {
    bottom: 8px;
  }
  to {
    bottom: 4px;
  }
`;

const LinkContainerBoxStyled = styled(Box)(({ theme }) => ({
    zIndex: 900,
    color: '#505662',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    transition: 'transform 0.3s ease',
    '&:not(.active):hover': {
        transform: 'scale(1.15)',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '4px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4.5rem',
            height: '4px',
            backgroundColor: '#00FBDF',
            animation: `${slideInFromTop} 0.3s ease forwards`,
        },
    },

    [theme.breakpoints.up('md')]: {
        '&.active': {
            color: '#00FBDF',
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4.5rem',
                height: '4px',
                backgroundColor: '#00FBDF',
            },
        },
    },
}))

const LinkStyled = styled(Link)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    '&.active': {
        fontSize: '1.125rem',
        color: 'black',
        fontWeight: 'bold',
    },
}))


const BoxStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    '&.active': {
        fontSize: '1.125rem',
        color: 'black',
        fontWeight: 'bold',
    },
}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const getIconForLabel = (label: string) => {
    switch (label) {
        case 'Matches': return MatchesIcon;
        case 'Inbound': return InboundIcon;
        case 'Board': return BoardIcon;
        case 'Inbox': return InboxIcon;
    }
};

const NavbarAccount: React.FC<NavbarAccountProps> = () => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    const pathname = usePathname();

    const isYouActive = (pathname: string, anchorLinks: AnchorLinks[]) => {
        return anchorLinks.some(link => pathname.startsWith(`${link.path}`));
    };

    const renderNavLinks = () => (
        navLinks.map(({ path, label }) => {
            const isActive = pathname === path;
            const Icon = getIconForLabel(label);
            if (label === 'You') {
                const isActive = isYouActive(pathname, anchorLinks);
                return (
                    <LinkContainerBoxStyled key={path} className={isActive ? "active" : ""}>
                        <BoxStyled className={isActive ? "active" : ""}>
                            <YouMenu isActive={isYouActive(pathname, anchorLinks)} />
                        </BoxStyled>
                    </LinkContainerBoxStyled>)
            } else {
                return (
                    <LinkContainerBoxStyled key={path} className={isActive ? "active" : ""}>
                        <LinkStyled href={path} className={isActive ? "active" : ""}>
                            {Icon && <Icon isActive={isActive} isMobile={matchesMobile} />}
                            {matchesMobile ? null : label}
                        </LinkStyled>
                    </LinkContainerBoxStyled>
                );
            }
        })
    );


    // Render
    //--------------------------------------------------------------------------

    return (
        <>
            <HeaderBoxStyled>
                {matchesMobile ? null :
                    <Box>
                        <Link href="/account/matches">
                            <LogoNavbarAccount />
                        </Link>
                    </Box>
                }
                <NavLinkBoxStyled>
                    {renderNavLinks()}
                </NavLinkBoxStyled>
            </HeaderBoxStyled >
            <Box marginTop={'4.375rem'}></Box >
        </>
    )
}

export default NavbarAccount

