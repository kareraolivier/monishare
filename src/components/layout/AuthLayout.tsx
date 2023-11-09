import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const login = true

export default function AuthLayout(): ReactElement {
  return <>{login ? <Outlet /> : <Navigate to="/login" />}</>
}
