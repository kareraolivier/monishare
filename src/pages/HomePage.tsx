import { ReactElement } from 'react'
import Button from '../components/Button'

export default function HomePage(): ReactElement {
  return (
    <main className="mx-auto flex h-screen flex-col justify-center gap-8 py-10 font-lora lg:w-1/3">
      <h1 className="flex flex-col items-center text-5xl font-extrabold text-gray-100">
        Moni <span className="font-weight-200 font-italic font-medium">share</span>
      </h1>
      <p className="flex flex-col items-center text-lg text-gray-100">
        Hello Manuela!
        <span className="font-weight-500">What are you up to today?</span>
      </p>
      <div className="flex flex-col items-center gap-4 px-2 font-inter md:mx-auto md:w-2/3">
        <Button>Book a car</Button>
        <p className="text-center text-lg text-gray-100">or</p>
        <Button filled={false}>See My Cars</Button>
        <Button filled={false}>See My Bookings</Button>
      </div>
    </main>
  )
}
