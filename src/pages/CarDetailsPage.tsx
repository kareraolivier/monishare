import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import CarDetail from '../components/cars/CarDetails'
import { useCars, useCarTypes, useUsers } from '../hooks'
import Header from '../components/Header'
import { CarDto, CarTypeDto, UserDto } from '../util/api'

export default function CarDetailsPage(): ReactElement {
  const { id } = useParams()

  const [{ data, loading, error }] = useCars()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: Owner, loading: ownerLoading, error: ownerError }] = useUsers()
  const carData: CarDto | undefined = data?.find(car => car.id === Number(id))
  if (error || (!loading && !carData)) throw new Error('No cars found on that Id')
  const carType: CarTypeDto | undefined = carTypes?.find(el => el.id === carData?.carTypeId)
  if (carTypesError) throw new Error('No carType found')
  const carOwner: UserDto | undefined = Owner?.find(el => el.id === carData?.ownerId)
  if (ownerError) throw new Error('No owner found')

  return (
    <div className="h-screen px-4 pt-16">
      <Header title="Details" />
      <div className=" flex flex-col items-center justify-center ">
        {!loading && !carTypesLoading && !ownerLoading && (
          <CarDetail carData={carData} carType={carType} carOwner={carOwner} />
        )}
      </div>
    </div>
  )
}
