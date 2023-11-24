import { ReactElement } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/ui/Header'
import { useCarTypes, useCars, useUsers, useBookCar, useBookings } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useSearchParams, Navigate } from 'react-router-dom'
import { useReadLocalStorage } from 'usehooks-ts'
import { BookCar } from '../types/interfaces'
import { BookingDto, CarDto } from '../util/api'
import { isValidRange } from '../helpers/frontend'

const title = 'Available Cars'

interface CombinedCars {
  [key: number]: { car: CarDto; bookings: BookingDto[] }
}

export default function AvailableCarPage(): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />
  const [searchParams] = useSearchParams()
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: bookedCar, loading: bookedCarLoading, error: bookedCarError }, executeBookCar] =
    useBookCar()
  const { data: bookings, loading: bookingsLoading, error: bookingsError } = useBookings()

  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  function onBookCar(carId?: number) {
    const bookCar: BookCar = {
      carId,
      startDate,
      endDate,
    }
    executeBookCar({
      data: bookCar,
    })
  }

  if (!startDate || !endDate) throw new Error('Please provide valid dates')

  if (bookedCarError) throw new Error('Booking car was not successfull, sorry for inconvenience🙏')
  if (!bookedCarLoading && bookedCar) return <Navigate to="/bookings" />

  if (carsError || usersError || carTypesError || bookingsError)
    throw new Error('Fetching cars was not successful, sorry for inconvenience🙏')

  if (carsLoading || usersLoading || carTypesLoading || bookingsLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  const notUserCars = cars?.filter(car => car.ownerId !== Number(loggedInUserId))

  const availableCars = notUserCars?.filter(
    car => bookings?.every(booking => booking.carId !== car.id),
  )
  const bookedCars = notUserCars?.filter(car => bookings?.some(booking => booking.carId === car.id))

  const bookedCarsBookings = bookedCars?.reduce((combinedCars: CombinedCars, bookedCar: CarDto) => {
    const bookedCarBookings: BookingDto[] = []
    bookings?.forEach(booking => {
      if (booking.carId !== bookedCar.id) return
      bookedCarBookings.push(booking)
    })
    combinedCars[bookedCar.id] = { car: bookedCar, bookings: bookedCarBookings }
    return combinedCars
  }, {})

  const availableBookedCarIds = Object.keys(bookedCarsBookings ?? []).filter(carId =>
    (bookedCarsBookings ?? [])[Number(carId)].bookings.every(booking =>
      isValidRange(
        { startDate: new Date(startDate), endDate: new Date(endDate) },
        { startDate: new Date(booking.startDate), endDate: new Date(booking.endDate) },
      ),
    ),
  )
  console.log(availableBookedCarIds.length, Object.keys(bookedCarsBookings ?? []))

  if (notUserCars?.length === 0)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No cars found for this time slot!</h1>
      </>
    )
  const populatedCars = availableCars?.map(car => {
    const owner = users?.find(user => car.ownerId === user.id)
    const type = carTypes?.find(carType => car.carTypeId === carType.id)
    return {
      id: car?.id,
      name: car?.name,
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
