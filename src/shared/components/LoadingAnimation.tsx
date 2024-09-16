"use client"

/*
| Developed by Reskue
| Filename: LoadingAnimation.tsx
| Author: eric@reskue.art
*/

import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
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
//const LoadingAnimationStyled = styled(Button)(({ theme }) => ({
//borderColor: theme.palette.primary.main,
//[theme.breakpoints.up('md')]: {
//borderColor: theme.palette.secondary.main,
//},
//}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const LoadingAnimation: React.FC = () => {

// Render
//--------------------------------------------------------------------------
return (<Box
  height='95.625vh'
  width='100vw'
  display='flex'
  justifyContent='center'
  alignItems='center'
  bgcolor='white'
>
  <CircularProgress color='primary' />
</Box >)
}

export default LoadingAnimation
