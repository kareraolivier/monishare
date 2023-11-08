function SelectInput({ options }: { options: { id: number; text: string }[] }) {
  return (
    <div className=" max-w-sm rounded-[3rem] bg-indigo-200 p-3 shadow-xl">
      <select name="select" className=" w-full bg-indigo-200 text-white outline-none">
        {options.map(option => (
          <option key={option.id} className="p-3" value={option.text}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
