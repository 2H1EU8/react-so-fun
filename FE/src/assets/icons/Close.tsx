import * as React from "react"
import { SVGProps } from "react"
const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    {...props}
  >
    <path
      fill="#EFEFEF"
      d="M5.59 4.412a.833.833 0 0 0-1.18 1.179L8.822 10l-4.41 4.411a.833.833 0 0 0 1.178 1.179L10 11.18l4.41 4.41a.833.833 0 0 0 1.18-1.178l-4.412-4.41L15.59 5.59a.833.833 0 1 0-1.178-1.179L10 8.822l-4.41-4.41Z"
    />
  </svg>
)
export default Close
