import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import ProfileIcon from '../../assets/ProfileIcon'
import CarIcon from '../../assets/CarIcon'
import { CarDetails } from '../../types/interfaces'

function Car({ carDetails }: { carDetails: CarDetails }): ReactElement {
  return (
    <div className="group flex flex-col items-center rounded-xl bg-indigo-400 p-4">
      <div className="grid grid-cols-5 gap-2">
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
            to={carDetails.url}
            className="inline-block text-sm font-bold text-mustard-100 duration-150 hover:scale-110"
          >
            Show details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Car
