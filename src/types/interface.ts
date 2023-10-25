import { CarState, FuelType, UserDto } from '../util/api'

export interface SingleCarDetails {
  licensePlate?: string | null
  name: string
  owner?: UserDto
  horsepower?: string
  info?: string
  plate?: string
  fuelType: FuelType
  carState: CarState
}
