import Car from './CarCard'
import { CarDetails } from '../../types/interfaces'
import { animated, useSpring } from '@react-spring/web'

export default function Cars({ cars }: { cars: CarDetails[] }) {
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })
  return (
    <animated.div style={springs} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map(car => (
        <Car key={car.id} carDetails={car} />
      ))}
    </animated.div>
  )
}
