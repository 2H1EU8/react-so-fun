import * as React from "react"
import { SVGProps } from "react"
const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      clipRule="evenodd"
    />
    <path fill="#6F767E" d="M18 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4ZM8 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6H8Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Instagram
