"use client"

/*
| Developed by Reskue
| Filename: CheckMailBox.tsx
| Author: eric@reskue.art
*/

import { KablioIconContained } from '@/assets/svgs/KablioIconContained'
import { apiRegisterUser } from '@/services/axios/axios.services'
import { UserData } from '@/shared/interfaces/User.interfaces'
import { Button, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
//import { styled } from '@mui/material'

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
//const CheckMailBoxStyled = styled(Button)(({ theme }) => ({
//borderColor: theme.palette.primary.main,
//[theme.breakpoints.up('md')]: {
//borderColor: theme.palette.secondary.main,
//},
//}))


const MainBoxStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '27px',
  width: '90vw',
  maxWidth: '1000px',
  height: '500px',
  backgroundColor: 'white',
  borderRadius: '20px'

}));

const TitleStyled = styled(Typography)(() => ({
  fontFamily: "Anton",
  fontSize: '45px',
}))

const TextStyled = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontSize: '16px',
  color: '#8A909C'
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  border: '4px solid black ',
  borderRadius: "10px",
  color: '#505662',
  fontFamily: 'Roboto',
  fontSize: '18px',
  padding: '10px 70px',


  '&.MuiButton-root:hover': {
    backgroundColor: "black",
  },

  [theme.breakpoints.down('sm')]: {
    padding: '30px 70px'
  }


}))
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const CheckMailBox: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [resendClicked, setResendClicked] = useState(false);
  const [countdown, setCountdown] = useState(120);

  const handleResendClick = async () => {
    setResendClicked(true);
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(intervalId);
          setResendClicked(false);
        }
        return prevCountdown - 1;
      });
    }, 1000);
    if (userData) await apiRegisterUser(userData);
  }

  useEffect(() => {
    const ls = window.localStorage.getItem('userData');
    if (ls) {
      const userData = JSON.parse(ls);
      setUserData(userData);
      window.localStorage.removeItem('userData');
    }
    handleResendClick();
  }, [])


  return (
    <MainBoxStyled>
      <KablioIconContained />
      <TitleStyled>Verify your email!</TitleStyled>
      <TextStyled>Almost there! We sent an email to {userData?.email}</TextStyled>
      <TextStyled>Maybe check spam folder</TextStyled>
      {resendClicked ? (
        <TextStyled>Please wait for {countdown} seconds before resending.</TextStyled>
      ) : (
        <>
          <ButtonStyled onClick={handleResendClick}>Resend Verification Email</ButtonStyled>
        </>
      )}
    </MainBoxStyled>
  )
}

export default CheckMailBox
