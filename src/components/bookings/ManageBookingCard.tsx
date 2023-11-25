import { BookingDetails } from '../../types/interfaces'
import { BookingState } from '../../util/api'
import Button from '../ui/Button'
import BookingCarCard from './BookingCarCard'

interface Props {
  bookingDetails?: {
    booking: BookingDetails
    bookingState: BookingState
  }[]
  acceptBookingHandler: (id: number) => Promise<void>
  declineBookingHandler: (id: number) => Promise<void>
}

export default function ManageBookingCard({
  bookingDetails,
  acceptBookingHandler,
  declineBookingHandler,
}: Props) {
  const renderBookingStatus = (bookingDetail?: {
    booking: BookingDetails
    bookingState: BookingState
  }) => {
    switch (bookingDetail?.bookingState) {
      case BookingState.ACCEPTED:
        return <h2 className="text-mustard-200">Booking accepted</h2>
      case BookingState.DECLINED:
        return <h2 className="text-lachs-200">Booking declined</h2>
      case BookingState.PICKED_UP:
        return <h2 className="text-mustard-200">Car was picked up</h2>
      case BookingState.RETURNED:
        return <h2 className="text-mustard-200">Booking returned</h2>
      default:
        return null
    }
  }

  const renderBookingActions = (bookingDetail?: {
    booking: BookingDetails
    bookingState: BookingState
  }) => {
    if (bookingDetail?.bookingState === BookingState.PENDING) {
      return (
        <>
          <Button onClick={() => acceptBookingHandler(bookingDetail.booking.id)}>Accept</Button>
          <Button filled={false} onClick={() => declineBookingHandler(bookingDetail.booking.id)}>
            Decline
          </Button>
        </>
      )
    }
    return null
  }

  return (
    <div>
      {bookingDetails?.map(bookingDetail => (
        <div key={bookingDetail.booking.id}>
          <BookingCarCard carDetails={bookingDetail.booking} />
          <div className="flex flex-wrap justify-center gap-2 border-b border-b-gray-100 pb-4">
            {renderBookingStatus(bookingDetail)}
            {renderBookingActions(bookingDetail)}
          </div>
        </div>
      ))}
    </div>
  )
}
