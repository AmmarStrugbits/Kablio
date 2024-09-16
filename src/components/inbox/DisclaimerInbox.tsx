"use client"

/*
| Developed by Reskue
| Filename: Disclaimer.tsx
| Author: eric@reskue.art
*/

import LogoGenerator from '@/shared/components/LogoGenerator'
import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DisclaimerProps //extends buttonProps
{
  children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  alignItems: "center",
  flexWrap: 'nowrap',
  overflow: 'hidden',
  backgroundColor: "white",
  width: '65%',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}))


const TextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '30px',
  gap: '20px',
  textAlign: 'center',
}))

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Anton',
  fontSize: '2.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.75rem',
  },
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const DisclaimerInbox: React.FC<DisclaimerProps> = () => {

  // Render
  //--------------------------------------------------------------------------
  return (
    <MainContainer>
      <LogoGenerator nbOfRows={4} />
      <TextContainer>
        <Title>Direct message employers and recruiters</Title>
        <TypographyStyled>🤑🤑 We don’t have the money to develop this page yet 🤑🤑</TypographyStyled>
        <TypographyStyled>Help us by following our social media. Why? It helps convince investors you care.</TypographyStyled>
      </TextContainer>
      <LogoGenerator nbOfRows={18} />

    </MainContainer>)
}

export default DisclaimerInbox
