import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={22}
    height={22}
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#E5FFFC"
      stroke="#505662"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 9.929a3.028 3.028 0 1 0 0-6.056 3.028 3.028 0 0 0 0 6.056ZM14.944 14.605a5.094 5.094 0 0 0-9.888 0c.255.085.522.144.797.175 1.35.15 2.735.28 4.147.28 1.412 0 2.798-.13 4.147-.28.275-.03.542-.09.797-.175Z"
    />
    <path
      stroke="#505662"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.295 1.347c.773.083 1.534.175 2.285.26.96.109 1.723.87 1.829 1.831.083.747.17 1.506.25 2.275M14.295 18.653c.773-.083 1.534-.175 2.285-.26a2.078 2.078 0 0 0 1.829-1.831c.083-.747.17-1.506.25-2.275M5.705 1.347c-.772.083-1.534.175-2.285.26a2.078 2.078 0 0 0-1.829 1.831c-.083.747-.17 1.506-.25 2.275M5.705 18.653c-.772-.083-1.534-.175-2.285-.26a2.078 2.078 0 0 1-1.829-1.831c-.083-.747-.17-1.506-.25-2.275"
    />
  </svg>
)
export { SvgComponent as WorkEnvironment }