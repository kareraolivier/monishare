import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import Header from '../Header'

export default function Layout(): ReactElement {
  return (
    <div className="bg-indigo-800">
      <NavBar />
      <Header title="Available cars" />
      <Outlet />
    </div>
  )
}
