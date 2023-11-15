import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function AuthLayout(): ReactElement {
  const token = localStorage.getItem('token')
  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>
}
