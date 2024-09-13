import * as React from "react"
const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
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
        d="M9.46 17.92A8.46 8.46 0 1 0 9.46 1a8.46 8.46 0 0 0 0 16.92Z"
      />
      <path d="m19.001 19-3.552-3.552M9.46 6.615v5.69M6.615 9.46h5.69" />
    </g>
  </svg>
)
export { SvgComponent as ZoomIn }