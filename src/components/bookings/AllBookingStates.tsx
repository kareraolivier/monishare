import { BookingState } from '../../util/api'

interface Props {
  bookingState: BookingState
}

export default function AllBookingStates({ bookingState }: Props) {
  switch (bookingState) {
    case BookingState.ACCEPTED:
      return <h2 className="text-mustard-200">Booking accepted</h2>
    case BookingState.DECLINED:
      return <h2 className="text-lachs-200">Booking declined</h2>
    case BookingState.PICKED_UP:
      return <h2 className="text-mustard-200">Car was picked up</h2>
    case BookingState.RETURNED:
      return <h2 className="text-mustard-200">Car was returned</h2>
    default:
      return null
  }
}
