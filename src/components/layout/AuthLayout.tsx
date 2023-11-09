import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const login = localStorage.getItem('userId')
login === null && <Navigate to="/login" />
export default function AuthLayout(): ReactElement {
  return <>{login !== null && <Outlet />}</>
}
