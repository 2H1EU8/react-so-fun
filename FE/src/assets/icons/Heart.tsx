import * as React from "react"
import { SVGProps } from "react"

interface HeartProps extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const Heart = ({ isActive, ...props }: HeartProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    {...props}
  >
    { isActive ? (
      <path
      fill="#FF6A55"
      d="M11.8 5.214a5.674 5.674 0 0 0-8.126 0c-2.232 2.274-2.232 5.954 0 8.228l6.898 7.03a2 2 0 0 0 2.856 0l6.898-7.03c2.232-2.274 2.232-5.954 0-8.228a5.674 5.674 0 0 0-8.126 0 .28.28 0 0 1-.4 0Z"
      />
    ) :
    (
      <path
        fill={"#6F767E"}
        fillRule="evenodd"
        d="M10.373 6.614a3.674 3.674 0 0 0-5.272 0 3.893 3.893 0 0 0 0 5.427l6.185 6.304a1 1 0 0 0 1.428 0l6.185-6.304a3.893 3.893 0 0 0 0-5.427 3.674 3.674 0 0 0-5.272 0l-.913.931a1 1 0 0 1-1.428 0l-.913-.93Zm1.427-1.4.2.203.2-.203a5.674 5.674 0 0 1 8.126 0c2.232 2.274 2.232 5.954 0 8.228l-6.185 6.303a3 3 0 0 1-4.282 0l-6.185-6.303c-2.232-2.274-2.232-5.954 0-8.228a5.674 5.674 0 0 1 8.126 0Z"
        clipRule="evenodd"
      />
    )

    }
  </svg>
)

export default Heart
