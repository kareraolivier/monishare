import { ReactElement, useState } from 'react'
import Header from '../components/ui/Header'
import BookingCarCard from '../components/bookings/BookingCarCard'
import { Action } from '../types/enums'
import { useBookings, useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { BookingState, CarState } from '../util/api'
import { useReadLocalStorage } from 'usehooks-ts'
import { Navigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import { setBookingState } from '../util/setBookingState'
import { setCarState } from '../util/setCarState'

const title = 'My bookings'

// eslint-disable-next-line max-lines-per-function
export default function BookingsPage(): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />
  const { data: bookings, loading: bookingsLoading, error: bookingsError } = useBookings()
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [useCar, setUseCar] = useState(false)
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

  const pickUpHandler = async (id: number) => {
    await setBookingState(id, BookingState.PICKED_UP)
  }

  const lockingStateHandler = async (id: number) => {
    await setCarState(id, CarState.LOCKED)
  }

  const unLockingStateHandler = async (id: number) => {
    await setCarState(id, CarState.UNLOCKED)
  }

  const returnHandler = async () => {
    await setBookingState(232, BookingState.RETURNED)
  }

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
          user: car?.name,
          startDate: new Date(booking.startDate),
          endDate: new Date(booking.endDate),
        },
        carId: booking.carId,
        bookingState: booking.state,
        carState: car?.state,
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
          const classes =
            'border-b w-full max-w-xl px-8 md:max-w-none pb-8 flex flex-wrap justify-center gap-2'
          const canPickCar =
            new Date().getTime() >= new Date(bookingDetail.carDetails.startDate).getTime()

          return (
            <>
              <BookingCarCard key={index} carDetails={bookingDetail?.carDetails} />
              <div className={classes}>
                {bookingDetail.bookingState === BookingState.PENDING && (
                  <h2 className="text-lachs-200">Booking request pending</h2>
                )}
                {bookingDetail.bookingState === BookingState.RETURNED && (
                  <h2 className="text-mustard-200">Car was returned.</h2>
                )}
                {bookingDetail.bookingState === BookingState.DECLINED && (
                  <h2 className="text-lachs-200">Your booking was declined.</h2>
                )}
                {bookingDetail.bookingState === BookingState.ACCEPTED && (
                  <div className="flex w-full flex-col items-center justify-center">
                    <h2 className="text-mustard-200">Booking accepted</h2>
                    {!canPickCar && (
                      <h2 className="mt-2 text-lachs-200">
                        You can not pick up your car before the agreed time.
                      </h2>
                    )}
                    {canPickCar && (
                      <Button onClick={() => pickUpHandler(bookingDetail?.carDetails.id)}>
                        Pick Up
                      </Button>
                    )}
                  </div>
                )}
                {bookingDetail.bookingState === BookingState.PICKED_UP && (
                  <>
                    {!useCar ? (
                      <Button onClick={() => setUseCar(true)}>Use Car</Button>
                    ) : (
                      <>
                        <Button onClick={() => unLockingStateHandler(bookingDetail.carId)}>
                          Unlock
                        </Button>

                        <Button onClick={() => lockingStateHandler(bookingDetail.carId)}>
                          Lock
                        </Button>
                      </>
                    )}
                    <Button filled={false} onClick={returnHandler}>
                      Return
                    </Button>
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
