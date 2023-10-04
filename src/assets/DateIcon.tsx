import { ReactElement } from 'react'

interface DateIconProps {
  className?: string
}

export default function DateIcon({ className }: DateIconProps): ReactElement {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      <path
        d="M17 9H1M17 9V17C17 18.1046 16.1046 19 15 19H3C1.89543 19 1 18.1046 1 17V5C1 3.89543 1.89543 3 3 3H15C16.1046 3 17 3.89543 17 5V9ZM12 1V5M6 1V5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
