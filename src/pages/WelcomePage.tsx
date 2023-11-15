import { ReactElement } from 'react'
import Button from '../components/ui/Button'
import { useUser } from '../hooks'
import { Link, Navigate } from 'react-router-dom'
import Logo from '../components/Logo'

export default function WelcomePage(): ReactElement {
  const loggedInUserId = localStorage.getItem('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />

  const [{ data: user, error: userError }] = useUser(loggedInUserId)
  if (userError) throw new Error('No user found')

  return (
    <main className="mx-auto flex h-screen flex-col justify-center gap-8 py-10 font-lora lg:w-1/3">
      <Logo />
      <p className="flex flex-col items-center text-lg text-gray-100">
        {user && `Hello ${user.name}!`}
        <span>What are you up to today?</span>
      </p>
      <div className="flex flex-col items-center gap-4 px-2 font-inter md:mx-auto md:w-2/3">
        <Link to="/book" className="flex w-full justify-center">
          <Button>Book a car</Button>
        </Link>
        <p className="text-center text-lg text-gray-100">or</p>
        <Link to="/cars" className="flex w-full justify-center">
          <Button filled={false}>See My Cars</Button>
        </Link>

        <Link to="/bookings" className="flex w-full justify-center">
          <Button filled={false}>See My Bookings</Button>
        </Link>
      </div>
    </main>
  )
}
