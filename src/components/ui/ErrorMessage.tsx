import { ReactNode } from 'react'

function ErrorMessage({ children }: { children: ReactNode }) {
  return <p className="text-center text-xs text-red-300">{children}</p>
}

export default ErrorMessage
