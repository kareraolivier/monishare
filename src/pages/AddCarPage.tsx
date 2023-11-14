import { useState, ChangeEvent, FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import AddCarForm from '../components/cars/AddCarForm'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useCarTypes, useAddCar } from '../hooks'
import { newCarValidation } from '../util/formValidation'
import { FuelType } from '../util/api'

const title = 'NEW CAR'

export default function AddCarPage() {
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: addCarMessage, loading: addCarLoading, error: addCarError }, executeAddCar] =
    useAddCar()
  const [car, setCar] = useState({
    carTypeId: { value: null, isValid: true, hasError: false },
    name: { value: '', isValid: false, hasError: false },
    fuelType: { value: FuelType.PETROL, isValid: true, hasError: false },
    horsepower: { value: '', isValid: false, hasError: false },
    licensePlate: { value: '', isValid: false, hasError: false },
    info: { value: '', isValid: true, hasError: false },
  })

  if (carTypesError)
    throw new Error(carTypesError.response?.data.message ?? 'Sorry for the inconvenience')

  if (addCarError)
    throw new Error(addCarError.response?.data.message ?? 'Creating a car was not successful')

  if (carTypesLoading || addCarLoading)
    return (
      <>
        <Header title={title} />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  if (!carTypes) throw 'The page could not be reached, sorry for the inconvenience'

  if (addCarMessage) return <Navigate to="/cars" />

  const formIsValid =
    car.carTypeId.isValid &&
    car.fuelType.isValid &&
    car.horsepower.isValid &&
    car.info.isValid &&
    car.licensePlate.isValid &&
    car.name.isValid

  const carTypesOptions = carTypes.map(carType => ({
    id: carType.id,
    value: String(carType.id),
    text: carType.name,
  }))

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    const list = []
    if ('options' in event.target) {
      for (const { value } of event.target.options) {
        list.push(value)
      }
    }

    const inputIsValid =
      list.length !== 0 ? newCarValidation(name, value, list) : newCarValidation(name, value)

    setCar(prevCar => ({
      ...prevCar,
      [name]: { value: value, isValid: inputIsValid, hasError: !inputIsValid },
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): undefined => {
    event.preventDefault()
    executeAddCar({
      data: {
        carTypeId: Number(car.carTypeId.value ?? carTypesOptions[0].id),
        name: car.name.value,
        fuelType: car.fuelType.value,
        horsepower: Number(car.horsepower.value),
        licensePlate: car.licensePlate.value,
        info: car.info.value,
      },
    })
  }

  return (
    <div>
      <Header title={title} />
      <AddCarForm
        car={car}
        formIsValid={formIsValid}
        carTypesOptions={carTypesOptions}
        handleSubmit={handleSubmit}
        changeHandler={changeHandler}
      />
    </div>
  )
}
