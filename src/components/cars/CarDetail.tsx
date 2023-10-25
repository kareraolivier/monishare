import { ReactElement } from 'react'
import ProfileIcon from '../../assets/ProfileIcon'
import CarIcon from '../../assets/CarIcon'
import PlateIcon from '../../assets/PlateIcon'
import HorseIcon from '../../assets/HorseIcon'
import FuelIcon from '../../assets/FuelIcon'
import AlertIcon from '../../assets/AlertIcon'
import { CarTypeDto } from '../../util/api'
import { CarsUser } from '../../types/interface'

export default function CarDetail({
  carData,
  carImage,
}: {
  carData?: CarsUser
  carImage?: CarTypeDto
}): ReactElement {
  return (
    <div className="mx-w-[768px] flex flex-col justify-start text-gray-100 md:flex-row md:items-center">
      <img src={carImage?.imageUrl} alt={carImage?.name} className="md:w-1/2" />
      <div className="flex flex-col gap-2 p-8">
        <h3 className="py-5 font-lora text-xl font-medium">{carData?.owner.name}</h3>
        <div className="flex items-center gap-2">
          <ProfileIcon />
          <p>{carImage?.name}</p>
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
          <p>{carData?.horsepower}hp</p>
        </div>
        <div className="flex items-center gap-2">
          <FuelIcon />
          <p>{carData?.fuelType}</p>
        </div>
        <div className="flex items-center gap-2">
          <AlertIcon />
          <p>No smooking</p>
        </div>
      </div>
    </div>
  )
}
