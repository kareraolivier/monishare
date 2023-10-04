import { ReactElement } from 'react'

interface XIconProps {
  className?: string
  width?: string
  height?: string
}

export default function XIcon({
  className,
  width = '18',
  height = '18',
}: XIconProps): ReactElement {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      stroke="currentColor"
      className={className}
    >
      <path
        d="M12.75 5.25L5.25 12.75M5.25 5.25L12.75 12.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
