/*
| Developed by Reskue
| Filename: Disclaimer.tsx
| Author: eric@reskue.art
*/

// "use client"

import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import Link from 'next/link'
import React from 'react'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const BoxStyled = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const DisclaimerTypographyStyled = styled(Typography)({
    fontFamily: 'Roboto',
    fontSize: '0.7rem',
    '& a': {
        textDecoration: 'underline',
        color: 'inherit',
    },
})

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Disclaimer: React.FC = () => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <BoxStyled>
            <DisclaimerTypographyStyled>
                {`By signing up you agree to our `}
                <Link href="/privacy">
                    Privacy Policy
                </Link>
                {` and `}
                <Link href="/terms-and-conditions">
                    Terms & Conditions
                </Link>
                {` for Candidates.`}
            </DisclaimerTypographyStyled>
        </BoxStyled>
    )
}

export default Disclaimer
