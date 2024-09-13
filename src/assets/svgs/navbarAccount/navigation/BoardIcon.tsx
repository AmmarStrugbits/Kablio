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
    const fillValue = isActive ? (isMobile ? "#00FBDF" : "black") : (isMobile ? "black" : "white");
    const strokeValue = isActive ? (isMobile ? "#00FBDF" : "black") : (isMobile ? "white" : "#505662");

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isActive ? "35" : "29"}
            height={isActive ? "28" : "24"}
            viewBox="0 0 25 22"
            {...props}
        >
            {/* Définition des masques */}
            <mask id="mask1" fill="#fff">
                <rect width={11.364} height={9.675} y={0.716} rx={0.5} />
            </mask>
            <mask id="mask2" fill="#fff">
                <rect width={11.364} height={9.675} x={13.637} y={0.716} rx={0.5} />
            </mask>
            <mask id="mask3" fill="#fff">
                <rect width={11.364} height={9.675} y={12.325} rx={0.5} />
            </mask>
            <mask id="mask4" fill="#fff">
                <rect width={11.364} height={9.675} x={13.637} y={12.325} rx={0.5} />
            </mask>

            {/* Utilisation des masques pour les rectangles */}
            <rect
                fill={fillValue}
                width={11.364}
                height={9.675}
                y={0.716}
                stroke={strokeValue}
                strokeWidth={2}
                mask="url(#mask1)"
                rx={0.5}
            />
            <rect

                fill={fillValue}
                width={11.364}
                height={9.675}
                x={13.637}
                y={0.716}
                stroke={strokeValue}
                strokeWidth={2}
                mask="url(#mask2)"
                rx={0.5}
            />
            <rect

                fill={fillValue}
                width={11.364}
                height={9.675}
                y={12.325}
                stroke={strokeValue}
                strokeWidth={2}
                mask="url(#mask3)"
                rx={0.5}
            />
            <rect

                fill={fillValue}
                width={11.364}
                height={9.675}
                x={13.637}
                y={12.325}
                stroke={strokeValue}
                strokeWidth={2}
                mask="url(#mask4)"
                rx={0.5}
            />
        </svg>
    );
};

export { SvgComponent as BoardIcon };
