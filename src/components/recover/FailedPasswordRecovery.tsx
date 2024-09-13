/*
| Developed by Reskue
| Filename: FailedPasswordRecovery.tsx
| Author: eric@reskue.art
*/

"use client"

import { KablioIconFail } from '@/assets/svgs/KablioIconFail';
import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import Link from 'next/link';
import React from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FailedPasswordRecoveryProps //extends buttonProps
{
  children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const BackgroundStyled = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  width: "100vw",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: '4rem',
  padding: '2rem',
  backgroundColor: "#F9F9F9",
  gap: '1rem',
  overflow: 'hidden'
}));


const MainBoxStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 15,
  width: '90vw',
  maxWidth: '1000px',
  height: '500px',
  backgroundColor: 'white',
  borderRadius: '20px'

}));

const TitleStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Anton",
  fontSize: '45px',

  [theme.breakpoints.down('md')] : {
    fontSize: '25px',
  }
}))

const TextStyled = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontSize: '16px',
  color: '#8A909C'
}))

const LinkStyled = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: '#8A909C'

}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const FailedPasswordRecovery: React.FC<FailedPasswordRecoveryProps> = () => {

  // Render
  //--------------------------------------------------------------------------
  return (
    <BackgroundStyled>
      <MainBoxStyled>
        <KablioIconFail />
        <TitleStyled>Password recovery failed</TitleStyled>
        <TextStyled>Sorry, something went wrong.</TextStyled>
        <Link
          href="/auth/login"
        >
          <LinkStyled>
            start again
          </LinkStyled>
        </Link>
      </MainBoxStyled>
    </BackgroundStyled>
  )
}

export default FailedPasswordRecovery
