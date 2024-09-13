import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="20"
        height="20"
        viewBox="0 0 11 11"
        {...props}
    >
        <path
            fill="#000"
            fillRule="evenodd"
            d="m7.532 5.5 3.047-3.047A1.437 1.437 0 1 0 8.547.42L5.5 3.47 2.452.42A1.438 1.438 0 0 0 .42 2.453L3.47 5.5.42 8.547a1.438 1.438 0 0 0 2.031 2.033l3.05-3.049 3.046 3.049a1.438 1.438 0 0 0 2.032-2.033L7.532 5.5Z"
            clipRule="evenodd"
        />
    </svg>
)
export { SvgComponent as CloseViewDialogIconMobile }
