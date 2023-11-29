import { ReactElement } from 'react'
import { BookingState } from '../../util/api'
interface Props {
  bookingState: BookingState
}

export default function BookingStateMessage({ bookingState }: Props): ReactElement {
  switch (bookingState) {
    case BookingState.ACCEPTED:
      return <p className="text-mustard-200">Booking accepted</p>
    case BookingState.DECLINED:
      return <p className="text-lachs-200">Booking declined</p>
    case BookingState.PICKED_UP:
      return <p className="text-mustard-200">Car was picked up</p>
    case BookingState.RETURNED:
      return <p className="text-mustard-200">Car was returned</p>
    default:
      return <></>
  }
}
