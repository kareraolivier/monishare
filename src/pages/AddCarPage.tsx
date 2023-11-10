import { useNavigate } from 'react-router-dom'
import AddCarForm from '../components/cars/AddCarForm'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useCarTypes, useAddCar } from '../hooks'
import { CarPost } from '../types/interfaces'

export default function AddCarPage() {
  const navigate = useNavigate()

  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: addCarMessage, loading: addCarLoading, error: addCarError }, postCar] = useAddCar()

  if (carTypesError) throw 'Sorry for the inconvenience'
  if (addCarError) throw 'Creating a car was not successful'

  if (carTypesLoading || addCarLoading)
    return (
      <>
        <Header title="All Cars" />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  if (!carTypes) throw 'The page could not be reached, sorry for the inconvenience'

  if (addCarMessage) navigate('/cars')

  const cancelPostHandler = () => navigate('/cars')

  const carPostHandler = (car: CarPost) => {
    postCar({
      data: { ...car, carTypeId: Number(car.carTypeId), horsepower: Number(car.horsepower) },
    })
  }

  return (
    <div>
      <Header title="NEW CAR" />
      <AddCarForm carTypes={carTypes} onCancel={cancelPostHandler} onPost={carPostHandler} />
    </div>
  )
}
