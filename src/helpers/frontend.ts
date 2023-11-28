import dayjs, { Dayjs } from 'dayjs'
import { BookingDto, CarDto } from '../util/api'

interface DateRange {
  startDate: Dayjs
  endDate: Dayjs
}

interface availableCars {
  loggedInUserId: number
  bookings: BookingDto[] | null
  cars?: CarDto[]
  bookingRange: DateRange
}

interface CombinedCars {
  [key: number]: { car: CarDto; bookings: BookingDto[] }
}

export function isValidRange(bookingRange: DateRange, bookedRange: DateRange): boolean {
  if (bookingRange.startDate.isAfter(bookedRange.endDate)) return true
  if (bookingRange.endDate.isBefore(bookedRange.startDate)) return true
  return false
}

export function getAvailableCars({
  loggedInUserId,
  cars,
  bookings,
  bookingRange,
}: availableCars): CarDto[] {
  const notUserCars = cars?.filter(car => car.ownerId !== loggedInUserId)

  const availableCars = notUserCars?.filter(
    car => bookings?.every(booking => booking.carId !== car.id),
  )
  const bookedCars = notUserCars?.filter(car => bookings?.some(booking => booking.carId === car.id))

  const bookedCarsBookings = bookedCars?.reduce((combinedCars: CombinedCars, bookedCar: CarDto) => {
    const bookedCarBookings: BookingDto[] = []
    bookings?.forEach(booking => {
      if (booking.carId !== bookedCar.id) return
      bookedCarBookings.push(booking)
    })
    combinedCars[bookedCar.id] = { car: bookedCar, bookings: bookedCarBookings }
    return combinedCars
  }, {})

  const availableBookedCarIds = Object.keys(bookedCarsBookings ?? []).filter(carId =>
    (bookedCarsBookings ?? {})[Number(carId)].bookings.every(booking =>
      isValidRange(
        { startDate: dayjs(bookingRange.startDate), endDate: dayjs(bookingRange.endDate) },
        { startDate: dayjs(booking.startDate), endDate: dayjs(booking.endDate) },
      ),
    ),
  )

  const availableBookedCars = availableBookedCarIds.map(
    carId => cars?.find(car => car.id === Number(carId)),
  )

  return [...(availableCars as CarDto[]), ...(availableBookedCars as CarDto[])]
}
