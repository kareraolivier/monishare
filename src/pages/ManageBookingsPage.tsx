import { ReactElement } from 'react'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useBookings, useCarTypes } from '../hooks'
import BookingCarCard from '../components/cars/BookingCarCard'
import { Action } from '../types/enums'
import Button from '../components/ui/Button'
import { useReadLocalStorage } from 'usehooks-ts'
import { Navigate } from 'react-router-dom'
// import { BookCarDetails } from '../types/interfaces'

const title = 'Manage bookings'

export default function ManageBookingsPage(): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />
  const { data: bookings, loading: bookingsLoading, error: bookingsError } = useBookings()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()

  if (bookingsError || carTypesError)
    throw new Error('Booking car was not successfull, sorry for inconvenience🙏')

  if (bookingsLoading || carTypesLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )
  const loggedInUserCars = bookings?.filter(
    booking => booking.car.ownerId === Number(loggedInUserId),
  )
  if (loggedInUserCars?.length === 0)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No booked car available!</h1>
      </>
    )
  const bookingDetails = loggedInUserCars?.map(bookedCar => {
    const type = carTypes?.find(carType => bookedCar.car.carTypeId === carType.id)
    if (type)
      return {
        id: bookedCar.id,
        name: bookedCar.car.name,
        image: type.imageUrl,
        action: Action.Requested,
        user: bookedCar.renter.name,
        startDate: new Date(bookedCar.startDate),
        endDate: new Date(bookedCar.endDate),
      }
  })
  if (bookingDetails?.length === 0)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No booked car available!</h1>
      </>
    )
  return (
    <>
      <Header title={title} />
      {bookingDetails?.map(bookingDetail => (
        <>
          {' '}
          <BookingCarCard key={bookingDetail?.id} carDetails={bookingDetail} />
          <div className="flex flex-wrap justify-center gap-2 border-b border-b-gray-100 pb-4">
            <Button>Accept</Button>
            <Button filled={false}>Decline</Button>
          </div>
        </>
      ))}
    </>
  )
}
