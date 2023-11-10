import { ReactElement } from 'react'
import { useState } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/ui/Header'
import { useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import useDeleteCar from '../hooks/useDeleteCar'
import { apiUrl } from '../util/apiUrl'
import MyDialog from '../components/ui/Dialog'

export default function CarsPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const [carId, setCarId] = useState<number | undefined>(0)

  async function closeModal() {
    await deleteCar({ url: `${apiUrl}/cars/${carId}` })
    await refetchCars()
    setIsOpen(false)
  }

  function openModal(id?: number | undefined) {
    setIsOpen(true)
    setCarId(id)
  }
  const loggedInUserId = localStorage.getItem('userId')
  if (loggedInUserId === null)
    return (
      <>
        <Header title="All Cars" />
        <h1 className="text-center text-4xl text-white">No cars found!</h1>
      </>
    )

  const [{ data: cars, loading: carsLoading, error: carsError }, refetchCars] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ loading: deleteLoading, error: deleteError }, deleteCar] = useDeleteCar()

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
  const userCars = loggedInUserCars?.map(car => {
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
  // const onDeleteCar = async (id?: number) => {
  //   await deleteCar({ url: `${apiUrl}/cars/${id}` })
  //   await refetchCars()
  // }

  return (
    <>
      <div>
        <Header title="All Cars" />
        {/* <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button> */}
        <Cars
          cars={userCars}
          onDeleteCar={openModal}
          deleteLoading={deleteLoading}
          deleteError={deleteError}
        />
      </div>

      {isOpen && <MyDialog closeModal={closeModal} />}
    </>
  )
}
