import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import React, { ReactElement, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: ({
    className,
  }: {
    className?: string
  }) => React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  register?: UseFormRegisterReturn<string>
}
function Input({
  Icon,
  type = 'text',
  placeholder,
  value,
  name,
  register,
  onChange,
}: Props): ReactElement {
  const additionalProps = register ? { ...register } : { name, value, onChange }

  return (
    <div className="flex w-full max-w-sm gap-5 rounded-[3rem] bg-indigo-200 p-5 py-3 shadow-xl">
      {Icon && <Icon className="shrink-0" />}
      <input
        id={register?.name ?? name}
        className="w-full flex-1 bg-transparent text-white outline-none placeholder:text-white"
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        {...additionalProps}
      />
    </div>
  )
}
export default Input
