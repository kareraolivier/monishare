import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

export default function Layout(): ReactElement {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
