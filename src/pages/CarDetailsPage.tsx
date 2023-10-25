import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import CarDetail from '../components/cars/CarDetail'
import { useCars, useCarTypes, useUser } from '../hooks'
import Header from '../components/Header'
import { SingleCarDetails } from '../types/interface'

export default function CarDetailsPage(): ReactElement {
  const { id } = useParams()

  const [{ data, loading }] = useCars()
  const [{ data: carTypes }] = useCarTypes()
  const carData = data?.find(car => car.id === Number(id))
  if (!loading && !carData) throw new Error('No cars found on that Id')
  const carImage = carTypes?.find(el => el.id === carData?.carTypeId)
  const [{ data: owner, loading: ownerLoading }] = useUser(Number(carData?.ownerId))
  ownerLoading ? <p>Loading...</p> : owner
  const updatedData = { ...carData, owner: owner } as SingleCarDetails

  return (
    <div className="h-screen px-4 pt-16">
      <Header title="Details" />
      <div className=" flex flex-col items-center justify-center ">
        <CarDetail carData={updatedData} carImage={carImage} />
      </div>
    </div>
  )
}
