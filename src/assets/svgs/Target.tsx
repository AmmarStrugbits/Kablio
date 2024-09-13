import * as React from "react"
const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
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
        d="M11 17.727a6.727 6.727 0 1 0 0-13.454 6.727 6.727 0 0 0 0 13.454Z"
      />
      <path d="M11 4.273v-2.99M11 20.716v-2.99M17.727 11h2.99M1.283 11h2.99" />
    </g>
  </svg>
)
export  { SvgComponent as Target }