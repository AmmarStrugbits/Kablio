/*
| Developed by Reskue
| Filename: GetBackToSwiping.tsx
| Author: eric@reskue.art
*/

"use client"

import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system';
import React from 'react'
//import { styled } from '@mui/material'

/* 
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
enum SelectedStatus {
  SAVED = 'savedJobs',
  APPLIED = 'appliedJobs',
}

export interface GetBackToSwipingProps //extends buttonProps
{
  status: SelectedStatus;
  children?: React.ReactNode
}


enum StatusSentence {
  "appliedJobs" = 'Looks like you haven\'t applied to any jobs yet.',
  "savedJobs" = 'Looks like you haven\'t saved any jobs yet.',

}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const MainContainer = styled(Box)(({theme}) => ({
  display: "flex",
  borderRadius: '0px 8px 8px 8px',
  justifyContent: "center",
  alignItems: "center",
  padding: '10px',
  gap: '10px',
  backgroundColor: "rgba(0, 251, 223, 0.30)",

  [theme.breakpoints.down('sm')]: {
    borderRadius: '0px'
  }
}))

const BoxStyled = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
  borderRadius: '8px 8px 8px 8px',
  backgroundColor: 'white',
  width: '100%',
  height: '230px',
  padding: 20,

  [theme.breakpoints.down('sm')]: {
    height: "146px"
  }
}))


const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Anton",
  fontSize: '30px',

  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  }

}))

const SubText = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: '20px',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  }

}))


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const GetBackToSwiping: React.FC<GetBackToSwipingProps> = (props: GetBackToSwipingProps) => {
  const { status } = props;


  // Render
  //--------------------------------------------------------------------------
  return (
    <MainContainer>
      <BoxStyled>
      <Title>🚧🔧Get back to swiping 🔨⚡</Title>
      <SubText>{StatusSentence[status]}</SubText>
      </BoxStyled>
    </MainContainer>
  )
}

export default GetBackToSwiping
