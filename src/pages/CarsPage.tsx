import { ReactElement, useState } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/ui/Header'
import { useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'

export default function CarsPage(): ReactElement {
  const loggedInUserId = localStorage.getItem('userId')
  if (loggedInUserId === null)
    return (
      <>
        <Header title="All Cars" />
        <h1 className="text-center text-4xl text-white">No cars found!</h1>
      </>
    )

  const [carIds, setCarIds] = useState<(number | undefined)[]>([0])
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()

  if (carsError || usersError || carTypesError)
    throw new Error('Fetching cars was not successful, sorry for inconvenience🙏')

  if (carsLoading || usersLoading || carTypesLoading)
    return (
      <>
        <Header title="All Cars" />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  if (cars?.length === 0)
    return (
      <>
        <Header title="All Cars" />
        <h1 className="text-center text-4xl text-white">No cars found!</h1>
      </>
    )

  const userCars = cars
    ?.map(car => {
      const owner = users?.find(user => Number(loggedInUserId) === user.id)
      const type = carTypes?.find(carType => car.carTypeId === carType.id)
      return {
        id: car?.id,
        name: car?.name,
        owner: owner?.name,
        type: type?.name,
        image: type?.imageUrl,
        url: `/cars/${car.id}`,
      }
    })
    .filter(cars => !carIds.includes(cars.id))

  const onDeleteCar = (id?: number) => {
    setCarIds(previous => [...previous, id])
  }
  return (
    <>
      <Header title="All Cars" />
      <Cars cars={userCars} onDeleteCar={onDeleteCar} />
    </>
  )
}
