import { useState, ChangeEvent, FormEvent } from 'react'
import Button from '../ui/Button'
import Input from '../ui/inputs/Input'
import SelectInput from '../ui/inputs/SelectInput'
import { CarTypeDto, FuelType } from '../../util/api'
import { CarPost } from '../../types/interfaces'
import ErrorMessage from '../ui/ErrorMessage'
import { newCarValidation } from '../../util/formValidation'

interface Props {
  carTypes: CarTypeDto[]
  onCancel: () => void
  onPost: (car: CarPost) => void
}
// eslint-disable-next-line max-lines-per-function
export default function AddCarForm({ carTypes, onCancel, onPost }: Props) {
  const [car, setCar] = useState({
    carTypeId: { value: String(carTypes[0].id), isValid: true },
    name: { value: '', isValid: false },
    fuelType: { value: FuelType.PETROL, isValid: true },
    horsepower: { value: '', isValid: false },
    licensePlate: { value: '', isValid: false },
    info: { value: '', isValid: false },
  })

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
      [name]: { value: value, isValid: inputIsValid },
    }))
  }

  const test = (): number => 5
  test()

  const handleSubmit = (event: FormEvent<HTMLFormElement>): undefined => {
    event.preventDefault()
    onPost(car)
  }
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
            {!car.name.isValid && <ErrorMessage>Name should not be empty !</ErrorMessage>}
          </div>

          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="carTypeId">Type</label>
            <SelectInput
              onChange={changeHandler}
              options={carTypesOptions}
              value={car.carTypeId.value}
              name="carTypeId"
            />
            {!car.carTypeId.isValid && <ErrorMessage>Select type from the dropdown</ErrorMessage>}
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
              {!car.licensePlate.isValid && (
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
              {!car.horsepower.isValid && <ErrorMessage>Should only contain number</ErrorMessage>}
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
            {!car.fuelType.isValid && <ErrorMessage>Select type from the dropdown.</ErrorMessage>}
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

        <div className="mx-auto flex w-full max-w-sm justify-center gap-3 py-20">
          <Button onClick={onCancel} type="button" filled={false}>
            Cancel
          </Button>
          <Button type="submit">Add car</Button>
        </div>
      </form>
    </div>
  )
}
