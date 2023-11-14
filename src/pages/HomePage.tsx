import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Logo from '../components/Logo'

export default function HomePage(): ReactElement {
  return (
    <main className="mx-auto flex h-screen flex-col  gap-8 py-10 font-lora lg:w-1/3">
      <Logo />
      <>
        <p className="flex flex-col items-center py-10 text-lg text-gray-100">
          Start sharing your Monis
          <span>With the world</span>
        </p>
        <div className="flex flex-col items-center gap-4 px-2 py-10 font-inter md:mx-auto md:w-2/3">
          <Link to="login" className="flex w-full justify-center">
            <Button>Login</Button>
          </Link>
        </div>
      </>
    </main>
  )
}
