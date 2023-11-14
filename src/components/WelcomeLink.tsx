import { Link } from 'react-router-dom'
import Logo from '../assets/Logo'

export default function WelcomeLink() {
  return (
    <Link to="welcome" className="absolute left-1/2 -translate-x-1/2 translate-y-2">
      <Logo className="w-18" />
    </Link>
  )
}
