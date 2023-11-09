import { ReactElement } from 'react'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

export default function HelloPage(): ReactElement {
  return (
    <main className="mx-auto flex h-screen flex-col justify-center gap-8 py-10 font-lora lg:w-1/3">
      <h1 className="flex flex-col items-center text-5xl font-extrabold text-gray-100">
        MONI <span className="font-italic font-medium">share</span>
      </h1>
      <p className="flex flex-col items-center text-lg text-gray-100">
        Hello Manuela!
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
