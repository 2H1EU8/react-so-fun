import * as React from "react"
import { SVGProps } from "react"
const Income = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 8.084A6 6 0 1 0 15.916 15H10a1 1 0 0 1-1-1V8.084Zm-3.445-.736A8 8 0 0 1 10 6a1 1 0 0 1 1 1v6h6a1 1 0 0 1 1 1A8 8 0 1 1 5.555 7.348Z"
      clipRule="evenodd"
    />
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M13.293 2.293A1 1 0 0 1 14 2a8 8 0 0 1 8 8 1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V3a1 1 0 0 1 .293-.707ZM15 4.083V9h4.916A6 6 0 0 0 15 4.084Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Income
