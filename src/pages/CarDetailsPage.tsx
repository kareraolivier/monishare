import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import CarDetail from '../components/cars/CarDetail'
import { useCars, useCarTypes, useUser } from '../hooks'
import Header from '../components/Header'
import { CarDto } from '../util/api'

export default function CarDetailsPage(): ReactElement {
  const { id } = useParams()

  const [{ data, loading }] = useCars()
  const [{ data: carTypes }] = useCarTypes()
  const carData = data?.find(car => car.id === Number(id)) as CarDto
  if (!loading && !carData) throw new Error('No cars found on that Id')
  const carImage = carTypes?.find(el => el.id === carData?.carTypeId)
  const [{ data: carOwner, loading: carOwnerLoading }] = useUser(Number(carData?.ownerId))
  carOwnerLoading ? <p>Loading...</p> : carOwner

  return (
    <div className="h-screen px-4 pt-16">
      <Header title="Details" />
      <div className=" flex flex-col items-center justify-center ">
        {!loading && <CarDetail carData={carData} carImage={carImage} carOwner={carOwner} />}
      </div>
    </div>
  )
}
