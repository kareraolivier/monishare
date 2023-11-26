import { ReactElement } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/ui/Header'
import { useCarTypes, useCars, useUsers, useBookCar } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useSearchParams, Navigate } from 'react-router-dom'
import { useReadLocalStorage } from 'usehooks-ts'
import { BookCar } from '../types/interfaces'

const title = 'Available Cars'

export default function AvailableCarPage(): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />
  const [searchParams] = useSearchParams()
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: bookedCar, loading: bookedCarLoading, error: bookedCarError }, executeBookCar] =
    useBookCar()

  if (bookedCarError) throw new Error('Booking car was not successfull, sorry for inconvenience🙏')
  if (!bookedCarLoading && bookedCar) return <Navigate to="/bookings" />

  if (carsError || usersError || carTypesError)
    throw new Error('Fetching cars was not successful, sorry for inconvenience🙏')

  if (carsLoading || usersLoading || carTypesLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  const currrentUserCars = cars?.filter(car => car.ownerId !== Number(loggedInUserId))
  if (currrentUserCars?.length === 0)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No cars found!</h1>
      </>
    )
  function onBookCar(carId?: number) {
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const bookCar: BookCar = {
      carId,
      startDate,
      endDate,
    }
    executeBookCar({
      data: bookCar,
    })
  }
  const populatedCars = currrentUserCars?.map(car => {
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
