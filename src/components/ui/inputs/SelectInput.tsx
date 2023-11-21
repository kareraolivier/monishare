import { ReactElement, SelectHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  register?: UseFormRegisterReturn<string>
  options: {
    id: number
    value: string
    text: string
  }[]
}

export default function SelectInput({
  options,
  name,
  value,
  register,
  onChange,
}: Props): ReactElement {
  if (register) {
    return (
      <div className="max-w-sm rounded-[3rem] bg-indigo-200 p-3 shadow-xl">
        <select
          id={register.name}
          {...register}
          className="w-full bg-indigo-200 text-white outline-none"
        >
          {options.map(option => (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    )
  }
  return (
    <div className="max-w-sm rounded-[3rem] bg-indigo-200 p-3 shadow-xl">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-indigo-200 text-white outline-none"
      >
        {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}
