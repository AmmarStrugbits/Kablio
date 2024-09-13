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
    width={27}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="m12.448 21.47-1.976-3.31 6.336-4.79 4.89 8.1h-9.25Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#b)"
      d="m.624 13.543 2.704-9.699H2.197L8.45.242l4.444 3.602h-1.152l-1.137 5.769h8.462L.375 23.758 3.56 13.543H.624Z"
    />
    <path
      fill="url(#c)"
      d="M12.037 8.42h9.216l5.372-4.044h-9.722L12.037 8.42Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={13.5}
        x2={13.5}
        y1={6.868}
        y2={23.758}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FBDF" />
        <stop offset={0.474} stopColor="#00FBDF" stopOpacity={0.74} />
        <stop offset={1} stopColor="#01BAF8" stopOpacity={0.74} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={13.5}
        x2={13.5}
        y1={6.868}
        y2={23.758}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FBDF" />
        <stop offset={0.474} stopColor="#00FBDF" stopOpacity={0.74} />
        <stop offset={1} stopColor="#01BAF8" stopOpacity={0.74} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={13.5}
        x2={13.5}
        y1={6.868}
        y2={23.758}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FBDF" />
        <stop offset={0.474} stopColor="#00FBDF" stopOpacity={0.74} />
        <stop offset={1} stopColor="#01BAF8" stopOpacity={0.74} />
      </linearGradient>
    </defs>
  </svg>
)
export { SvgComponent as KablioMiniLogo }
