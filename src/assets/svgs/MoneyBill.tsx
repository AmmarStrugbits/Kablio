import * as React from "react"
const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
  >
    <path
      fill="#00FBDF"
      fillOpacity={0.1}
      stroke="#505662"
      strokeWidth={1.5}
      d="M2.546 19.045c.098.491.517.863 1.018.863h18.873c.5 0 .92-.372 1.02-.862.302-1.472.704-2.17.704-6.046 0-3.876-.402-4.574-.704-6.046-.1-.49-.52-.862-1.02-.862H3.564c-.5 0-.92.372-1.018.863C2.244 8.467 1.84 9.266 1.84 13s.404 4.533.706 6.045Z"
    />
    <circle
      cx={13.001}
      cy={13}
      r={2.679}
      fill="#fff"
      stroke="#505662"
      strokeWidth={1.5}
    />
    <path
      stroke="#505662"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.83 9.858 1.087-.014M19.28 16.108l1.086-.014"
    />
  </svg>
)
export { SvgComponent as MoneyBill }
