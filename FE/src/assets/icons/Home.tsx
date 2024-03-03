import * as React from "react"
import { SVGProps } from "react"
const Home = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 34a3 3 0 0 1-3-3v-7.665a3 3 0 0 1 .993-2.23l7-6.3a3 3 0 0 1 4.014 0l7 6.3a3 3 0 0 1 .993 2.23V31a3 3 0 0 1-3 3H17Zm15-10.665V31a1 1 0 0 1-1 1h-3v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5h-3a1 1 0 0 1-1-1v-7.664a1 1 0 0 1 .331-.743l7-6.3a1 1 0 0 1 1.338 0l7 6.3a1 1 0 0 1 .331.743ZM22 32v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h-4Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Home
