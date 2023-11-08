import { AxiosError } from 'axios'
import Button from '../Button'
import Loading, { LoadingStyle } from '../Loading'
import Input from '../ui/Input'
interface Props {
  addCarHandler: (event: React.FormEvent<HTMLFormElement>) => void
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  carLoading: boolean
  carError: AxiosError<unknown> | null
}
export default function AddCarForm({
  addCarHandler,
  handleInputChange,
  carLoading,
  carError,
}: Props) {
  return (
    <div>
      <form onSubmit={addCarHandler} className="w-96">
        <div className="flex flex-col items-center gap-4">
          <Input onChange={handleInputChange} name="name" placeholder="name" />
          <div className="flex items-center gap-2">
            <Input
              onChange={handleInputChange}
              name="licensePlate"
              type="licensePlate"
              placeholder="licensePlate"
            />
            <Input
              onChange={handleInputChange}
              name="horsepower"
              type="horsepower"
              placeholder="horsepower"
            />
          </div>
          <Input onChange={handleInputChange} name="info" type="info" placeholder="info" />
        </div>
        <div className="flex flex-col items-center py-20">
          <Button type="submit">
            {carLoading ? <Loading loadingStyle={LoadingStyle.Small} /> : 'Add car'}
          </Button>
          <p className="py-3 text-red-200">{carError && `incorrect data`}</p>
        </div>
      </form>
    </div>
  )
}
