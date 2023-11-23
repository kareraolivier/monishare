import { ReactElement } from 'react'
import Header from '../components/ui/Header'
import BookingCarCard from '../components/cars/BookingCarCard'
import { Action } from '../types/enums'
import { useBookings, useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { BookingState } from '../util/api'

const title = 'My bookings'

// commented for now because converting "16" to number is giving NaN (to be fixed)
// const loggedInUserId = localStorage.getItem('userId')

export default function BookingsPage(): ReactElement {
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
    ?.filter(booking => booking.renterId === 16)
    ?.map(booking => {
      const car = cars?.find(car => car.id === booking.carId)
      const carImage = carTypes?.find(carType => carType.id === car?.carTypeId)?.imageUrl
      return {
        carDetails: {
          id: booking.id,
          name: car?.name as string,
          image: carImage as string,
          action: Action.Owned,
          user: booking.renter.name,
          startDate: new Date(booking.startDate),
          endDate: new Date(booking.endDate),
        },
        state: booking.state,
      }
    })

  if (allBookingDetails?.length === 0)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No bookings yet!</h1>
      </>
    )

  return (
    <>
      <Header title={title} />
      <div className="flex flex-col items-center justify-center">
        {allBookingDetails?.map((bookingDetail, index) => {
          const classes = `${
            allBookingDetails.length !== index + 1 && 'border-b'
          } w-full max-w-xl px-8 md:max-w-none pb-8`
          const canPickCar =
            new Date().getTime() >= new Date(bookingDetail.carDetails.startDate).getTime()

          return (
            <>
              <BookingCarCard key={index} carDetails={bookingDetail.carDetails} />
              <div className={classes}>
                {bookingDetail.state === BookingState.PENDING && (
                  <h2 className="text-lachs-200">Booking request pending</h2>
                )}
                {bookingDetail.state === BookingState.RETURNED && (
                  <h2 className="text-mustard-200">Car was returned.</h2>
                )}
                {bookingDetail.state === BookingState.ACCEPTED && (
                  <>
                    <h2 className="text-mustard-200">Booking accepted</h2>
                    {!canPickCar && (
                      <h2 className="mt-2 text-lachs-200">
                        You can not pick up your car before the agreed time.
                      </h2>
                    )}
                    {/* To be implemented */}
                    {canPickCar && <p className="text-white">Implementation of picking a car</p>}
                  </>
                )}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
