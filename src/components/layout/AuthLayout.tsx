import { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const loggedInUserId = localStorage.getItem('userId')
loggedInUserId === null && <Navigate to="/login" />
export default function AuthLayout(): ReactElement {
  return <>{loggedInUserId !== null && <Outlet />}</>
}
