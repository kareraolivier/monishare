import { ReactElement } from 'react'

interface UnlockIconProps {
  className?: string
}
export default function UnlockIcon({ className }: UnlockIconProps): ReactElement {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      <path
        d="M6 8.25V5.25C6 4.25 6.6 2.25 9 2.25C10.4327 2.25 11.224 2.96274 11.6291 3.75M6 8.25H3.75V15.75H14.25V8.25H6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
