import { ReactElement } from 'react'
import ErrorIcon from '../assets/ErrorIcon'
import Button from '../components/Button'
import { useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorPage(): ReactElement {
  const error = useRouteError()
  const errorMessage = error instanceof Error ? error.message : 'We will solve your issue soon.'

  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div className="min-h-screen bg-indigo-800">
      <div className="mx-auto flex flex-col gap-8 py-10 font-lora md:w-1/2">
        <h1 className="flex flex-col items-center text-4xl font-extrabold text-gray-100">
          OOOOOPS!
        </h1>
        <div className="mx-auto">
          <ErrorIcon />
        </div>
        <p className="flex flex-col items-center text-center text-lg text-gray-100">
          Something went wrong.
          <span>{errorMessage}</span>
        </p>
        <div className="flex justify-center px-2 font-inter">
          <Button onClick={goBack}>Go back</Button>
        </div>
      </div>
    </div>
  )
}
