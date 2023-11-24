import { ReactElement } from 'react'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useBookings, useCarTypes } from '../hooks'
import { setBookingState } from '../util/setBookingState'
import { BookingState } from '../util/api'
import BookingCarCard from '../components/cars/BookingCarCard'
import { Action } from '../types/enums'
import Button from '../components/ui/Button'
import { useReadLocalStorage } from 'usehooks-ts'
import { Navigate } from 'react-router-dom'

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
  if (bookingsError || carTypesError)
    throw new Error('Booking car was not successfull, sorry for inconvenience🙏')

  if (bookingsLoading || carTypesLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )
  const acceptBookingHandler = async (id?: number) => {
    if (!id) return
    await setBookingState(id, BookingState.ACCEPTED)
    refetchBookings()
  }
  const declineBookingHandler = async (id?: number) => {
    if (!id) return
    await setBookingState(id, BookingState.DECLINED)
    refetchBookings()
  }

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
    if (type)
      return {
        booking: {
          id: bookedCar.id,
          name: bookedCar.car.name,
          image: type.imageUrl,
          action: Action.Requested,
          user: bookedCar.renter.name,
          startDate: new Date(bookedCar.startDate),
          endDate: new Date(bookedCar.endDate),
        },
        bookingState: bookedCar?.state,
      }
  })

  return (
    <>
      <Header title={title} />
      {bookingDetails?.map(bookingDetail => (
        <div key={bookingDetail?.booking.id}>
          {bookingDetail && <BookingCarCard carDetails={bookingDetail?.booking} />}
          <div className="flex flex-wrap justify-center gap-2 border-b border-b-gray-100 pb-4">
            {bookingDetail?.bookingState === BookingState.ACCEPTED ? (
              <h2 className="text-mustard-200">Booking accepted</h2>
            ) : bookingDetail?.bookingState === BookingState.DECLINED ? (
              <h2 className="text-lachs-200">Booking declined</h2>
            ) : bookingDetail?.bookingState === BookingState.PICKED_UP ? (
              <h2 className="text-mustard-200">Car was picked up</h2>
            ) : (
              <>
                <Button onClick={() => acceptBookingHandler(bookingDetail?.booking.id)}>
                  Accept
                </Button>
                <Button
                  filled={false}
                  onClick={() => declineBookingHandler(bookingDetail?.booking.id)}
                >
                  Decline
                </Button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
