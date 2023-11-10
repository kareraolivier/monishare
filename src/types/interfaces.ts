export interface CarDetails {
  id?: number
  name?: string
  owner?: string
  type?: string
  image?: string
  url?: string
}

export interface CarPost {
  carTypeId: string
  name: string
  fuelType: string
  horsepower: string
  licensePlate: string
  info: string
}
