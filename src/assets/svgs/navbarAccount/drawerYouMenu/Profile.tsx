import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#00FBDF"
            fillOpacity={0.4}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17.036A8.036 8.036 0 1 0 9 .964a8.036 8.036 0 0 0 0 16.072Z"
        />
        <path
            fill="#fff"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 9.05a2.464 2.464 0 1 0 0-4.927A2.464 2.464 0 0 0 9 9.05ZM13.763 15.473A8 8 0 0 1 9 17.036a8 8 0 0 1-4.763-1.563 4.928 4.928 0 0 1 9.526 0Z"
        />
    </svg>
)
export { SvgComponent as ProfileSVG }
