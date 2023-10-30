import { ReactElement } from 'react'
import Cars from '../components/cars/Cars'
import Header from '../components/Header'
import { useCarTypes, useCars, useUsers } from '../hooks'
import { CarDetails } from '../types/interfaces'

export default function CarsPage(): ReactElement {
  const [{ data: cars, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()

  if (carsError || usersError || carTypesError) return <h1>Something went wrong</h1>
  if (!cars || !users || !carTypes) return <h1>No cars found</h1>
  if (carsLoading || usersLoading || carTypesLoading) return <h1>Loading...</h1>

  const updatedCars = cars.map(car => {
    const owner = users.find(user => car.ownerId === user.id)
    const type = carTypes.find(carType => car.carTypeId === carType.id)

    // checking owners and type because some cars don't have either owner or type
    if (owner && type) {
      return {
        id: car.id,
        name: car.name,
        owner: owner.name,
        type: type.name,
        image: type.imageUrl,
        url: `/cars/${car.id}`,
      }
    }
  })

  // casting because typescript is not able to detect that I'm removing all undefined elements
  const availableCars = updatedCars.filter(updatedCar => updatedCar !== undefined) as CarDetails[]

  if (!updatedCars) return <h1>No</h1>

  return (
    <div className="">
      <Header title="All Cars" />
      <Cars cars={availableCars} />
    </div>
  )
}
