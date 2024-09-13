/*
| Developed by Reskue
| Filename: logo.tsx
| Author: eric@reskue.tech
*/

import React from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MiniLogoProps //extends buttonProps
{
  children?: React.ReactNode
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
//const logoStyled = styled(Button)(({ theme }) => ({
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
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={31}
    fill="none"
    {...props}
  >
    <path
      fill="#FF6331"
      fillRule="evenodd"
      d="m16.202 3.42 2.259 4.22-7.242 6.113L5.631 3.419h10.57Z"
      clipRule="evenodd"
    />
    <path
      fill="#FF6331"
      d="m29.715 13.531-3.09 12.374h1.293L20.772 30.5l-5.08-4.595h1.317l1.3-7.36H8.637L30 .5l-3.64 13.031h3.355Z"
    />
    <path fill="#FF6331" d="M16.672 20.068H6.14L0 25.226h11.111l5.561-5.158Z" />
  </svg>
)
export { SvgComponent as KablioIconFail }
