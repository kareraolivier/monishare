import { ReactElement, SelectHTMLAttributes } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    id: number
    value: string
    text: string
  }[]
}

export default function SelectInput({ options, name, value, onChange }: Props): ReactElement {
  return (
    <div className="max-w-sm rounded-[3rem] bg-indigo-200 p-3 shadow-xl">
      <select
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
