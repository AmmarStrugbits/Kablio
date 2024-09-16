"use client"

/*
| Developed by Reskue
| Filename: StatusButton.tsx
| Author: eric@reskue.art
*/

import { Button, ButtonProps, Theme } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'


/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StatusButtonProps extends ButtonProps {
  isSelected: boolean,
  children?: React.ReactNode
  theme?: Theme
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ButtonStyle = styled(Button)(({ theme, isSelected } : StatusButtonProps) => ({
  backgroundColor: isSelected ? "rgba(0, 251, 223, 0.30)" : "#D9D9D9",
  color: "black",
  fontFamily: 'Anton',
  fontSize: '20px',
  fontWeight: 'normal',
  borderRadius: '0px',
  width: '225px',
  height: '44px',
  '&:hover': {
    backgroundColor: "rgba(0, 251, 223, 0.50)"
  },
  '&:disabled': {
    color: 'black'
  },

  ...(theme && {
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    }
  })
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const StatusButton: React.FC<StatusButtonProps> = (props: StatusButtonProps) => {
  const { children } = props;


  // Render
  //--------------------------------------------------------------------------
  return (<ButtonStyle {...props}>{children}</ButtonStyle>)
}

export default StatusButton
