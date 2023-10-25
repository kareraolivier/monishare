import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import CarDetail from '../components/cars/CarDetail'
import { useCars, useCarTypes, useUser } from '../hooks'
import Header from '../components/Header'
import { CarsUser } from '../types/interface'

export default function CarDetailsPage(): ReactElement {
  const param = useParams()

  const [{ data, loading }] = useCars()
  const [{ data: image }] = useCarTypes()
  const carData = data?.filter(car => car.id === Number(param.id))[0]
  if (loading === false && carData === undefined) throw Error
  const carImage = image?.filter(el => el.id === carData?.carTypeId)[0]
  const [{ data: owner, loading: ownerLoading }] = useUser(Number(carData?.ownerId))
  if (!owner || ownerLoading) return <p>Loading...</p>
  const updatedData = { ...carData, owner: owner } as unknown as CarsUser
  if (!updatedData) return <p>no data</p>

  return (
    <div className="h-screen px-4 pt-16">
      <Header title="Details" />
      <div className=" flex flex-col items-center justify-center ">
        <CarDetail carData={updatedData} carImage={carImage} />
      </div>
    </div>
  )
}
