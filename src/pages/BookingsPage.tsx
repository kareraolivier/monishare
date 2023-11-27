import { ReactElement } from 'react'
import Header from '../components/ui/Header'
import { Action } from '../types/enums'
import { useBookings, useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useReadLocalStorage } from 'usehooks-ts'
import { Navigate } from 'react-router-dom'
import MyBookingCard from '../components/bookings/MyBookingCard'

const title = 'My bookings'

export default function BookingsPage(): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />

  const { data: bookings, loading: bookingsLoading, error: bookingsError } = useBookings()
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()

  if (bookingsError || carsError || usersError || carTypesError)
    throw new Error('The page could not be reached! try again later')

  if (bookingsLoading || carsLoading || usersLoading || carTypesLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  if ([bookings, cars, users, carTypes].some(result => result?.length === 0))
    throw new Error('Unexpected error occurred! try again later')

  const allBookingDetails = bookings
    ?.filter(booking => booking.renterId === Number(loggedInUserId))
    ?.map(booking => {
      const car = cars?.find(car => car.id === booking.carId)
      const carImage = carTypes?.find(carType => carType.id === car?.carTypeId)

      return {
        carDetails: {
          id: booking.id,
          name: car?.name,
          image: carImage?.imageUrl,
          action: Action.Owned,
          user: booking.car.owner.name,
          startDate: new Date(booking.startDate),
          endDate: new Date(booking.endDate),
        },
        carId: booking.carId,
        bookingState: booking.state,
        carState: car?.state,
      }
    })

  if (allBookingDetails?.length === 0 || !allBookingDetails)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No bookings yet!</h1>
      </>
    )

  return (
    <>
      <Header title={title} />
      <MyBookingCard allBookingDetails={allBookingDetails} />
    </>
  )
}
