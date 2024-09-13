import * as React from "react"
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="m9.699 15.16-1.506-2.327 4.827-3.37 3.726 5.697H9.699Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="m.69 9.585 2.06-6.821h-.862L6.652.23l3.386 2.533h-.877L8.294 6.82h6.448L.5 16.769l2.427-7.184H.69Z"
    />
    <path fill="#000" d="M9.385 5.982h7.022L20.5 3.138h-7.408L9.386 5.982Z" />
  </svg>
)
export { SvgComponent as LogoCheckBox }
