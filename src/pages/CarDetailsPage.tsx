import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import CarDetail from '../components/cars/CarDetail'
import { useCars, useCarTypes, useUser } from '../hooks'
import Header from '../components/Header'
import { CarTypeDto, UserDto, FuelType, CarState } from '../util/api'

interface Checker {
  licensePlate?: null
  name: string
  owner: UserDto
  horsepower?: string
  info?: string
  plate?: string
  fuelType: FuelType
  carState: CarState
}

export default function CarDetailsPage(): ReactElement {
  const param = useParams()

  const [{ data }] = useCars()
  const [{ data: image }] = useCarTypes()
  const item = data?.filter(car => car.id === Number(param.id))[0]
  const carImage = image?.filter(el => el.id === item?.carTypeId)[0] as CarTypeDto
  const [{ data: owner, loading: ownerLoading }] = useUser(Number(item?.ownerId))
  if (!owner || ownerLoading) return <p>Loading...</p>
  const updatedData = { ...item, owner } as unknown as Checker
  if (!updatedData) return <p>no data</p>

  return (
    <div className="bg-indigo-800 px-4">
      <Header title="Available cars" />
      <div className=" flex flex-col items-center justify-center ">
        <CarDetail item={updatedData} carImage={carImage} />
      </div>
    </div>
  )
}
