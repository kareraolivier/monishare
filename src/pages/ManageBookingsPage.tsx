import { ReactElement } from 'react'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useBookings, useCarTypes } from '../hooks'
import { setBookingState } from '../util/setBookingState'
import { BookingState } from '../util/api'
import { Action } from '../types/enums'
import { useReadLocalStorage } from 'usehooks-ts'
import { Navigate } from 'react-router-dom'
import ManageBookingCard from '../components/bookings/ManageBookingCard'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'

const title = 'Manage bookings'

export default function ManageBookingsPage(): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />

  const {
    data: bookings,
    loading: bookingsLoading,
    error: bookingsError,
    refetch: refetchBookings,
  } = useBookings()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const acceptBookingHandler = async (id: number) => {
    await setBookingState(id, BookingState.ACCEPTED)
    toast('Booking is accepted', {
      type: 'success',
    })
    refetchBookings()
  }
  const declineBookingHandler = async (id: number) => {
    await setBookingState(id, BookingState.DECLINED)
    toast('Booking is declined', {
      type: 'success',
    })
    refetchBookings()
  }

  if (bookingsError || carTypesError)
    throw new Error(' Oops! Something went wrong. Please try again later.🙏')

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
        <h1 className="text-center text-2xl text-white">No cars booked!</h1>
      </>
    )
  const bookingDetails = loggedInUserCars?.map(bookedCar => {
    const type = carTypes?.find(carType => bookedCar.car.carTypeId === carType.id)

    return {
      id: bookedCar.id,
      name: bookedCar.car.name,
      image: type?.imageUrl,
      action: Action.Requested,
      user: bookedCar.renter.name,
      startDate: dayjs(bookedCar.startDate),
      endDate: dayjs(bookedCar.endDate),
      bookingState: bookedCar.state,
    }
  })

  return (
    <>
      <Header title={title} />
      <ManageBookingCard
        bookingDetails={bookingDetails}
        acceptBookingHandler={acceptBookingHandler}
        declineBookingHandler={declineBookingHandler}
      />
    </>
  )
}
