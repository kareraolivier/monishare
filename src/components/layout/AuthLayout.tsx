import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const token = localStorage.getItem('token')
export default function AuthLayout(): ReactElement {
  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>
}
