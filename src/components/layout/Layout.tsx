import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout(): ReactElement {
  return (
    <div>
      <p> Navigation Bar</p>
      <Outlet />
    </div>
  )
}
