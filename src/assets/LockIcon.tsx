import { ReactElement } from 'react'

interface LockIconProps {
  className?: string
}
export default function LockIcon({ className }: LockIconProps): ReactElement {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      <path
        d="M3.5 7.25V4.25C3.5 3.25 4.1 1.25 6.5 1.25C8.9 1.25 9.5 3.25 9.5 4.25V7.25M3.5 7.25H1.25V14.75H11.75V7.25H9.5M3.5 7.25H9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
