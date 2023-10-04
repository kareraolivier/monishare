import { ReactElement } from 'react'

interface CarIconProps {
  className?: string
}

export default function CarPlusIcon({ className }: CarIconProps): ReactElement {
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
        d="M3.71429 17H2V13.8235C2 12.7967 2.52514 11.8412 3.39197 11.2908L7 9L9.42857 5.82994C11.0481 5.39579 12.5315 5.13937 13.8469 5.04346M20.2857 17H22V11.4853C22 11.4853 21.825 10.8515 21.5134 10M9 17H15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 10L18 10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12L20 13" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.44445" cy="17" r="2.22222" />
      <circle cx="17.5556" cy="17" r="2.22222" />
      <path d="M20 2V8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 5L23 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
