import { ReactElement } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/ui/Header'
import { useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import useDeleteCar from '../hooks/useDeleteCar'
import { apiUrl } from '../util/apiUrl'

export default function CarsPage(): ReactElement {
  const loggedInUserId = localStorage.getItem('userId')
  if (loggedInUserId === null)
    return (
      <>
        <Header title="All Cars" />
        <h1 className="text-center text-4xl text-white">No cars found!</h1>
      </>
    )

  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: deleteCar }, deleteMyCar] = useDeleteCar()

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
  const loggedInUserCars = cars?.filter(car => car.ownerId === Number(loggedInUserId))
  const userCars = loggedInUserCars
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
    .filter(car => car.id !== deleteCar)

  const onDeleteCar = (id?: number) => {
    deleteMyCar({ url: `${apiUrl}/cars/${id}` })
  }

  return (
    <>
      <Header title="All Cars" />
      <Cars cars={userCars} onDeleteCar={onDeleteCar} />
    </>
  )
}
