import { AxiosError } from 'axios'
import Button from '../ui/Button'
import Loading, { LoadingStyle } from '../ui/Loading'
import Input from '../ui/inputs/Input'
import SelectInput from '../ui/inputs/SelectInput'
import { FuelType } from '../../util/api'

interface Props {
  addCarHandler?: (event: React.FormEvent<HTMLFormElement>) => void
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  carLoading?: boolean
  carError?: AxiosError<unknown> | null
}
export default function AddCarForm({
  addCarHandler,
  handleInputChange,
  carLoading,
  carError,
}: Props) {
  return (
    <div>
      <form onSubmit={addCarHandler}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="name">Name</label>
            <Input onChange={handleInputChange} name="name" placeholder="e.g My Nice Moni car" />
          </div>

          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="carTypeId">Type</label>
            <SelectInput
              options={[
                { id: 1, text: 'Moni Cooper' },
                { id: 2, text: 'Test 2' },
              ]}
              name="carTypeId"
            />
          </div>

          <div className="flex w-full max-w-sm gap-1 text-sm text-white">
            <div className="w-full max-w-sm space-y-2 text-sm text-white">
              <label htmlFor="licensePlate">License Plate</label>
              <Input onChange={handleInputChange} name="licensePlate" placeholder="e.g. M-XY 123" />
            </div>
            <div className="w-full max-w-sm space-y-2 text-sm text-white">
              <label htmlFor="horsepower">Horse Power</label>
              <Input onChange={handleInputChange} name="horsepower" placeholder="110" />
            </div>
          </div>
          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="fuelType">Fuel type</label>
            <SelectInput
              options={[
                { id: 1, text: FuelType.DIESEL },
                { id: 2, text: FuelType.ELECTRIC },
                { id: 3, text: FuelType.PETROL },
              ]}
              name="fuelType"
            />
          </div>

          <div className="w-full max-w-sm space-y-2 text-sm text-white">
            <label htmlFor="info">Additional Information </label>
            <Input onChange={handleInputChange} name="info" placeholder="e.g No smoking" />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-sm justify-center gap-3 py-20">
          <Button type="button" filled={false}>
            Cancel
          </Button>
          <Button type="submit">
            {carLoading ? <Loading loadingStyle={LoadingStyle.Small} /> : 'Add car'}
          </Button>
          <p className="py-3 text-red-200">{carError && `incorrect data`}</p>
        </div>
      </form>
    </div>
  )
}
