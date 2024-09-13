import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 25"
        width="1em"
        height="1em"
        {...props}
    >
        <path
            fill="#000"
            fillRule="evenodd"
            d="m17.117 12.5 6.925-6.925a3.265 3.265 0 1 0-4.616-4.62L12.5 7.883 5.572.955a3.267 3.267 0 0 0-4.617 0 3.271 3.271 0 0 0 0 4.62L7.884 12.5.955 19.425a3.271 3.271 0 0 0 0 4.62 3.268 3.268 0 0 0 4.617 0l6.928-6.928 6.926 6.928a3.265 3.265 0 1 0 4.617-4.62L17.117 12.5Z"
            clipRule="evenodd"
        />
    </svg>
)
export { SvgComponent as CloseIcon }
