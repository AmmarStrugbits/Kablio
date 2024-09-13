import * as React from "react"
import { SVGProps } from "react"
interface CustomSVGProps extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}
const SvgComponent: React.FC<CustomSVGProps> = ({
  isActive = false,
  ...props
}) => {
  // Définit explicitement le remplissage pour le premier path

  const fillValueInternalCharacter = isActive ? "black" : "black";
  const strokeValueInternalCharacter = isActive ? "black" : "#D9D9D9";

  const fillValueExternalCharacter = isActive ? "#00FBDF" : "black";
  const strokeValueExternalCharacter = isActive ? "black" : "#D9D9D9";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      width={isActive ? "35" : "27"}
      height={isActive ? "28" : "25"}
      {...props}
    >
      <path

        fill={fillValueExternalCharacter}
        stroke={strokeValueExternalCharacter}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 24C18.851 24 24 18.851 24 12.5S18.851 1 12.5 1 1 6.149 1 12.5 6.149 24 12.5 24Z"
      />
      <path

        fill={fillValueInternalCharacter}
        stroke={strokeValueInternalCharacter}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19 21.608C17.181 23.11 14.933 24 12.5 24s-4.681-.889-6.5-2.392c.362-1.53 1.146-2.898 2.244-3.905C9.445 16.602 10.949 16 12.5 16c1.551 0 3.055.602 4.256 1.703 1.098 1.007 1.882 2.374 2.244 3.905Z"
      />
    </svg>

  );
};
export { SvgComponent as YouIconMobile }