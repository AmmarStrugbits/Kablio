"use client"

/*
| Developed by Reskue
| Filename: YouMenuMobile.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { useRouter } from 'next/navigation'

import { Box, Drawer, List, ListItem, Typography, styled } from '@mui/material'

import { anchorLinks } from '@/shared/const/NavLinksAccount'
import { useDrawer } from '@/contexts/YouMenuDrawerContext'

import { KablioGreyLogo } from '@/assets/svgs/navbarAccount/KablioGreyLogo'
import { YouIconMobile } from '@/assets/svgs/navbarAccount/navigation/mobile/YouIconMobile'
import YouMenuItemWithIcon from './YouMenuItemWithIcon'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface YouMenuMobileProps //extends buttonProps
{
    isActive: boolean
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const BoxStyled = styled(Box)(({ theme }) => ({
    borderColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
        borderColor: theme.palette.secondary.main,
    },
}))
const YouButtonStyled = styled('button')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    width: '100%',
    height: '100%',
    border: 'none',
    background: 'black',
    '&.active': {
        fontSize: '1.125rem',
        color: 'black',
        fontWeight: 'bold',
    },
    [theme.breakpoints.up('md')]: {
        '&.active': {
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
}));


const ListStyled = styled(List)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    margin: '0.5rem',
    [theme.breakpoints.up('md')]: {
    },
}))

const ListItemStyled = styled(ListItem)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const YouMenuMobile: React.FC<YouMenuMobileProps> = (props: YouMenuMobileProps) => {
    const { isDrawerOpen, toggleDrawer } = useDrawer();
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
        toggleDrawer();
    };
    const renderLinkItems = () => {
        return anchorLinks.map((link, index) => {
            if (link.label === "Profile") {
                // Ajout de la prop `key` ici
                return (
                    <ListItemStyled key={index} onClick={() => { }} sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box>
                            <Typography sx={{ color: 'black', fontSize: '1rem', paddingLeft: '0.5rem' }}>
                                {link.label}
                            </Typography>
                            <Typography sx={{ color: '#FF6331' }}>&nbsp;(Coming soon)</Typography>
                        </Box>
                        {link.Icon && React.createElement(link.Icon)}
                    </ListItemStyled>
                );
            } else {
                return (
                    <YouMenuItemWithIcon
                        key={index}
                        title={link.label}
                        Icon={link.Icon}
                        onClick={() => handleNavigation(link.path)}
                    />
                );
            }
        }).filter(Boolean);
    };

    // Render
    //--------------------------------------------------------------------------
    return (
        <BoxStyled>
            <YouButtonStyled onClick={toggleDrawer} className={props.isActive ? "active" : ""}>
                <YouIconMobile isActive={props.isActive} />
            </YouButtonStyled>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true,
                    BackdropProps: { invisible: true }
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#F9F9F9',
                        height: `calc(100% - 4.375rem)`,
                        width: '100%'
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '1rem',
                    }}
                >
                    <KablioGreyLogo />
                </Box>
                <Typography
                    sx={{
                        paddingTop: '1rem',
                        paddingLeft: '2rem',
                        color: '#8A909C',
                        fontFamily: 'Anton',
                        fontSize: '1rem',
                        fontWeight: '400',
                    }}
                >
                    You
                </Typography>
                <ListStyled>
                    {renderLinkItems()}
                </ListStyled>
            </Drawer>
        </BoxStyled>
    )
}

export default YouMenuMobile
