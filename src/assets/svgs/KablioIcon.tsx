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
  width={58}
  height={43}
  fill="none"
  {...props}
>
  <path
    fill="#000"
    fillRule="evenodd"
    d="m26.717 38.816-4.293-6.051 13.76-8.76L46.8 38.815H26.717Z"
    clipRule="evenodd"
  />
  <path
    fill="#000"
    d="M1.04 24.322 6.914 6.586H4.456L18.034 0l9.65 6.586h-2.5l-2.47 10.548h18.375L.5 43l6.917-18.678H1.04Z"
  />
  <path
    fill="#000"
    d="M25.822 14.953h20.014L57.5 7.559H36.389l-10.567 7.394Z"
  />
</svg>
)
export { SvgComponent as KablioIcon }
