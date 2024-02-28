import * as React from "react"
import { SVGProps } from "react"
const Help = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    {...props}
  >
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      clipRule="evenodd"
    />
    <circle cx={12} cy={18} r={1} fill="#6F767E" />
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M12 8c-.87 0-1.611.555-1.886 1.333a1 1 0 1 1-1.886-.666A4.001 4.001 0 1 1 13 13.874V15a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1 2 2 0 0 0 0-4Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Help
