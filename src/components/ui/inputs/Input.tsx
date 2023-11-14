import React, { ReactElement, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: ({
    className,
  }: {
    className?: string
  }) => React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
}
function Input({ Icon, type = 'text', placeholder, value, name, onChange }: Props): ReactElement {
  return (
    <div className="flex w-full max-w-sm gap-5 rounded-[3rem] bg-indigo-200 p-5 py-3 shadow-xl">
      {Icon && <Icon className="shrink-0" />}
      <input
        className="w-full flex-1 bg-transparent text-white outline-none placeholder:text-white"
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
export default Input
