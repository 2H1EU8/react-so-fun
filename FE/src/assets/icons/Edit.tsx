import * as React from "react"
import { SVGProps } from "react"
const Edit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.113 3.174a2.5 2.5 0 0 1 3.536 0l1.178 1.178a2.5 2.5 0 0 1 0 3.536l-8.66 8.66a.834.834 0 0 1-.426.228l-4.42.884a.833.833 0 0 1-.98-.98l.884-4.42a.833.833 0 0 1 .228-.426l8.66-8.66Zm2.357 1.178 1.179 1.179a.833.833 0 0 1 0 1.178L14.47 7.888 12.113 5.53l1.179-1.179a.833.833 0 0 1 1.178 0ZM10.935 6.71 4.81 12.834l-.59 2.946 2.947-.589 6.125-6.125-2.357-2.357Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Edit
