import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        height={27}
        width={27}
        viewBox="0 0 21 20"
        {...props}
    >
        <path
            fill="#FF6331"
            fillRule="evenodd"
            d="M16.864 13.536 14.05 16.35l-9.9-9.9 2.815-2.814 9.9 9.9Z"
            clipRule="evenodd"
        />
        <path
            fill="#FF6331"
            fillRule="evenodd"
            d="m4.145 13.534 9.888-9.89 2.815 2.815-9.89 9.889-2.813-2.814Z"
            clipRule="evenodd"
        />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="m15.432 13.552-1.392 1.392L5.564 6.47l1.393-1.392 8.475 8.475Z"
            clipRule="evenodd"
        />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M5.588 13.54 14.05 5.08l1.392 1.392-8.462 8.462-1.392-1.392Z"
            clipRule="evenodd"
        />
    </svg>
)
export { SvgComponent as DeleteViewDialogIcon }
