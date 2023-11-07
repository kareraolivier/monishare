import React, { ReactElement, useState } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: ({
    className,
  }: {
    className?: string
  }) => React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  userInput: (value: string) => void
}
function Input({ Icon, type = 'text', placeholder, userInput }: InputProps): ReactElement {
  const [input, setInput] = useState('')
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    userInput(e.target.value)
  }

  return (
    <div className="flex w-full max-w-sm gap-5 rounded-[3rem] bg-indigo-200 p-5 py-3 shadow-xl">
      {Icon && <Icon className="shrink-0" />}
      <input
        className="w-full flex-1 bg-transparent text-white outline-none placeholder:text-white"
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={input}
      />
    </div>
  )
}
export default Input
