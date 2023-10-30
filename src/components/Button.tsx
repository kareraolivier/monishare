import { ReactElement, ReactNode } from 'react'
import { BUTTON_VARIANT } from '../types/enums'

interface Props {
  filled?: boolean
  variant?: BUTTON_VARIANT
  children: ReactNode
  type?: 'submit' | 'button' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  filled = true,
  variant,
  type,
  onClick,
  children,
}: Props): ReactElement {
  let classes = ''
  switch (variant) {
    case BUTTON_VARIANT.SECONDARY:
      classes = `${
        filled ? 'bg-indigo-800 text-gray-100' : 'border-2 border-indigo-800 text-indigo-800'
      }`
      break
    case BUTTON_VARIANT.DISABLED:
      classes = `${
        filled ? 'bg-gray-200 text-indigo-800' : 'border-2 border-gray-200 text-gray-200'
      } `
      break
    default:
      classes = `${
        filled ? 'bg-gray-100 text-indigo-800' : 'border-2 border-gray-100 text-gray-100'
      }`
      break
  }

  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      disabled={variant === BUTTON_VARIANT.DISABLED}
      className={`text-md w-full max-w-sm rounded-[3rem] py-3 font-bold shadow-xl ${classes}`}
    >
      {children}
    </button>
  )
}
