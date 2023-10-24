import { ReactElement } from 'react'
import ProfileIcon from '../../assets/ProfileIcon'
import CarIcon from '../../assets/CarIcon'
import PlateIcon from '../../assets/PlateIcon'
import HorseIcon from '../../assets/HorseIcon'
import FuelIcon from '../../assets/FuelIcon'
import AlertIcon from '../../assets/AlertIcon'
import { CarState, CarTypeDto, FuelType, UserDto } from '../../util/api'

interface Checker {
  licensePlate?: null
  name: string
  owner: UserDto
  horsepower?: string
  info?: string
  plate?: string
  fuelType: FuelType
  carState: CarState
}
interface Pro {
  item: Checker
  carImage: CarTypeDto
}
export default function CarDetail(props: Pro): ReactElement {
  return (
    <div className=" mx-w-[768px] flex flex-col justify-start text-gray-100 md:flex-row md:items-center">
      <img src={props.carImage?.imageUrl} alt="carImage" className="md:w-1/2" />
      <div className="flex flex-col gap-2 p-8">
        <h3 className="py-5 font-lora text-xl font-medium">{props.item?.owner.name}</h3>
        <div className="flex items-center gap-2">
          <ProfileIcon />
          <p>{props.carImage?.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <CarIcon />
          <p>{props.item?.name}</p>
        </div>
        {props.item?.licensePlate !== null && (
          <div className="flex items-center gap-2">
            <PlateIcon />
            <p>{props.item?.licensePlate}</p>
          </div>
        )}
        <div className="flex items-center gap-2">
          <HorseIcon />
          <p>{props.item?.horsepower}hp</p>
        </div>
        <div className="flex items-center gap-2">
          <FuelIcon />
          <p>{props.item?.fuelType}</p>
        </div>
        <div className="flex items-center gap-2">
          <AlertIcon />
          <p>No smooking</p>
        </div>
      </div>
    </div>
  )
}
