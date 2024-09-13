import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={11}
        height={12}
        fill="none"
        {...props}
    >
        <path
            fill="#8A909C"
            fillRule="evenodd"
            d="m7.532 6.08 3.047-3.048A1.437 1.437 0 1 0 8.547 1L5.5 4.048 2.452.999A1.438 1.438 0 0 0 .42 3.032L3.47 6.08.42 9.126a1.438 1.438 0 0 0 2.031 2.033l3.05-3.049 3.046 3.049a1.438 1.438 0 0 0 2.032-2.033L7.532 6.08Z"
            clipRule="evenodd"
        />
    </svg>
)
export { SvgComponent as CloseTopBarActiveComponent }
