import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#00FBDF"
            fillOpacity={0.3}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.89 2.5a7.396 7.396 0 1 1 1.06 13.213l-4.218.702a.5.5 0 0 1-.557-.652l1.091-3.255A7.396 7.396 0 0 1 4.891 2.499Z"
        />
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M8.785 5.642v2.75M8.785 11.437v.17"
        />
    </svg>
)
export { SvgComponent as TellUsWhatYouWantSVG }
