import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'

interface Props {
  title: string
}

function Header({ title }: Props): ReactElement {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div className="flex items-center py-8">
      <button onClick={goBack}>
        <ChevronBackIcon className="h-auto w-4 cursor-pointer stroke-mustard-100" />
      </button>
      <h1 className="flex-1 text-center font-lora text-3xl uppercase text-white">{title}</h1>
    </div>
  )
}

export default Header
