/*
| Developed by Reskue
| Filename: PreferencesButton.tsx
| Author: eric@reskue.art
*/

"use client"

import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
import { PreferencesLightning } from '@/assets/svgs/PreferencesLightning'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface PreferencesButtonProps extends ButtonProps {
    children?: React.ReactNode
}


/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const ButtonStyled = styled(Button)(({ theme }) => ({
    color: '#505662',
    fontFamily: "Anton",
    fontSize: "1.25rem",
    display: "flex",
    paddingInline: "3.06rem",
    paddingBlock: "1.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "uppercase",
    borderRadius: '0.3125rem',
    backgroundColor: "#D9D9D9",
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: 'black',
    },

    [theme.breakpoints.down('md')]: {
        lineHeight: '1.1rem',
        paddingInline: "1rem",
        fontSize: "1rem",
    },
}));



/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const PreferencesButton: React.FC<PreferencesButtonProps> = (props: PreferencesButtonProps) => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <ButtonStyled
            href='/account/you/preferences'
            fullWidth
            endIcon={<PreferencesLightning />}
            {...props}

        >
            Complete your preferences
        </ButtonStyled>
    )
}

export default PreferencesButton