import { ReactElement } from 'react'

interface TimeIconProps {
  className?: string
}

export default function TimeIcon({ className }: TimeIconProps): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 6L12 12.5L16 10.3636" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12H7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 12H19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L12 17" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7L12 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
