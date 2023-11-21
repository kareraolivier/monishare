import { SubmitHandler } from 'react-hook-form/dist/types'
import { Navigate } from 'react-router-dom'
import AddCarForm from '../components/cars/AddCarForm'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useCarTypes, useAddCar } from '../hooks'
import { AddCar } from '../types/interfaces'

const title = 'NEW CAR'

export default function AddCarPage() {
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ data: addedCar, loading: addCarLoading, error: addCarError }, executeAddCar] =
    useAddCar()

  if (carTypesError)
    throw new Error(
      carTypesError.response?.data.message ??
        'The page could not be reached, sorry for the inconvenience',
    )

  if (addCarError)
    throw new Error(addCarError.response?.data.message ?? 'Creating a car was not successful')

  if (carTypesLoading || addCarLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  if (!carTypes) throw new Error('The page could not be reached, sorry for the inconvenience')

  if (addedCar) return <Navigate to="/cars" />

  const carTypesOptions = carTypes.map(carType => ({
    id: carType.id,
    value: String(carType.id),
    text: carType.name,
  }))

  const onSubmit: SubmitHandler<AddCar> = data => {
    executeAddCar({
      data: {
        carTypeId: Number(data.carTypeId),
        name: data.name,
        fuelType: data.fuelType,
        horsepower: Number(data.horsepower),
        licensePlate: data.licensePlate,
        info: data.info,
      },
    })
  }

  return (
    <div>
      <Header title={title} />
      <AddCarForm carTypesOptions={carTypesOptions} onSubmit={onSubmit} />
    </div>
  )
}
