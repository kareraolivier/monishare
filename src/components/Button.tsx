import { ReactElement, ReactNode } from 'react'
import { ButtonTypes } from '../types/enums'

interface Props {
  filled?: boolean
  type?: ButtonTypes
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ filled = true, type, onClick, children }: Props): ReactElement {
  let classes = ''
  switch (type) {
    case 'SECONDARY':
      classes = `${
        filled ? 'bg-indigo-800 text-gray-100' : 'border-[3px] border-indigo-800 text-indigo-800'
      }`
      break
    case 'DISABLED':
      classes = `${
        filled ? 'bg-gray-200 text-indigo-800' : 'border-[3px] border-gray-200 text-gray-200'
      } `
      break
    default:
      classes = `${
        filled ? 'bg-gray-100 text-indigo-800' : 'border-[3px] border-gray-100 text-gray-100'
      }`
      break
  }

  return (
    <button
      onClick={onClick}
      className={`${classes} w-100 rounded-3xl p-4 text-xl font-bold shadow-lg md:w-96`}
    >
      {children}
    </button>
  )
}
