import { ReactElement } from 'react'

export default function HomePage(): ReactElement {
  return (
    <main className="mx-auto flex h-screen flex-col justify-center gap-8 py-10 lg:w-1/3">
      <h1 className="flex flex-col items-center font-lora text-5xl font-extrabold text-gray-100">
        Moni <span className="font-weight-500 font-italic font-bold">share</span>
      </h1>
      <p className="flex flex-col items-center font-lora text-lg text-gray-100">
        Hello Manuela!
        <span className="font-weight-500 font-italic">What are you up to today?</span>
      </p>
    </main>
  )
}
