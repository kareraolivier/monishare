interface DateRange {
  startDate: Date
  endDate: Date
}

export function isValidRange(bookingRange: DateRange, bookedRange: DateRange): boolean {
  if (bookingRange.startDate.getTime() > bookedRange.endDate.getTime()) return true
  if (bookingRange.endDate.getTime() < bookedRange.startDate.getTime()) return true
  return false
}
