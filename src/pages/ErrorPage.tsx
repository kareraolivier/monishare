import { ReactElement } from 'react'
import ErrorIcon from '../assets/ErrorIcon'
import Button from '../components/Button'
export default function ErrorPage(): ReactElement {
  return (
    <main className="mx-auto flex h-screen flex-col justify-center gap-8 py-10 lg:w-1/3">
      <h1 className="flex flex-col items-center font-lora text-4xl font-extrabold text-gray-100">
        OOOOOPS!
      </h1>
      <div className="mx-auto">
        <ErrorIcon />
      </div>
      <p className="flex flex-col items-center font-lora text-lg text-gray-100">
        Something went wrong.
        <span className="font-weight-500 font-lora">We will solve your issue soon.</span>
      </p>
      <div className="flex flex-col gap-4 px-2 md:mx-auto md:w-2/3">
        <Button>Go back</Button>
      </div>
    </main>
  )
}
