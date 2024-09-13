/*
| Developed by Reskue
| Filename: NavbarMobile.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

"use client"

import React from "react";
import Link from "next/link";

import { Box, styled, ListItem, IconButton, Button } from "@mui/material";
import { usePathname } from "next/navigation";

import { KablioLogo } from '@/assets/svgs/logo'
import { CloseIcon } from "@/assets/svgs/CloseIcon";
import { KablioMiniLogo } from "@/assets/svgs/miniLogo";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

export interface MobileMenuProps {
    isUserLogged: boolean;
    onLinkClick: () => void;
    onIconClick?: () => void;
}

export interface MenuLink {
    label: string
    href: string[]
    ariaLabel: string
}
export interface LocalPageLinks {
    [key: string]: string
}
/*
|--------------------------------------------------------------------------
| Config
|--------------------------------------------------------------------------
*/

const NAVBARMOBILELINKS: Array<MenuLink> = [
    { label: "I'm a candidate", href: ['/'], ariaLabel: 'jobseeker' },
    { label: "I'm an employer", href: ['/employers'], ariaLabel: 'employer' },
    { label: "I'm a recruiter", href: ['/recruiters'], ariaLabel: 'recruiter' },
    { label: "I'm a Konnector", href: ['/konnectors'], ariaLabel: 'konnectors' },
    { label: "Blog", href: ['/blog'], ariaLabel: 'blog' },
    { label: "About Kablio", href: ['/about-us'], ariaLabel: 'About Kablio' },
]

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const MobileMenuBoxStyled = styled(Box)(() => ({
    background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,
    width: "100%",
    height: "100%",

}));

const HeaderBoxStyled = styled(Box)(() => ({
    height: "15vh",

    display: "flex",
    alignItems: "center",

    justifyContent: "space-between",
    gap: "1rem",
    padding: '0rem 1rem 0rem 1rem',
    zIndex: 100,
}));



const ListItemStyled = styled(ListItem)(({ theme }) => ({
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    fontSize: "1.25rem",
    padding: theme.spacing(1, 0),
}));

const LinkListBoxStyled = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: '0.8rem',
    padding: '1.5rem'
}));

const ItemsLinkStyled = styled(Link)(() => ({
    fontFamily: 'Anton',
    fontSize: '30px',
    color: 'black',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
    textTransform: "uppercase",
    fontFamily: "Anton",
    fontWeight: "500",
    fontSize: "1.30rem",
    width: '50%',
    minWidth: 'fit-content',
    marginTop: '0.5rem',
    [theme.breakpoints.down('lg')]: {
        width: '50%',
        maxWidth: '400px',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))


/*
|--------------------------------------------------------------------------
| Animations
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const MobileMenu: React.FC<MobileMenuProps> = (props: MobileMenuProps) => {
    const { isUserLogged, onLinkClick } = props;
    const pathname = usePathname();
    const handleLinkClick = () => {
        onLinkClick();
    };

    return (
        <MobileMenuBoxStyled>
            <HeaderBoxStyled>
                <Link href="/">
                    <KablioLogo />
                </Link>
                <IconButton onClick={props.onIconClick} aria-label="menu">
                    <CloseIcon width={'35px'} height={'35px'} />
                </IconButton>
            </HeaderBoxStyled>
            <LinkListBoxStyled>
                {NAVBARMOBILELINKS.map((link, key) => {
                    const isActive = link.href.some((path) => {
                        if (path === '/blog') {
                            return pathname.startsWith('/blog');
                        }
                        return pathname === path;
                    });
                    return (
                        <ListItemStyled key={key}>
                            <ItemsLinkStyled
                                href={link.href[0]}
                                onClick={handleLinkClick}
                                style={{ color: isActive ? 'darkgrey' : 'black' }}
                            >
                                {link.label}
                            </ItemsLinkStyled>
                        </ListItemStyled>
                    );
                })}
                <ButtonStyled
                    startIcon={<KablioMiniLogo />}
                    variant="contained"
                    href={isUserLogged ? '/account/matches' : '/auth/login'}>
                    {isUserLogged ? "Go to matches" : "Login"}
                </ButtonStyled>
            </LinkListBoxStyled>
        </MobileMenuBoxStyled>
    );
};
export default MobileMenu