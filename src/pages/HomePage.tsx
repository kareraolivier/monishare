import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
export default function HomePage(): ReactElement {
  return (
    <main className="mx-auto flex h-screen flex-col  gap-8 py-10 font-lora lg:w-1/3">
      <h1 className="flex flex-col items-center text-5xl font-extrabold text-gray-100">
        MONI<span className="font-italic font-medium">share</span>
      </h1>
      <div className="flex h-3/5 flex-col justify-around">
        <p className="flex flex-col items-center text-lg text-gray-100">
          Start sharing your Monis
          <span>With the world</span>
        </p>
        <div className="flex flex-col items-center gap-4 px-2 font-inter md:mx-auto md:w-2/3">
          <Link to="login" className="flex w-full justify-center">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
