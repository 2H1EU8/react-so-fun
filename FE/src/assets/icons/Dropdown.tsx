import * as React from "react"
import { SVGProps } from "react"
const Dropdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    {...props}
  >
    <path
      stroke="#6F767E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4 6 4 4 4-4"
    />
  </svg>
)
export default Dropdown
