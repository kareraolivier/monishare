import { ReactElement } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/ui/Header'
import { useCarTypes, useCars, useUsers, useBookCar, useBookings } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useSearchParams, Navigate } from 'react-router-dom'
import { useReadLocalStorage } from 'usehooks-ts'
import { BookCar } from '../types/interfaces'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { getAvailableCars } from '../helpers/frontend'

const title = 'Available Cars'

export default function AvailableCarPage(): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />

  const [searchParams] = useSearchParams()
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const { data: bookings, loading: bookingsLoading, error: bookingsError } = useBookings()
  const [{ data: bookedCar, loading: bookedCarLoading, error: bookedCarError }, executeBookCar] =
    useBookCar()

  const startDate = dayjs(searchParams.get('startDate'))
  const endDate = dayjs(searchParams.get('endDate'))

  if (!startDate.isValid() || !endDate.isValid()) throw new Error('Please provide valid dates')

  if (carsError || usersError || carTypesError || bookingsError)
    throw new Error('Fetching cars was not successful, sorry for inconvenience🙏')

  if (carsLoading || usersLoading || carTypesLoading || bookingsLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  if (bookedCarError) throw new Error('Booking car was not successful, sorry for inconvenience🙏')
  if (!bookedCarLoading && bookedCar) return <Navigate to="/bookings" />

  const availableCars = getAvailableCars({
    loggedInUserId: Number(loggedInUserId),
    cars,
    bookings,
    bookingRange: { startDate, endDate },
  })

  if (availableCars.length === 0)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No cars found for this time slot!</h1>
      </>
    )

  async function onBookCar(carId?: number) {
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const bookCar: BookCar = {
      carId,
      startDate,
      endDate,
    }
    await executeBookCar({
      data: bookCar,
    })
    toast('Car booked successfully', {
      type: 'success',
    })
  }

  const populatedCars = availableCars.map(car => {
    const owner = users?.find(user => car.ownerId === user.id)
    const type = carTypes?.find(carType => car.carTypeId === carType.id)
    return {
      id: car.id,
      name: car.name,
      owner: owner?.name,
      ownerId: owner?.id,
      type: type?.name,
      image: type?.imageUrl,
      url: `/cars/${car.id}`,
    }
  })

  return (
    <>
      <div>
        <Header title={title} />
        <Cars cars={populatedCars} onBookCar={onBookCar} />
      </div>
    </>
  )
}
