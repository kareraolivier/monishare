// import { useState } from 'react'
import AddCarForm from '../components/cars/AddCarForm'
import Header from '../components/ui/Header'
// import { addNewCar } from '../hooks'
// import { CarDto, CarState, FuelType } from '../util/api'
export default function AddCarPage() {
  // const [formData, setFormData] = useState({
  //   carTypeId: null,
  //   name: '',
  //   fuelType: '',
  //   userId: null,
  //   horsepower: null,
  //   licensePlate: '',
  //   info: '',
  // })
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target
  //   setFormData({ ...formData, [name]: value })
  // }
  // const [{ data: car, loading: carLoading, error: carError }, executePost] = addNewCar()

  // const addCarHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   executePost({
  //     data: {
  //       carTypeId: formData.carTypeId,
  //       name: formData.name,
  //       fuelType: formData.fuelType,
  //       userId: 2,
  //       horsepower: formData.horsepower,
  //       licensePlate: formData.licensePlate,
  //       info: formData.info,
  //     },
  //   })
  // }
  // console.log(car)
  return (
    <div>
      <Header title="NEW CAR" />
      <AddCarForm
      // addCarHandler={addCarHandler}
      // handleInputChange={handleInputChange}
      // carLoading={carLoading}
      // carError={carError}
      />
    </div>
  )
}
