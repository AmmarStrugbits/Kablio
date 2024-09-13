import * as React from "react";
import { SVGProps } from "react";

interface CustomSVGProps extends SVGProps<SVGSVGElement> {
    isActive?: boolean;
    isMobile?: boolean;
}

const SvgComponent: React.FC<CustomSVGProps> = ({
    isActive = false,
    isMobile = false,
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 29 24"
        fill={isActive ? (isMobile ? "#00FBDF" : "black") : (isMobile ? "black" : "white")}
        width={isActive ? "35" : "29"}
        height={isActive ? "28" : "24"}
        {...props}
    >
        <path
            stroke={isActive ? (isMobile ? "#00FBDF" : "black") : (isMobile ? "white" : "#505662")}
            d="M3.519 13.075H.949L3.741 3.82l.179-.593L8.875.591l3.453 2.585h-.174l-.085.396-1.256 5.887-.13.604h8.379L.96 22.72l3.033-8.984.223-.66h-.697Zm19.113 8.09H13.61l-1.774-2.744 6.182-4.318 4.614 7.062Zm4.773-16.446L22.91 7.846h-8.553l4.073-3.127h8.976Z"
        />
    </svg>
)
export { SvgComponent as MatchesIcon }
