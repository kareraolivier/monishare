import CarCard from './CarCard'
import { CarDetails } from '../../types/interfaces'
import { animated, useSpring } from '@react-spring/web'

export default function Cars({
  cars,
  onDeleteCar,
}: {
  cars?: CarDetails[]
  onDeleteCar: (id?: number) => void
}) {
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })
  return (
    <animated.div style={springs} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cars?.map(car => <CarCard key={car?.id} carDetails={car} onDeleteCar={onDeleteCar} />)}
    </animated.div>
  )
}
