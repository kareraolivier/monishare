import { ReactElement } from 'react'
import ErrorIcon from '../assets/ErrorIcon'
export default function ErrorPage(): ReactElement {
  return (
    <main className="mx-auto flex h-[95vh] flex-col items-center justify-center gap-8 py-10 lg:w-1/3">
      <h1 className="flex flex-col items-center font-lora text-5xl font-extrabold text-gray-100">
        Oooops!
      </h1>
      <ErrorIcon />
      <p className="flex flex-col items-center font-lora text-lg text-gray-100">
        Something went wrong.
        <span className="font-weight-500 font-italic">We will solve your issue soon.</span>
      </p>
    </main>
  )
}
