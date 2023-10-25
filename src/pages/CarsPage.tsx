import { ReactElement } from 'react'
import Cars from '../components/Cars/Cars'

const cars = [
  {
    id: 1,
    name: 'Mighty Mouse',
    owner: 'Manuela',
    type: 'Moni cooper',
    image: '/images/Car-Orange.png',
    url: '#',
  },
  {
    id: 2,
    name: 'Tini Titan',
    owner: 'Anna',
    type: 'Countryman',
    image: '/images/Car-Gray.png',
    url: '#',
  },
  {
    id: 3,
    name: 'Petite Powerhouse',
    owner: 'Manuela',
    type: 'Moni Electric',
    image: '/images/Car-green.png',
    url: '#',
  },
  {
    id: 1,
    name: 'Mighty Mouse',
    owner: 'Manuela',
    type: 'Moni cooper',
    image: '/images/Car-Orange.png',
    url: '#',
  },
]

export default function CarsPage(): ReactElement {
  return (
    <div className="py-20">
      <Cars cars={cars} />
    </div>
  )
}
