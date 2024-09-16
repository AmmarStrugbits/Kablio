"use client"

/*
| Developed by Reskue
| Filename: TermsAndConditions.tsx
| Author: eric@reskue.art
*/

import React from 'react'
import { Box, Button, styled, useMediaQuery } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { theme } from '@/MUI/Theme'
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TermsAndConditionsProps //extends buttonProps
{
    children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const StyledButton = styled(Button)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "0.625rem",
    border: "1px solid black",
    color: "black",
    fontFamily: "Anton",
    fontWeight: "normal",
    ":hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "black",
    },

    [theme.breakpoints.up('md')]: {
        fontSize: "1.875rem",
        padding: "3rem 3rem",
    },


    [theme.breakpoints.down('md')]: {
        fontSize: "1.3rem",
        padding: "2.5rem 2rem",
        border: "none",

    },

}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ children }) => {
    const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Render
    //--------------------------------------------------------------------------
    return (
        <Box
            display="flex"
            width={"100vw"}

            justifyContent="center"
            sx={{
                background: `linear-gradient(to bottom, rgba(0, 251, 223, 1), rgba(0, 251, 223, 0.74), rgba(1, 186, 248, 0.74))`,
                [theme.breakpoints.down('md')]: {
                    // height: 'calc(100vh)'

                },
            }}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                gap={2}
                m={2}
            >
                <StyledButton href="/terms-and-conditions/jobseeker" endIcon={<ArrowForwardIcon sx={{ transform: "scale(1.8)" }} />}>Candidates - {matchesMobile ? "T&Cs" : "Terms & Conditions"}</StyledButton>
                <StyledButton href="/terms-and-conditions/employers" endIcon={<ArrowForwardIcon sx={{ transform: "scale(1.8)" }} />}>Employers - {matchesMobile ? "T&Cs" : "Terms & Conditions"}</StyledButton>
                <StyledButton href="/terms-and-conditions/recruiters" endIcon={<ArrowForwardIcon sx={{ transform: "scale(1.8)" }} />}>Recruiters - {matchesMobile ? "T&Cs" : "Terms & Conditions"}</StyledButton>
                <StyledButton href="/terms-and-conditions/acceptable-use-policy" endIcon={<ArrowForwardIcon sx={{ transform: "scale(1.8)" }} />}>Acceptable use policy</StyledButton>
            </Box>
        </Box>

    )
}

export default TermsAndConditions
