"use client"

/*
| Developed by Reskue
| Filename: SidebarNavLink.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SidebarNavLinkProps //extends buttonProps
{
    title: string;
    onClick?: () => void;
    isActive: boolean;
    isAnswered: boolean;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const SidebarNavLinkButtonStyled = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    width: '100%',
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: '1.125rem',
    fontWeight: isActive ? 'bold' : 'normal',
    backgroundColor: isActive ? 'rgba(0, 251, 223, 0.1)' : 'white',
    border: isActive ? '2px solid #00FBDF' : '2px solid transparent',
    paddingLeft: '1rem',
    '&:hover': {
        backgroundColor: isActive ? 'rgba(0, 251, 223, 0.2)' : theme.palette.action.hover,
        color: 'black',
    },

    [theme.breakpoints.down('md')]: {
    },
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ title, onClick, isActive, isAnswered }) => {
    return (
        <SidebarNavLinkButtonStyled variant="text" onClick={onClick} isActive={isActive}>
            {title}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {isAnswered ?
                    <Typography sx={{ color: '#00FBDF', fontSize: '1.125rem' }}>Change</Typography>
                    :
                    <Typography sx={{ color: '#8A909C', fontWeight: 'normal', fontSize: '1.125rem' }}>Select</Typography>}
                <KeyboardArrowRightIcon sx={{ color: isAnswered ? '#00FBDF' : '#8A909C' }} />
            </Box>
        </SidebarNavLinkButtonStyled>
    );
}

export default SidebarNavLink
