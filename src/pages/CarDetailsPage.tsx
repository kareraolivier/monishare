import { ReactElement } from 'react'
import axios from 'axios'
import { CarDto } from '../util/api'
import CarDetail from '../components/cars/CarDetail'
import { useCars } from '../hooks'

export default function CarDetailsPage(): ReactElement {

  return (
    <div>
      <CarDetail />
    </div>
  )
}
