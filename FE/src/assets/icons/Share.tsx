import * as React from "react"
import { SVGProps } from "react"
const Share = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    {...props}
  >
    <path
      fill="#6F767E"
      d="M13.164 7.137a3.999 3.999 0 0 0 1.03 1.714l-3.357 2.014a3.999 3.999 0 0 0-1.03-1.714l3.357-2.014ZM9.807 14.851l3.357 2.014a3.997 3.997 0 0 1 1.03-1.714l-3.357-2.014a3.998 3.998 0 0 1-1.03 1.714Z"
    />
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M17 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Share
