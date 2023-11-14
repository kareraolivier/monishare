import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import CarDetails from '../components/cars/CarDetails'
import { useCars, useCarTypes, useUsers } from '../hooks'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'

export default function CarDetailsPage(): ReactElement {
  const { id } = useParams()
  const title = 'Details'

  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()

  if (carsError) throw new Error('No cars found on that Id')
  if (carTypesError) throw new Error('No carType found')
  if (usersError) throw new Error('No owner found')

  if (carsLoading || carTypesLoading || usersLoading) {
    return (
      <>
        <Header title={title} />
        <div className="flex flex-col items-center justify-center">
          <Loading loadingStyle={LoadingStyle.Default} />
        </div>
      </>
    )
  }

  const carData = cars?.find(car => car.id === Number(id))
  if (!carsLoading && !carData) throw new Error('No car found on this id')
  const carType = carTypes?.find(carType => carType.id === carData?.carTypeId)
  const carOwner = users?.find(user => user.id === carData?.ownerId)

  return (
    <>
      <Header title={title} />
      <div className="flex flex-col items-center justify-center">
        <CarDetails carData={carData} carType={carType} carOwner={carOwner} />
      </div>
    </>
  )
}
