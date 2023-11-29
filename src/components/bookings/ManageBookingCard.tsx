import { BookingDetails } from '../../types/interfaces'
import { BookingState } from '../../util/api'
import BookingStateMessage from './BookingStateMessage'
import Button from '../ui/Button'
import BookingCarCard from './BookingCarCard'
import dayjs from 'dayjs'
interface Props {
  bookingDetails?: BookingDetails[]
  acceptBookingHandler: (id: number) => Promise<void>
  declineBookingHandler: (id: number) => Promise<void>
}

export default function ManageBookingCard({
  bookingDetails,
  acceptBookingHandler,
  declineBookingHandler,
}: Props) {
  const renderBookingActions = (bookingDetail: BookingDetails) => {
    const isBookingExpired = dayjs() <= dayjs(bookingDetail.endDate)

    if (bookingDetail.bookingState === BookingState.PENDING) {
      return (
        <>
          {isBookingExpired ? (
            <>
              <Button onClick={() => acceptBookingHandler(bookingDetail.id)}>Accept</Button>
              <Button filled={false} onClick={() => declineBookingHandler(bookingDetail.id)}>
                Decline
              </Button>
            </>
          ) : (
            <h2 className="text-lachs-200">Booking outdated</h2>
          )}
        </>
      )
    }
    return null
  }

  return (
    <div>
      {bookingDetails?.map(bookingDetail => (
        <div key={bookingDetail.id}>
          <BookingCarCard bookingDetails={bookingDetail} />
          <div className="flex flex-wrap justify-center gap-2 border-b border-b-gray-100 pb-4">
            <BookingStateMessage bookingState={bookingDetail.bookingState} />
            {renderBookingActions(bookingDetail)}
          </div>
        </div>
      ))}
    </div>
  )
}
