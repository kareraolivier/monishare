import { ReactElement } from 'react'
import Car from '../components/Cars/Car'

const details = {
  name: 'Mighty Mouse',
  owner: 'Manuela',
  type: 'Moni cooper',
  image: '/images/Car-Orange.png',
  url: '#',
}

export default function CarsPage(): ReactElement {
  return (
    <div className="py-20">
      <Car carDetails={details} />
    </div>
  )
}
