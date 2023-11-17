import { ReactElement, useEffect } from 'react'
import { useState } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/ui/Header'
import { useCarTypes, useCars, useUsers } from '../hooks'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import useDeleteCar from '../hooks/useDeleteCar'
import { apiUrl } from '../util/apiUrl'
import DeleteCarDialog from '../components/ui/DeleteCarDialog'
import { Link, Navigate } from 'react-router-dom'
import Button from '../components/ui/Button'

const title = 'All Cars'

export default function CarsPage(): ReactElement {
  const loggedInUserId = localStorage.getItem('userId')
  if (loggedInUserId === null) return <Navigate to="/login" />

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [carId, setCarId] = useState<number | undefined>()

  const [{ data: cars, loading: carsLoading, error: carsError }, refetchCars] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ loading: deleteLoading, error: deleteError }, executeDeleteCar] = useDeleteCar()

  useEffect(() => {
    refetchCars()
  }, [])

  async function onDeleteCar() {
    await executeDeleteCar({ url: `${apiUrl}/cars/${carId}` })
    await refetchCars()
    setModalIsOpen(false)
  }

  function openDeleteModal(id?: number) {
    setModalIsOpen(true)
    setCarId(id)
  }

  function onCancelDeleteCar() {
    setCarId(undefined)
    setModalIsOpen(false)
  }

  if (carsError || usersError || carTypesError)
    throw new Error('Fetching cars was not successful, sorry for inconvenience🙏')

  if (carsLoading || usersLoading || carTypesLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  const loggedInUserCars = cars?.filter(car => car.ownerId === Number(loggedInUserId))
  if (loggedInUserCars?.length === 0)
    return (
      <>
        <Header title={title} />
        <h1 className="text-center text-2xl text-white">No cars found!</h1>
      </>
    )
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

  return (
    <>
      <div>
        <Header title={title} />
        <Cars cars={populatedCars} onDeleteCar={openDeleteModal} />
      </div>

      {modalIsOpen && (
        <DeleteCarDialog
          onDeleteCar={onDeleteCar}
          onCancelDeleteCar={onCancelDeleteCar}
          deleteLoading={deleteLoading}
          deleteError={deleteError}
        />
      )}
      <Link to="/add-car" className="flex w-full justify-center py-8">
        <Button>Add new car</Button>
      </Link>
    </>
  )
}
