import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

export default function Layout(): ReactElement {
  return (
    <div className="bg-indigo-800">
      <NavBar />
      <Outlet />
    </div>
  )
}
