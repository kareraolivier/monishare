import { ReactElement } from 'react'

interface CarIconProps {
  className?: string
}

export default function CarIcon({ className }: CarIconProps): ReactElement {
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
        d="M3.71429 17H2V13.8235C2 12.7967 2.52514 11.8412 3.39197 11.2908L7 9L9.42857 5.82994C14.5714 4.45126 18.3429 4.86486 19.7143 6.51928C21.0857 8.17369 22 11.4853 22 11.4853V17H20.2857M9 17H15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 10L18 10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12L20 13" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.44439" cy="17" r="2.22222" />
      <circle cx="17.5555" cy="17" r="2.22222" />
    </svg>
  )
}
