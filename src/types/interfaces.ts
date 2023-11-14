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
  fuelType: string
  horsepower: string
  licensePlate: string
  info: string
}
