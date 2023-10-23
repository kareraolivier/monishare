import { ReactElement } from 'react'
import ErrorIcon from '../assets/ErrorIcon'
import Button from '../components/Button'
export default function ErrorPage(): ReactElement {
  return (
    <main className="mx-auto flex h-screen flex-col justify-center gap-8 py-10 font-lora md:w-1/2">
      <h1 className="flex flex-col items-center text-4xl font-extrabold text-gray-100">OOOOOPS!</h1>
      <div className="mx-auto">
        <ErrorIcon />
      </div>
      <p className="flex flex-col items-center text-lg text-gray-100">
        Something went wrong.
        <span className="font-weight-500">We will solve your issue soon.</span>
      </p>
      <div className="flex justify-center px-2 font-inter">
        <Button>Go back</Button>
      </div>
    </main>
  )
}
