import { ReactElement } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/ui/Header'
import { useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import useDeleteCar from '../hooks/useDeleteCar'
import { apiUrl } from '../util/apiUrl'
import { Navigate } from 'react-router-dom'

export default function AllCarsPage(): ReactElement {
  const loggedInUserId = localStorage.getItem('userId')
  const allCars = 'All Cars'

  if (loggedInUserId === null) return <Navigate to="login" />

  const [{ data: cars, loading: carsLoading, error: carsError }, refetchCars] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ loading: deleteLoading, error: deleteError }, deleteCar] = useDeleteCar()

  if (carsError || usersError || carTypesError)
    throw new Error('Fetching cars was not successful, sorry for inconvenience🙏')

  if (carsLoading || usersLoading || carTypesLoading)
    return (
      <>
        <Header title={allCars} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  if (cars?.length === 0)
    return (
      <>
        <Header title={allCars} />
        <h1 className="text-center text-4xl text-white">No cars found!</h1>
      </>
    )
  const loggedInUserCars = cars?.filter(car => car.ownerId === Number(loggedInUserId))
  const populatedCars = loggedInUserCars?.map(car => {
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
  const onDeleteCar = async (id?: number) => {
    await deleteCar({ url: `${apiUrl}/cars/${id}` })
    await refetchCars()
  }

  return (
    <>
      <Header title={allCars} />
      <Cars
        cars={populatedCars}
        onDeleteCar={onDeleteCar}
        deleteLoading={deleteLoading}
        deleteError={deleteError}
      />
    </>
  )
}
