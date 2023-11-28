import { BookingDetails } from '../../types/interfaces'
import { BookingState } from '../../util/api'
import AllBookingState from './AllBookingState'
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
    const pickCarDate = dayjs(new Date().getTime()) <= dayjs(bookingDetail.endDate)

    if (bookingDetail.bookingState === BookingState.PENDING) {
      return (
        <>
          {pickCarDate ? (
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
            <AllBookingState bookingState={bookingDetail.bookingState} />
            {renderBookingActions(bookingDetail)}
          </div>
        </div>
      ))}
    </div>
  )
}
