import * as React from "react"
const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
  >
    <g
      stroke="#505662"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        fill="#00FBDF"
        fillOpacity={0.1}
        d="M10.596 19.87c1.668-1.478 6.256-6 6.256-11.05 0-3.973-3.068-7.195-6.853-7.195-3.784 0-6.853 3.222-6.853 7.196 0 5.05 4.588 9.571 6.256 11.048a.892.892 0 0 0 1.194 0Z"
      />
      <path
        fill="#fff"
        d="M10 11.345c1.55 0 2.807-1.32 2.807-2.947 0-1.628-1.257-2.947-2.807-2.947S7.193 6.77 7.193 8.398c0 1.628 1.257 2.947 2.807 2.947Z"
      />
    </g>
  </svg>
)
export  { SvgComponent as Location }