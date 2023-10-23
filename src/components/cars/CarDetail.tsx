import { ReactElement } from 'react'
import ProfileIcon from '../../assets/ProfileIcon'
import CarIcon from '../../assets/CarIcon'
import PlateIcon from '../../assets/PlateIcon'
import HorseIcon from '../../assets/HorseIcon'
import FuelIcon from '../../assets/FuelIcon'
import AlertIcon from '../../assets/AlertIcon'
import { UserDto, CarTypeDto, CarDto } from '../../util/api'
export default function CarDetail({
  item,
  carImage,
  owner,
}: {
  item?: CarDto
  carImage?: CarTypeDto
  owner?: UserDto
}): ReactElement {
  return (
    <div className=" text-gray-100 flex flex-col md:flex-row justify-start md:items-center mx-w-[768px]">
      <img src={carImage?.imageUrl} alt="carImage" className="md:w-1/2" />
      <div className="flex flex-col gap-2 p-8">
        <h3 className="py-5 font-lora text-xl font-medium">{owner?.name}</h3>
        <div className="flex items-center gap-2">
          <ProfileIcon />
          <p>{carImage?.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <CarIcon />
          <p>{item?.name}</p>
        </div>
        {item?.licensePlate !== null && (
          <div className="flex items-center gap-2">
            <PlateIcon />
            <p>{item?.licensePlate}</p>
          </div>
        )}
        <div className="flex items-center gap-2">
          <HorseIcon />
          <p>{item?.horsepower}hp</p>
        </div>
        <div className="flex items-center gap-2">
          <FuelIcon />
          <p>{item?.fuelType}</p>
        </div>
        <div className="flex items-center gap-2">
          <AlertIcon />
          <p>No smooking</p>
        </div>
      </div>
    </div>
  )
}
