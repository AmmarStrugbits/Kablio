/*
| Developed by Reskue
| Filename: SuccessPasswordRecovery.tsx
| Author: eric@reskue.art
*/

"use client"

import { KablioIcon } from '@/assets/svgs/KablioIcon'
import { Button, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SuccessPasswordRecoveryProps //extends buttonProps
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
  height: '100%',
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
  gap: 20,
  width: '90vw',
  maxWidth: '1000px',
  height: '500px',
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: "20px 30px"

}));

const TitleStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Anton",
  fontSize: '45px',

  [theme.breakpoints.down('md')] : {
    fontSize: '25px',

  }
}))



const ButtonStyled = styled(Button)(({ theme }) => ({
  color: 'black',
  background: "linear-gradient(180deg, #00FBDF 28.18%, rgba(0, 251, 223, 0.74) 62.22%, rgba(1, 186, 248, 0.74) 100%)",
  border: "none",
  padding: "1rem",
  borderRadius: '0.625rem',

  fontFamily: "Anton",
  fontWeight: "500",
  fontSize: "1.30rem",
  textTransform: "uppercase",
  width: '30%',
  [theme.breakpoints.down('md')]: { width: '100%' },


  "&:hover": {
    backgroundColor: "black",
    padding: "1rem",
    color: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  "&:disabled": {
    opacity: 0.4,
  },
}));


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SuccessPasswordRecovery: React.FC<SuccessPasswordRecoveryProps> = () => {

  // Render
  //--------------------------------------------------------------------------
  return (
    <BackgroundStyled>
      <MainBoxStyled>
        <KablioIcon />
        <TitleStyled>Password changed successfully</TitleStyled>
        <ButtonStyled
          href={'/auth/login'}
        >
          Login
        </ButtonStyled>
      </MainBoxStyled>
    </BackgroundStyled>
  )


}

export default SuccessPasswordRecovery
