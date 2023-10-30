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

  if (error) throw new Error('No cars found on that Id')
  if (carTypesError) throw new Error('No carType found')
  if (ownerError) throw new Error('No owner found')

  const carData = data?.find(car => car.id === Number(id))
  if (!loading && !carData) throw new Error('No car found on this id')
  const carType = carTypes?.find(el => el.id === carData?.carTypeId)
  const carOwner = owner?.find(el => el.id === carData?.ownerId)

  return (
    <>
      <Header title="Details" />
      <div className=" flex flex-col items-center justify-center ">
        {!loading && !carTypesLoading && !ownerLoading ? (
          <CarDetails carData={carData} carType={carType} carOwner={carOwner} />
        ) : (
          <Loading className={LoadingStyles.Default} />
        )}
      </div>
    </>
  )
}
