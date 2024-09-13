import * as React from "react"
import { SVGProps } from "react"
interface CustomSVGProps extends SVGProps<SVGSVGElement> {
    isActive?: boolean;
    isMobile?: boolean;
}
const SvgComponent: React.FC<CustomSVGProps> = ({
    isActive = false,
    ...props
}) => {
    // Définit explicitement le remplissage pour le premier path

    const fillValueInternalCharacter = isActive ? "white" : "white";
    const strokeValueInternalCharacter = isActive ? "white" : "#505662";

    const fillValueExternalCharacter = isActive ? "black" : "white";
    const strokeValueExternalCharacter = isActive ? "black" : "#505662";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isActive ? "35" : "27"}
            height={isActive ? "28" : "25"}
            viewBox="0 0 27 25"
            {...props}
        >
            <path
                fill={fillValueExternalCharacter}
                stroke={strokeValueExternalCharacter}
                strokeWidth={1.4}
                d="M.95 3.636a2.3 2.3 0 0 1 2.3-2.3h16.5a2.3 2.3 0 0 1 2.3 2.3V18a2.3 2.3 0 0 1-2.3 2.3H3.25A2.3 2.3 0 0 1 .95 18V3.636Z"
            />
            <path
                fill={fillValueInternalCharacter}
                stroke={strokeValueInternalCharacter}
                strokeWidth={1.4}
                d="M4.759 16.454a6.24 6.24 0 0 1 1.956-3.674c1.256-1.165 2.95-1.832 4.732-1.85 1.782-.018 3.496.616 4.785 1.758 1.102.976 1.817 2.256 2.057 3.633l-6.758.31-6.772-.177ZM14.014 6.432c0 1.327-1.109 2.433-2.515 2.433-1.405 0-2.514-1.106-2.514-2.433 0-1.327 1.109-2.433 2.514-2.433 1.406 0 2.515 1.106 2.515 2.433Z"
            />
        </svg>

    );
};
export { SvgComponent as YouIcon }
