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
import AllCarsPage from './pages/AllCarsPage'
import ErrorPage from './pages/ErrorPage'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import ManageBookingsPage from './pages/ManageBookingsPage'
import NewBookingsPage from './pages/NewBookingsPage'
import CarDetailsPage from './pages/CarDetailsPage'
import AddCarPage from './pages/AddCarPage'
import AuthLayout from './components/layout/AuthLayout'
import LoginPage from './pages/LoginPage'
import AvailableCarsPage from './pages/AvailableCarsPage'
import 'react-toastify/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'

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
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<AuthLayout />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="cars" element={<AllCarsPage />} />
          <Route path="cars/:id" element={<CarDetailsPage />} />
          <Route path="available-cars" element={<AvailableCarsPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="manage-bookings" element={<ManageBookingsPage />} />
          <Route path="book" element={<NewBookingsPage />} />
          <Route path="add-car" element={<AddCarPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>,
    ),
  )
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} newestOnTop />
      <RouterProvider router={router} />
    </>
  )
}

export default App
