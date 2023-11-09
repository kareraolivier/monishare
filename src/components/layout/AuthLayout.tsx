import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const login = localStorage.getItem('userId')

export default function AuthLayout(): ReactElement {
  return <>{login !== null ? <Outlet /> : <Navigate to="/login" />}</>
}
