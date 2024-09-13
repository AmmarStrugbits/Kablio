/*
| Developed by Reskue
| Filename: YouMenu.tsx
| Author: eric@reskue.art
*/

"use client"

import { theme } from '@/MUI/Theme'
import { Box, styled, useMediaQuery } from '@mui/material'
import React from 'react'

import YouMenuDesktop from './YouMenuDesktop';
import YouMenuMobile from './YouMenuMobile';

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface YouMenuProps //extends buttonProps
{
    children?: React.ReactNode
    isActive: boolean
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

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
const YouMenu: React.FC<YouMenuProps> = (props: YouMenuProps) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));
    // Render
    //--------------------------------------------------------------------------
    return (
        <BoxStyled key="you-menu">
            {matchesMobile ? <YouMenuMobile isActive={props.isActive} /> : <YouMenuDesktop isActive={props.isActive} />}
        </BoxStyled>
    )
}

export default YouMenu
