import * as React from "react"

import { SVGProps } from "react"

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.624 2.75c-.869.04-1.722.134-2.553.23a2.094 2.094 0 0 0-1.834 1.838C1.117 5.898 1 7.012 1 8.153c0 1.14.116 2.256.237 3.335.107.96.874 1.727 1.834 1.838 1.084.125 2.205.249 3.35.249 1.147 0 2.267-.124 3.352-.25a2.094 2.094 0 0 0 1.834-1.837 38.97 38.97 0 0 0 .212-2.38"
    />
    <path
      fill="#000"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.343 1.643-3.685 4.18-.505 2.375c-.08.382.317.744.69.626l2.363-.743 3.806-4.004c.632-.666.522-1.778-.243-2.455-.747-.66-1.833-.652-2.426.02Z"
    />
  </svg>
)
export default EditIcon