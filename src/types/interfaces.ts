export interface CarDetails {
  id?: number
  name?: string
  owner?: string
  ownerId?: number
  type?: string
  image?: string
  url?: string
}
export interface BookCar {
  carId?: number
  startDate: string | null
  endDate: string | null
}
