import { ReactElement, ReactNode } from 'react'

interface Props {
  filled?: boolean
  variant?: 'primary' | 'secondary' | 'disabled'
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
    case 'secondary':
      classes = `${
        filled ? 'bg-indigo-800 text-gray-100' : 'border-2 border-indigo-800 text-indigo-800'
      }`
      break
    case 'disabled':
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
      disabled={variant === 'disabled'}
      className={`w-100 text-md rounded-[3rem] py-3 font-bold shadow-xl md:w-96 ${classes}`}
    >
      {children}
    </button>
  )
}
