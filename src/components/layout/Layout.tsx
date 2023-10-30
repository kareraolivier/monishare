import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

export default function Layout(): ReactElement {
  return (
    <main className="min-h-screen bg-indigo-800">
      <NavBar />
      <div className="mx-auto max-w-[1500px] px-4 pb-10  pt-20">
        <Outlet />
      </div>
    </main>
  )
}
