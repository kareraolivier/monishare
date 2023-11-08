import { ReactElement, ReactNode } from 'react'
import { ButtonVariant } from '../../types/enums'

interface Props {
  filled?: boolean
  variant?: ButtonVariant
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
    case ButtonVariant.Secondary:
      classes = `${
        filled ? 'bg-indigo-800 text-gray-100' : 'border-2 border-indigo-800 text-indigo-800'
      }`
      break
    case ButtonVariant.Disabled:
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
      disabled={variant === ButtonVariant.Disabled}
      className={`text-md w-full max-w-sm rounded-[3rem] py-3 font-bold shadow-xl ${classes}`}
    >
      {children}
    </button>
  )
}
