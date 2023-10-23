import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'

interface Props {
  title: string
}

function Header({ title }: Props): ReactElement {
  return (
    <div className="py-8 flex items-center">
      <Link to="..">
        <ChevronBackIcon className="h-auto w-4 stroke-mustard-100" />
      </Link>
      <h1 className="flex-1 text-center font-lora text-3xl uppercase text-white">{title}</h1>
    </div>
  )
}

export default Header
