import Button from '../ui/Button'
import Input from '../ui/inputs/Input'
import SelectInput from '../ui/inputs/SelectInput'
import { FuelType } from '../../util/api'
import ErrorMessage from '../ui/ErrorMessage'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Navigate } from 'react-router-dom'

interface CarPropValue {
  value: string
  isValid: boolean
  hasError: boolean
}

interface Props {
  car: {
    carTypeId: { value: string | null; isValid: boolean; hasError: boolean }
    name: CarPropValue
    fuelType: CarPropValue
    horsepower: CarPropValue
    licensePlate: CarPropValue
    info: CarPropValue
  }
  carTypesOptions: { id: number; value: string; text: string }[]
  handleSubmit: (event: FormEvent<HTMLFormElement>) => undefined
  changeHandler: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
export default function AddCarForm({ car, carTypesOptions, handleSubmit, changeHandler }: Props) {
  const [cancel, setCancel] = useState(false)
  if (cancel) return <Navigate to="/cars" />

  const formValues = Object.values(car)
  const isFormValid = formValues.every(value => value.isValid)

  const cancelPostHandler = () => setCancel(true)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="name">Name</label>
            <Input
              onChange={changeHandler}
              name="name"
              value={car.name.value}
              placeholder="e.g My Nice Moni car"
            />
            {car.name.hasError && <ErrorMessage>Name should not be alphanumeric !</ErrorMessage>}
          </div>

          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="carTypeId">Type</label>
            <SelectInput
              onChange={changeHandler}
              options={carTypesOptions}
              value={car.carTypeId.value ?? carTypesOptions[0].id}
              name="carTypeId"
            />
            {car.carTypeId.hasError && <ErrorMessage>Select type from the dropdown</ErrorMessage>}
          </div>

          <div className="flex w-full max-w-sm gap-1 text-sm text-white">
            <div className="w-full max-w-sm space-y-2 text-sm text-white">
              <label htmlFor="licensePlate">License Plate</label>
              <Input
                onChange={changeHandler}
                name="licensePlate"
                value={car.licensePlate.value}
                placeholder="e.g. M-XY 123"
              />
              {car.licensePlate.hasError && (
                <ErrorMessage>Should only contain number and letters</ErrorMessage>
              )}
            </div>
            <div className="w-full max-w-sm space-y-2 text-sm text-white">
              <label htmlFor="horsepower">Horse Power</label>
              <Input
                onChange={changeHandler}
                name="horsepower"
                value={car.horsepower.value}
                placeholder="110"
              />
              {car.horsepower.hasError && <ErrorMessage>Should only contain number</ErrorMessage>}
            </div>
          </div>
          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="fuelType">Fuel type</label>
            <SelectInput
              onChange={changeHandler}
              options={[
                { id: 1, value: FuelType.DIESEL, text: FuelType.DIESEL },
                { id: 2, value: FuelType.ELECTRIC, text: FuelType.ELECTRIC },
                { id: 3, value: FuelType.PETROL, text: FuelType.PETROL },
              ]}
              name="fuelType"
              value={car.fuelType.value}
            />
            {car.fuelType.hasError && <ErrorMessage>Select type from the dropdown.</ErrorMessage>}
          </div>

          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="info">Additional Information </label>
            <Input
              onChange={changeHandler}
              name="info"
              value={car.info.value}
              placeholder="e.g No smoking"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-sm justify-center gap-3 py-8">
          <Button onClick={cancelPostHandler} type="button" filled={false}>
            Cancel
          </Button>
          <Button type="submit" disabled={!isFormValid}>
            Add car
          </Button>
        </div>
      </form>
    </div>
  )
}
