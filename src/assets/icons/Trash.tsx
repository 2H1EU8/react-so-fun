import * as React from "react"
import { SVGProps } from "react"
const Trash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.333 8.332c.46 0 .834.373.834.833v4.167a.833.833 0 1 1-1.667 0V9.165c0-.46.373-.833.833-.833ZM11.667 8.332c.46 0 .833.373.833.833v4.167a.833.833 0 1 1-1.666 0V9.165c0-.46.373-.833.833-.833Z"
      clipRule="evenodd"
    />
    <path
      fill="#6F767E"
      fillRule="evenodd"
      d="M8.333 1.668a2.5 2.5 0 0 0-2.5 2.5H2.5a.833.833 0 1 0 0 1.667h.833v10a2.5 2.5 0 0 0 2.5 2.5h8.334a2.5 2.5 0 0 0 2.5-2.5v-10h.833a.833.833 0 1 0 0-1.667h-3.334a2.5 2.5 0 0 0-2.5-2.5H8.333Zm4.167 2.5a.833.833 0 0 0-.834-.833H8.333a.833.833 0 0 0-.833.833h5ZM5.833 5.835H5v10c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833v-10H5.833Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Trash
