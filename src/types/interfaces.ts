import { FuelType } from '../util/api'

export interface CarDetails {
  id?: number
  name?: string
  owner?: string
  type?: string
  image?: string
  url?: string
}

export interface AddCar {
  carTypeId: string
  name: string
  fuelType: FuelType
  horsepower: string
  licensePlate: string
  info: string
}
