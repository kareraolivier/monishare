import { ReactElement } from 'react'

interface ProfileIconProps {
  className?: string
}

export default function HorseIcon({ className }: ProfileIconProps): ReactElement {
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
      <path
        d="M13.8605 12.1754C13.5773 12.9587 13.8605 14.4798 12 15.4503M12 15.4503C11.1395 15.8992 9.74173 16.3717 8.39535 16.1521L4.5 19.076L2 16.1521L10.1395 4.33919L8.39535 2C9.0155 2 11.6047 2 12.814 4.33919C20.4419 6.0234 21.186 15.1384 22 19.076M12 15.4503L10.9983 22"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
