/*
| Developed by Reskue
| Filename: SendRecoveryEmail.tsx
| Author: eric@reskue.art
*/

"use client"

import { KablioIconContained } from '@/assets/svgs/KablioIconContained'
import validationRules from '@/components/quiz/ValidationRules.register'
import { apiGetRecoverEmail } from '@/services/axios/axios.services'
import { UserEmail } from '@/shared/interfaces/User.interfaces'
import { Button, FormControl, InputBase, InputLabel, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import { enqueueSnackbar } from 'notistack'
import React, { ReactNode, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
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
  borderRadius: '20px',
  marginTop: '50px',
}));

const TitleStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Anton",
  fontSize: '45px',

  [theme.breakpoints.down('md')]: {
    fontSize: '25px',

  }
}))

const TextStyled = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontSize: '16px',
  color: '#8A909C'
}))


const FormStyled = styled('form')(() => ({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '27px',
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

  [theme.breakpoints.down('md')]: {
    padding: '20px 30px'
  }
}))

const LabelStyled = styled(InputLabel)(() => ({
  textAlign: "left",
  fontFamily: "Roboto",
  fontSize: "1.3rem",
  color: "black",
  marginLeft: "0.8rem"

}));

const InputFieldStyled = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    background: `#e4faf7`,
    fontSize: 16,
    padding: '10px 12px',
    '&:focus': {
      background: `white`,
      borderColor: '#00FBDF'
    },
    '&:hover': {
      background: `white`,
      boxShadow: '0 0 8px 0 #00FBDF',
    }
  },
}));

const ErrorTypography = styled(Typography)(() => ({
  marginTop: "0.5rem",
  marginLeft: "0.5rem",
}));


/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SendRecoveryEmail: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!isSending) {
      try {
        setIsSending(true);
        await apiGetRecoverEmail(data as UserEmail);
        startCountdown();
      } catch (error) {
        enqueueSnackbar('No user found', { variant: 'error' });
        setIsSending(false);
      }
    }
  };

  const startCountdown = () => {
    let seconds = 120; // 120 seconds
    setCountdown(seconds);

    const interval = setInterval(() => {
      seconds--;
      setCountdown(seconds);
      if (seconds <= 0) {
        clearInterval(interval);
        setIsSending(false);
      }
    }, 1000);
  };

  return (
    <MainBoxStyled>
      <KablioIconContained />
      <TitleStyled>Recover Your Password</TitleStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="standard" fullWidth>
          <LabelStyled shrink htmlFor="email-input">Email</LabelStyled>
          <InputFieldStyled
            id="email-input"
            {...register('email', validationRules.email)}
            error={!!errors.email}
          />
          {errors.email && <ErrorTypography color="error">{errors.email.message as ReactNode}</ErrorTypography>}
        </FormControl>
        <ButtonStyled type="submit" disabled={isSending}>{isSending ? `Resend in ${countdown} seconds` : 'Send Recovery Email'}</ButtonStyled>
      </FormStyled>
      <TextStyled>Maybe check spam folder</TextStyled>
    </MainBoxStyled>
  );
};

export default SendRecoveryEmail
