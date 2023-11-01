import Car from './CarCard'
import { CarDetails } from '../../types/interfaces'

export default function Cars({ cars }: { cars: CarDetails[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map(car => (
        <Car key={car.id} carDetails={car} />
      ))}
    </div>
  )
}