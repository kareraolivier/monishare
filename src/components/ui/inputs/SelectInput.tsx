interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    id: number
    text: string
  }[]
}

function SelectInput({ options, name, value, onChange }: SelectProps) {
  return (
    <div className="max-w-sm rounded-[3rem] bg-indigo-200 p-3 shadow-xl">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-indigo-200 text-white outline-none"
      >
        {options.map(option => (
          <option key={option.id} value={option.text}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
