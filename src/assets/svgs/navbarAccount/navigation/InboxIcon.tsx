import * as React from "react"
import { SVGProps } from "react"

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
    const strokeValue = isActive ? (isMobile ? "black" : "white") : (isMobile ? "#D9D9D9" : "#505662");

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillValue}
            width={isActive ? "35" : "28"}
            height={isActive ? "28" : "22"}
            viewBox="0 0 28 22"
            {...props}
        >
            <path
                stroke={strokeValue}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7.391 2.27C9.334 1.354 11.555.87 13.82.869c1.884-.001 3.744.333 5.441.977 1.697.644 3.188 1.581 4.36 2.742 1.174 1.161 1.999 2.515 2.415 3.962a7.824 7.824 0 0 1-.012 4.395c-.424 1.446-1.257 2.797-2.436 3.954-1.18 1.157-2.676 2.09-4.376 2.727-1.7.639-3.562.966-5.446.959a15.515 15.515 0 0 1-4.581-.703l-7.66 1.004a.5.5 0 0 1-.525-.691l1.95-4.585c-.974-1.347-1.534-2.86-1.628-4.414-.108-1.781.4-3.552 1.469-5.124C3.859 4.5 5.449 3.186 7.39 2.27ZM9.002 8.507H19.02M9.002 13.362h7.578"
            />
        </svg>
    );
};

export { SvgComponent as InboxIcon }
