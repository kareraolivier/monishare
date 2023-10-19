import { ReactElement } from 'react'
// import { CarDto } from '../util/api'
import CarDetail from '../components/cars/CarDetail'
// import { useCars, useCarTypes } from '../hooks'

export default function CarDetailsPage(): ReactElement {
  // const [data] = useCars()
  // const [type] = useCarTypes()
  // console.log(data.data)
  // console.log(type.data)
  return (
    <div>
      <CarDetail />
    </div>
  )
}
