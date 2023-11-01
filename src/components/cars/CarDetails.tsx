import { ReactElement } from 'react'
import ProfileIcon from '../../assets/ProfileIcon'
import CarIcon from '../../assets/CarIcon'
import PlateIcon from '../../assets/PlateIcon'
import HorseIcon from '../../assets/HorseIcon'
import FuelIcon from '../../assets/FuelIcon'
import AlertIcon from '../../assets/AlertIcon'
import { CarTypeDto, CarDto, UserDto } from '../../util/api'

export default function CarDetail({
  carData,
  carType,
  carOwner,
}: {
  carData?: CarDto
  carType?: CarTypeDto
  carOwner?: UserDto
}): ReactElement {
  return (
    <div className="mx-w-[768px] flex flex-col justify-start overflow-x-hidden text-gray-100 md:flex-row md:items-center">
      <img src={carType?.imageUrl} alt={carType?.name} className="animate-slideLeft md:w-1/2" />
      <div className="flex animate-slideRight flex-col gap-2 p-8">
        <h3 className="py-5 font-lora text-xl font-medium">{carType?.name}</h3>
        <div className="flex items-center gap-2">
          <ProfileIcon />
          <p>{carOwner?.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <CarIcon />
          <p>{carData?.name}</p>
        </div>
        {carData?.licensePlate !== null && (
          <div className="flex items-center gap-2">
            <PlateIcon />
            <p>{carData?.licensePlate}</p>
          </div>
        )}
        <div className="flex items-center gap-2">
          <HorseIcon />
          {carData?.horsepower && <p>{carData?.horsepower}hp</p>}
        </div>
        <div className="flex items-center gap-2">
          <FuelIcon />
          <p>{carData?.fuelType}</p>
        </div>
        <div className="flex items-center gap-2">
          <AlertIcon />
          <p className="font-bold">No smoking</p>
        </div>
      </div>
    </div>
  )
}
