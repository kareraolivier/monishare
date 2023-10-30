import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import CarDetails from '../components/cars/CarDetails'
import { useCars, useCarTypes, useUsers } from '../hooks'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { LoadingStyles } from '../components/Loading'
export default function CarDetailsPage(): ReactElement {
  const { id } = useParams()

  const [{ data, loading, error }] = useCars()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: owner, loading: ownerLoading, error: ownerError }] = useUsers()
  const carData = data?.find(car => car.id === Number(id))
  if (error || (!loading && !carData)) throw new Error('No cars found on that Id')
  const carType = carTypes?.find(el => el.id === carData?.carTypeId)
  if (carTypesError) throw new Error('No carType found')
  const carOwner = owner?.find(el => el.id === carData?.ownerId)
  if (ownerError) throw new Error('No owner found')

  return (
    <div className="h-screen px-4 pt-16">
      <Header title="Details" />
      <div className=" flex flex-col items-center justify-center ">
        {!loading && !carTypesLoading && !ownerLoading ? (
          <CarDetails carData={carData} carType={carType} carOwner={carOwner} />
        ) : (
          <Loading className={LoadingStyles.Medium} />
        )}
      </div>
    </div>
  )
}
