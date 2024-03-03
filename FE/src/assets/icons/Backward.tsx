import * as React from "react"
import { SVGProps } from "react"
const Backward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    {...props}
  >
    <path
      fill="#6F767E"
      d="M11.207 17.793a1 1 0 0 1-1.414 1.414L4 13.414a2 2 0 0 1 0-2.828l5.793-5.793a1 1 0 0 1 1.414 1.414L6.414 11H20.5a1 1 0 1 1 0 2H6.414l4.793 4.793Z"
    />
  </svg>
)
export default Backward
