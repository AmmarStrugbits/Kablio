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
  width={51}
  height={51}
  fill="none"
  {...props}
>
  <path fill="url(#a)" d="M0 .5h50v50H0z" />
  <g fill="#000" filter="url(#b)">
    <path
      fillRule="evenodd"
      d="m24.97 38.099-3.033-4.597 9.722-6.655L39.162 38.1H24.97Z"
      clipRule="evenodd"
    />
    <path d="m6.826 27.088 4.15-13.473H9.24l9.594-5.004 6.82 5.004h-1.767l-1.746 8.013h12.985L6.444 41.278l4.888-14.19H6.826Z" />
    <path d="M24.338 19.97H38.48l8.242-5.616H31.804l-7.466 5.617Z" />
  </g>
  <defs>
    <linearGradient
      id="a"
      x1={25}
      x2={25}
      y1={14.588}
      y2={50.5}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#00FBDF" />
      <stop offset={0.5} stopColor="#00FBDF" stopOpacity={0.74} />
      <stop offset={1} stopColor="#01BAF8" stopOpacity={0.74} />
    </linearGradient>
    <filter
      id="b"
      width={48.277}
      height={40.667}
      x={2.444}
      y={8.611}
      colorInterpolationFilters="sRGB"
      filterUnits="userSpaceOnUse"
    >
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        result="hardAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      />
      <feOffset dy={4} />
      <feGaussianBlur stdDeviation={2} />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend
        in2="BackgroundImageFix"
        result="effect1_dropShadow_9205_8789"
      />
      <feBlend
        in="SourceGraphic"
        in2="effect1_dropShadow_9205_8789"
        result="shape"
      />
    </filter>
  </defs>
</svg>
)
export { SvgComponent as KablioIconContained }
