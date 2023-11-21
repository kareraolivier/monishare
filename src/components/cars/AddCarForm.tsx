import Button from '../ui/Button'
import Input from '../ui/inputs/Input'
import SelectInput from '../ui/inputs/SelectInput'
import { FuelType } from '../../util/api'
import ErrorMessage from '../ui/ErrorMessage'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { animated, useSpring } from '@react-spring/web'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AddCar } from '../../types/interfaces'

interface Props {
  carTypesOptions: { id: number; value: string; text: string }[]
  onSubmit: SubmitHandler<AddCar>
}
export default function AddCarForm({ carTypesOptions, onSubmit }: Props) {
  const [cancel, setCancel] = useState(false)
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCar>()

  const isFormValid = Object.keys(errors).length === 0

  if (cancel) return <Navigate to="/cars" />

  const cancelPostHandler = () => setCancel(true)

  return (
    <animated.div style={springs}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="name">Name *</label>
            <Input
              register={{
                ...register('name', { required: true, maxLength: 10, pattern: /^[\d\w ]+$/ }),
              }}
              placeholder="e.g My Nice Moni car"
            />
            {errors.name && <ErrorMessage>Name should 1-10 characters alphanumeric</ErrorMessage>}
          </div>

          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="carTypeId">Type *</label>
            <SelectInput
              options={carTypesOptions}
              value={'' ?? carTypesOptions[0].id}
              register={{ ...register('carTypeId') }}
            />
            {errors.carTypeId && <ErrorMessage>Select type from the dropdown</ErrorMessage>}
          </div>

          <div className="flex w-full max-w-sm gap-1 text-sm text-white">
            <div className="w-full max-w-sm space-y-2 text-sm text-white">
              <label htmlFor="licensePlate">License Plate *</label>
              <Input
                register={{
                  ...register('licensePlate', { required: true, pattern: /^[\d\w- ]+$/ }),
                }}
                placeholder="e.g. M-XY 123"
              />
              {errors.licensePlate && (
                <ErrorMessage>Should only contain number and letters</ErrorMessage>
              )}
            </div>
            <div className="w-full max-w-sm space-y-2 text-sm text-white">
              <label htmlFor="horsepower">Horse Power *</label>
              <Input
                register={{ ...register('horsepower', { required: true, pattern: /^[1-9]+$/ }) }}
                placeholder="110"
              />
              {errors.horsepower && <ErrorMessage>Should be positive number</ErrorMessage>}
            </div>
          </div>
          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="fuelType">Fuel type *</label>
            <SelectInput
              options={[
                { id: 1, value: FuelType.DIESEL, text: FuelType.DIESEL },
                { id: 2, value: FuelType.ELECTRIC, text: FuelType.ELECTRIC },
                { id: 3, value: FuelType.PETROL, text: FuelType.PETROL },
              ]}
              register={{ ...register('fuelType') }}
            />
            {errors.fuelType && <ErrorMessage>Select type from the dropdown.</ErrorMessage>}
          </div>

          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="info">Additional Information </label>
            <Input register={{ ...register('info') }} placeholder="e.g No smoking" />
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
    </animated.div>
  )
}
