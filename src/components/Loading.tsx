import { ReactElement } from 'react'
export default function Loading(): ReactElement {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-y-8 border-gray-200"></div>
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-y-8 border-indigo-800"></div>
      </div>
    </div>
  )
}
