import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={40}
        height={40}
        viewBox="0 0 40 40"
        {...props}
    >
        <circle cx={20} cy={20} r={20} fill="#fff" />
        <path
            fill="#000"
            d="M14.3 25 13 23.7l5.2-5.2-5.2-5.2 1.3-1.3 5.2 5.2 5.2-5.2 1.3 1.3-5.2 5.2 5.2 5.2-1.3 1.3-5.2-5.2-5.2 5.2Z"
        />
    </svg>
)
export { SvgComponent as CloseViewDialogIcon }
