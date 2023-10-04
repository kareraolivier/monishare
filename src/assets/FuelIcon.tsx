import { ReactElement } from 'react'

interface ProfileIconProps {
  className?: string
}

export default function FuelIcon({ className }: ProfileIconProps): ReactElement {
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
        d="M18.8129 21V5.584C18.8129 4.70918 18.1037 4 17.2289 4H9.66005C8.78523 4 8.07605 4.70918 8.07605 5.584V21"
        strokeWidth="0.894737"
        strokeLinecap="round"
      />
      <rect
        x="10.1111"
        y="6.83333"
        width="6.66667"
        height="4.16667"
        rx="0.368824"
        stroke="#9CA3AF"
        strokeWidth="0.833334"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.65872 18.4325C7.8976 18.4325 8.09126 18.2389 8.09126 18C8.09126 17.7611 7.8976 17.5675 7.65872 17.5675V18.4325ZM4.63094 8.43859C4.63094 8.67748 4.82459 8.87113 5.06348 8.87113C5.30236 8.87113 5.49602 8.67748 5.49602 8.43859H4.63094ZM5.49602 13.5C5.49602 13.2611 5.30236 13.0675 5.06348 13.0675C4.82459 13.0675 4.63094 13.2611 4.63094 13.5H5.49602ZM7.65872 17.5675H6.59498V18.4325H7.65872V17.5675ZM5.49602 8.43859V7.3958H4.63094V8.43859H5.49602ZM5.49602 16.4685V13.5H4.63094V16.4685H5.49602ZM6.57039 5.45635C5.49926 5.45635 4.63094 6.32467 4.63094 7.3958H5.49602C5.49602 6.80244 5.97703 6.32143 6.57039 6.32143V5.45635ZM6.59498 17.5675C5.98804 17.5675 5.49602 17.0754 5.49602 16.4685H4.63094C4.63094 17.5532 5.51027 18.4325 6.59498 18.4325V17.5675Z"
        fill="#9CA3AF"
      />
      <rect
        x="4"
        y="8.72222"
        width="1.88889"
        height="4.72222"
        stroke="#9CA3AF"
        strokeWidth="0.944444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 21H21.1111" stroke="#9CA3AF" strokeWidth="0.944444" strokeLinecap="round" />
    </svg>
  )
}
