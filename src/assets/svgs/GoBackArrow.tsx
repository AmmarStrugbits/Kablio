import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="#8A909C"
            stroke="#8A909C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.042 23.41c-1.8-1.782-4.38-4.819-6.45-8.644-.79-1.459-.79-3.442 0-4.901 2.07-3.825 4.65-6.862 6.45-8.644.565-.56 1.316.011 1.316.967v4.593h4.482c3.586 0 10.399 4.428 8.965 17.219-.897-2.05-2.69-6.15-8.965-6.15H9.358v4.593c0 .956-.751 1.527-1.316.967Z"
        />
    </svg>
)
export { SvgComponent as GoBackArrow }
