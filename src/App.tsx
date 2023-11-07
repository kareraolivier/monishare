import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Layout from './components/layout/Layout'
import BookingsPage from './pages/BookingsPage'
import CarsPage from './pages/CarsPage'
import ErrorPage from './pages/ErrorPage'
import HelloPage from './pages/HelloPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ManageBookingsPage from './pages/ManageBookingsPage'
import NewBookingsPage from './pages/NewBookingsPage'
import NewCarPage from './pages/NewCarPage'
import CarDetailsPage from './pages/CarDetailsPage'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="hello" element={<HelloPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="cars" element={<CarsPage />} />
        <Route path="cars/:id" element={<CarDetailsPage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="manage-bookings" element={<ManageBookingsPage />} />
        <Route path="book" element={<NewBookingsPage />} />
        <Route path="new-car" element={<NewCarPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
