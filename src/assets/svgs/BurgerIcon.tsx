import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 34 27"
        width="1em"
        height="1em"
        {...props}
    >
        <rect width={34} height={5} fill="#000" rx={2.5} />
        <rect width={34} height={5} y={11} fill="#000" rx={2.5} />
        <rect width={34} height={5} y={22} fill="#000" rx={2.5} />
    </svg>
)
export { SvgComponent as BurgerIcon }
