import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path fill="#EAE6E6" d="M0 0h66v23H0z" />
    <g clipPath="url(#a)">
      <path fill="#F9F9F9" d="M-1089-1534H831v2576h-1920z" />
      <mask id="b" fill="#fff">
        <path d="M-123-157h602v335h-602v-335Z" />
      </mask>
      <path fill="#fff" d="M-123-157h602v335h-602v-335Z" />
      <path fill="#00FBDF" d="M-123-155h602v-4h-602v4Z" mask="url(#b)" />
      <g clipPath="url(#c)">

        <rect width={23} height={23} x={42} fill="url(#f)" rx={4} />
        <g filter="url(#g)">
          <path stroke="#EAFEFF" strokeWidth={18} d="M45.074-6.234h16.851" />
        </g>
        <g filter="url(#h)">
          <rect
            width={1.61}
            height={14.98}
            x={43.767}
            y={2.766}
            fill="#EAFEFF"
            fillOpacity={0.5}
            rx={0.805}
          />
        </g>
        <g filter="url(#i)">
          <rect
            width={1.61}
            height={14.98}
            x={60.668}
            y={2.766}
            fill="#EAFEFF"
            fillOpacity={0.5}
            rx={0.805}
          />
        </g>
        <path
          fill="#fff"
          d="M46.879 5.79h.022c1.186 0 1.924-.843 1.924-1.895C48.803 2.819 48.087 2 46.923 2 45.76 2 45 2.819 45 3.895c0 1.052.738 1.894 1.879 1.894ZM45 7.052h3.825V18H45V7.053Zm17 4c0-2.21-1.807-4-4.038-4a4.04 4.04 0 0 0-3.187 1.55v-1.55H50.95V18h3.825v-6.316c0-.93.761-1.684 1.7-1.684s1.7.754 1.7 1.684V18H62v-6.947Z"
        />
      </g>
    </g>
    <defs>
      <filter
        id="d"
        width={95}
        height={73.964}
        x={6}
        y={-15.964}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_5929_7360"
          stdDeviation={17.5}
        />
      </filter>
      <filter
        id="g"
        width={96.851}
        height={98}
        x={5.074}
        y={-55.234}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_5929_7360"
          stdDeviation={20}
        />
      </filter>
      <filter
        id="h"
        width={87.61}
        height={100.979}
        x={0.767}
        y={-40.234}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_5929_7360"
          stdDeviation={21.5}
        />
      </filter>
      <filter
        id="i"
        width={87.61}
        height={100.979}
        x={17.668}
        y={-40.234}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_5929_7360"
          stdDeviation={21.5}
        />
      </filter>
      <clipPath id="a">
        <path fill="#fff" d="M-1089-1534H831v2576h-1920z" />
      </clipPath>
      <clipPath id="c">
        <path fill="#fff" d="M-93 0H66v23H-93z" />
      </clipPath>
      <radialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 1.98196 -12.5 0 53.5 21.018)"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0.04} />
      </radialGradient>
      <linearGradient
        id="f"
        x1={53.5}
        x2={53.5}
        y1={0}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.718} stopColor="#005D85" />
        <stop offset={0.986} stopColor="#002132" />
      </linearGradient>
    </defs>
  </svg>
)
export { SvgComponent as LinkedinIcon }
