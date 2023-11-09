import { AxiosError } from 'axios'
import CarCard from './CarCard'
import { CarDetails } from '../../types/interfaces'
import { animated, useSpring } from '@react-spring/web'

interface Props {
  cars?: CarDetails[]
  onDeleteCar: (id?: number) => void
  deleteLoading: boolean
  deleteError: AxiosError<unknown> | null
}

export default function Cars({ cars, onDeleteCar, deleteLoading, deleteError }: Props) {
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })
  return (
    <animated.div style={springs} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cars?.map(car => (
        <CarCard
          key={car?.id}
          carDetails={car}
          onDeleteCar={onDeleteCar}
          deleteLoading={deleteLoading}
          deleteError={deleteError}
        />
      ))}
    </animated.div>
  )
}
