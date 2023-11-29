import { ReactElement } from 'react'
import Header from '../components/ui/Header'
import { Action } from '../types/enums'
import { useBookings, useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useReadLocalStorage } from 'usehooks-ts'
import { Navigate } from 'react-router-dom'
import MyBookingCard from '../components/bookings/MyBookingCard'
import dayjs from 'dayjs'
import { BookingState } from '../util/api'
import { useNavigate } from 'react-router-dom'
import { setBookingState } from '../util/setBookingState'
import { toast } from 'react-toastify'

const title = 'My bookings'

export default function BookingsPage(): ReactElement {
  const navigate = useNavigate()

  const loggedInUserId = useReadLocalStorage('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />

  const { data: bookings, loading: bookingsLoading, error: bookingsError } = useBookings()
  const [{ data: cars, loading: carsLoading, error: carsError }, refetch] = useCars()

  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()

  const pickUpCarHandler = async (id: number) => {
    await setBookingState(id, BookingState.PICKED_UP)
    toast('Car is picked-up', {
      type: 'success',
    })
  }

  const returnCarHandler = async (id: number) => {
    await setBookingState(id, BookingState.RETURNED)
    toast('Car is returned', {
      type: 'success',
    })
    navigate('/cars')
  }
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

  const bookingDetails = bookings
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
          startDate: dayjs(booking.startDate),
          endDate: dayjs(booking.endDate),
          bookingState: booking.state,
        },
        carId: booking.carId,
        carState: car?.state,
      }
    })

  if (bookingDetails?.length === 0 || !bookingDetails)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No bookings yet!</h1>
      </>
    )

  return (
    <>
      <Header title={title} />
      <MyBookingCard
        bookingDetails={bookingDetails}
        returnCarHandler={returnCarHandler}
        pickUpCarHandler={pickUpCarHandler}
        refetch={refetch}
      />
    </>
  )
}
