import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useReadLocalStorage } from 'usehooks-ts'

export default function AuthLayout(): ReactElement {
  const token = useReadLocalStorage('token')

  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>
}
