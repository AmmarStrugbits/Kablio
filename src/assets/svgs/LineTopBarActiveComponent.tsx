import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={62}
        height={4}
        fill="none"
        {...props}
    >
        <rect width={62} height={3.041} y={0.649} fill="#8A909C" rx={1.521} />
    </svg>
)
export { SvgComponent as LineTopBarActiveComponent }
