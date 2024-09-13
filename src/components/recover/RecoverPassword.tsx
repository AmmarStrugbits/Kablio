/*
| Developed by Reskue
| Filename: RecoverPassword.tsx
| Author: eric@reskue.art
*/

"use client"

import { KablioIconContained } from '@/assets/svgs/KablioIconContained';
import validationRules from '@/components/quiz/ValidationRules.register';
import SuccessPasswordRecovery from '@/components/recover/SuccessPasswordRecovery';
import { apiRecoverPassword } from '@/services/axios/axios.services';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { ReactNode, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface RecoverPasswordProps //extends buttonProps
{
  token: string;
  children?: React.ReactNode
}

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

  [theme.breakpoints.down('md')] : {
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



const ErrorTypography = styled(Typography)(() => ({
  marginTop: "0.5rem",
  marginLeft: "0.5rem",
}));

const OutlinedInputStyled = styled(OutlinedInput)(({ theme }) => ({
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
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const RecoverPassword: React.FC<RecoverPasswordProps> = (props: RecoverPasswordProps) => {
  const { token } = props;

  const [passwordChanged, setPasswordChanged] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const recoveryDto = { token, password: data.password };
    await apiRecoverPassword(recoveryDto);
    setPasswordChanged(true);
  }


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  if (!passwordChanged) {
    return (
      <MainBoxStyled>
        <KablioIconContained />
        <TitleStyled>Reset Your Password</TitleStyled>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <FormControl variant="standard" fullWidth>
            <LabelStyled shrink htmlFor="password-input">Password</LabelStyled>
            <OutlinedInputStyled
              id='password'
              type={showPassword ? 'text' : 'password'}
              sx={{ border: "none !important" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              {...register('password', validationRules.password)}
            ></OutlinedInputStyled>
            {errors.password && <ErrorTypography color="error">{errors.password.message as ReactNode}</ErrorTypography>}
          </FormControl>
          <ButtonStyled type='submit'>Send</ButtonStyled>
        </FormStyled>
        <TextStyled>Maybe check spam folder</TextStyled>
      </MainBoxStyled>
    )
  }

  // Render
  //--------------------------------------------------------------------------
  return (<SuccessPasswordRecovery />)
}

export default RecoverPassword
