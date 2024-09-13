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
}) => {
    // Définit explicitement le remplissage pour le premier path
    const fillValue = isActive ? (isMobile ? "#00FBDF" : "black") : (isMobile ? "black" : "white");
    const strokeValue = isActive ? (isMobile ? "#00FBDF" : "black") : (isMobile ? "#D9D9D9" : "#505662");

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isActive ? "35" : "27"}
            height={isActive ? "28" : "25"}
            viewBox="0 0 27 25"
            {...props}
        >
            {/* Premier path avec remplissage conditionnel */}
            <path
                fill={fillValue} // Applique ici le remplissage conditionnel
                stroke={strokeValue}
                strokeWidth={1.5}
                d="M4.522 20.93c4.362 4.048 11.434 4.048 15.797 0l5.086-4.72a1.79 1.79 0 0 0 0-2.665l-2.872-2.665c-.794-.736-2.08-.736-2.873 0l-5.086 4.72c-1.19 1.103-3.118 1.103-4.308 0-1.19-1.104-1.19-2.894 0-3.998l5.086-4.72a1.79 1.79 0 0 0 0-2.665L12.48 1.552c-.793-.736-2.08-.736-2.872 0l-5.086 4.72c-4.363 4.047-4.363 10.61 0 14.658Z"
            />
            {/* Second path sans remplissage spécifié */}
            <path
                fill={isMobile ? "black" : 'white'} // Explicitement définir aucun remplissage pour ce path
                fill-opacity="1"
                stroke={strokeValue}
                strokeWidth={1.5}
                d="m6.875 4.144 5.685 5.12 2.902-2.614c.785-.707.785-1.853 0-2.56l-2.843-2.56c-.785-.707-2.057-.707-2.842 0L6.875 4.144ZM17 13.631l5.51 4.593 2.901-2.613c.785-.707.785-1.853 0-2.56l-2.843-2.56c-.785-.707-2.057-.707-2.842 0L17 13.63Z"
            />
        </svg>
    );
};

export { SvgComponent as InboundIcon };
