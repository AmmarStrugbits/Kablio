/*
| Developed by Reskue
| Filename: YouMenuDesktopDesktop.tsx
| Author: eric@reskue.art
*/

"use client"

import { Box, Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'

import { YouIcon as YouIconDesktop } from '@/assets/svgs/navbarAccount/navigation/YouIcon';
import { anchorLinks } from '@/shared/const/NavLinksAccount';
import { useRouter } from 'next/navigation';
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface YouMenuDesktopProps //extends buttonProps
{
    children?: React.ReactNode
    isActive: boolean
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

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
    background: 'transparent',
    color: '#505662',
    '&.active': {
        fontSize: '1.125rem',
        color: 'black',
        fontWeight: 'bold',
    },
    [theme.breakpoints.down('md')]: {
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

const CustomMenu = styled(Menu)(() => ({
    overflow: 'hidden',
    marginLeft: '20px',
    [`& .MuiMenu-paper`]: {
        minWidth: '15rem',

    },
    [`& .MuiMenu-list`]: {
        '& .MuiMenuItem-root': {
            fontSize: '1rem',
            fontWeight: 'bold',
            justifyContent: 'center'
        }
    },

}));

const BoxStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    height: '100%',
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
const YouMenuDesktop: React.FC<YouMenuDesktopProps> = (props: YouMenuDesktopProps) => {
    const [youMenuAnchorEl, setYouMenuDesktopAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter();

    const handleYouMenuDesktopClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setYouMenuDesktopAnchorEl(event.currentTarget);
    };

    const handleYouMenuDesktopClose = () => {
        setYouMenuDesktopAnchorEl(null);
    };
    const handleNavigation = (path: string) => {
        router.push(path);
        handleYouMenuDesktopClose();
    };

    const renderAnchorLinks = () => (
        anchorLinks.map((link, index) => (
            <Box
                key={index}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingX: '1rem'
                }}
            >
                {link.Icon && React.createElement(link.Icon)}
                <MenuItem
                    onClick={() => {
                        if (link.label !== 'Profile') {
                            handleNavigation(link.path);
                        }
                    }}
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#344054',
                        ':focus': {
                            backgroundColor: link.label === 'Profile' ? 'transparent' : '',
                        },
                        ':active': {
                            backgroundColor: link.label === 'Profile' ? 'transparent' : '',
                        },
                        ':hover': {
                            backgroundColor: link.label === 'Profile' ? 'transparent' : '',
                            transform: link.label === 'Profile' ? 'none' : 'scale(1.1)',
                        },
                        transition: 'transform 0.3s ease',
                        cursor: link.label === 'Profile' ? 'default' : 'pointer',
                    }}
                >
                    {link.label}
                    {link.label === 'Profile' ? <span style={{ color: '#FF6331' }}>&nbsp;(Coming soon)</span> : null}
                </MenuItem>
            </Box>
        ))
    );

    // Render
    //--------------------------------------------------------------------------
    return (
        <BoxStyled key="you-menu">
            <YouButtonStyled onClick={handleYouMenuDesktopClick} className={props.isActive ? "active" : ""}>
                <YouIconDesktop isActive={props.isActive} />
                You
            </YouButtonStyled>
            <CustomMenu
                disableScrollLock={true}
                anchorEl={youMenuAnchorEl}
                open={Boolean(youMenuAnchorEl)}
                onClose={handleYouMenuDesktopClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    marginTop: '2px',
                }}
            >
                {renderAnchorLinks()}
            </CustomMenu>
        </BoxStyled>
    )
}

export default YouMenuDesktop
