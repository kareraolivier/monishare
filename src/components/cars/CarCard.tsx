import { ReactElement } from 'react'
import ProfileIcon from '../../assets/ProfileIcon'
import CarIcon from '../../assets/CarIcon'
import { CarDetails } from '../../types/interfaces'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import { ButtonVariant } from '../../types/enums'
import { useReadLocalStorage } from 'usehooks-ts'
interface Props {
  carDetails: CarDetails
  onBookCar?: (id?: number) => void
  onDeleteCar?: (id?: number) => void
}
export default function CarCard({ carDetails, onBookCar, onDeleteCar }: Props): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')

  const bookingHandler = () => onBookCar && onBookCar(carDetails.id)
  const deleteHandler = () => onDeleteCar && onDeleteCar(carDetails.id)

  return (
    <div className="group flex flex-col items-center justify-between rounded-xl bg-indigo-400 p-4">
      <>
        <div className="grid grid-cols-5 items-center gap-2">
          <div className="col-span-3 flex items-end justify-end">
            <img
              src={carDetails.image}
              alt={carDetails.name}
              className="duration-200 group-hover:scale-125"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <h1 className="font-lora text-xl font-medium text-white">{carDetails.name}</h1>
            <div className="flex gap-x-3 text-sm font-normal text-gray-100">
              <ProfileIcon /> <span>{carDetails.owner}</span>
            </div>
            <div className="flex gap-x-3 text-sm font-normal text-gray-100">
              <CarIcon /> <span>{carDetails.type}</span>
            </div>
          </div>
        </div>
        <div className="my-5 grid grid-cols-5 content-end gap-x-5">
          <div className="col-span-2 col-start-4">
            <Link
              to={`${carDetails.url}`}
              className="inline-block text-sm font-bold text-mustard-100 duration-150 hover:scale-110"
            >
              Show details
            </Link>
          </div>
        </div>
      </>

      {Number(loggedInUserId) === carDetails.ownerId ? (
        <Button filled={false} variant={ButtonVariant.Delete} onClick={deleteHandler}>
          Delete Car
        </Button>
      ) : (
        <Button onClick={bookingHandler}>Book car</Button>
      )}
    </div>
  )
}
