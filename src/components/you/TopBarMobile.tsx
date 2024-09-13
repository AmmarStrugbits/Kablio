/*
| Developed by Reskue
| Filename: TopBarMobile.tsx
| Author: eric@reskue.art
*/

"use client"

import { GoBackArrow } from '@/assets/svgs/GoBackArrow'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useDrawer } from '@/contexts/YouMenuDrawerContext'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TopBarMobileProps //extends buttonProps
{
    onClick?: () => void;
    title: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TopBarMobileBoxStyled = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '3rem',
    backgroundColor: 'white',
    padding: '1rem 1rem',
    boxShadow: '0px 2px 10px #D9D9D9',
    cursor: 'pointer'
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TopBarMobile: React.FC<TopBarMobileProps> = (props: TopBarMobileProps) => {
    const { toggleDrawer } = useDrawer();
    // Render
    //--------------------------------------------------------------------------
    return (
        <TopBarMobileBoxStyled onClick={toggleDrawer}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    alignItems: 'center'
                }}
            >
                <Box>
                    <GoBackArrow color={'#8A909C'} />
                </Box>
                <Typography
                    sx={{
                        fontFamily: 'Anton',
                        fontSize: '1rem',
                        fontWeight: 400,
                        textAlign: 'center',
                        color: '#8A909C'

                    }}
                >
                    Back
                </Typography>
            </Box>
            <Box>
                <Typography sx={{
                    fontFamily: 'Anton',
                    fontSize: '1rem',
                    fontWeight: 400,
                    textAlign: 'center',
                    color: 'black'

                }}>{props.title}</Typography>
            </Box>
        </TopBarMobileBoxStyled>
    )
}

export default TopBarMobile
