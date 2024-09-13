import * as React from "react"
import { SVGProps } from "react"

interface CustomSVGProps extends SVGProps<SVGSVGElement> {
    isMobile?: boolean;
    isArticleCard?: boolean;
}
const SvgComponent: React.FC<CustomSVGProps> = ({
    isArticleCard = false,
    isMobile = false,
    ...props
}) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 13 12"
            width={isArticleCard ? ("10") : (isMobile ? "16" : "24")}
            height={isArticleCard ? ("10") : (isMobile ? "16" : "24")}
            {...props}
        >
            <path
                stroke="#101828"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1.5 11 10-10m0 0h-10m10 0v10"
            />
        </svg>);
}
export { SvgComponent as ArrowUpRight }
