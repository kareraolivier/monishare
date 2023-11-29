import { SubmitHandler } from 'react-hook-form/dist/types'
import { useNavigate } from 'react-router-dom'
import AddCarForm from '../components/cars/AddCarForm'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useCarTypes, useAddCar } from '../hooks'
import { toast } from 'react-toastify'
import { CarInfo } from '../types/interfaces'

const title = 'NEW CAR'

export default function AddCarPage() {
  const navigate = useNavigate()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ loading: addCarLoading, error: addCarError }, executeAddCar] = useAddCar()

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

  const carTypesOptions = carTypes.map(carType => ({
    id: carType.id,
    value: String(carType.id),
    text: carType.name,
  }))

  const onSubmit: SubmitHandler<CarInfo> = data => {
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
    toast('Car added successfully', {
      type: 'success',
    })
    navigate('/cars')
  }

  return (
    <div>
      <Header title={title} />
      <AddCarForm carTypesOptions={carTypesOptions} onSubmit={onSubmit} />
    </div>
  )
}
