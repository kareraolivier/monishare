import dayjs, { Dayjs } from 'dayjs'
import { BookingDto, CarDto } from '../util/api'

interface DateRange {
  startDate: Dayjs
  endDate: Dayjs
}

interface AvailableCarsParams {
  loggedInUserId: number
  bookings: BookingDto[]
  cars: CarDto[]
  bookingRange: DateRange
}

export function isDateCollides(bookingRange: DateRange, bookedRange: DateRange): boolean {
  if (bookingRange.startDate.isAfter(bookedRange.endDate)) return false
  if (bookingRange.endDate.isBefore(bookedRange.startDate)) return false
  return true
}

export function getAvailableCars({
  loggedInUserId,
  cars,
  bookings,
  bookingRange,
}: AvailableCarsParams): CarDto[] {
  const bookingsAtTime = bookings.filter(booking =>
    isDateCollides(
      { startDate: bookingRange.startDate, endDate: bookingRange.endDate },
      { startDate: dayjs(booking.startDate), endDate: dayjs(booking.endDate) },
    ),
  )

  // After getting Ids remove duplicates and put them back to an array
  const bookedCarsIds = [...new Set(bookingsAtTime?.map(({ carId }) => carId))]

  return cars?.filter(car => car.id !== loggedInUserId && !bookedCarsIds?.includes(car.id))
}
