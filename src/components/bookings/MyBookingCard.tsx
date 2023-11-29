import { ReactElement, useState } from 'react'
import Button from '../ui/Button'
import { setCarState } from '../../util/setCarState'
import { setBookingState } from '../../util/setBookingState'
import BookingCarCard from './BookingCarCard'
import { BookingState, CarState } from '../../util/api'
import { BookingDetails } from '../../types/interfaces'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
interface Props {
  bookingDetails: {
    carDetails: BookingDetails
    carId: number
    bookingState: BookingState
    carState?: CarState
  }[]
  refetch: () => void
}

export default function MyBookingCard({ bookingDetails, refetch }: Props): ReactElement {
  const [useCar, setUseCar] = useState(false)

  const navigate = useNavigate()
  const pickUpCarHandler = async (id: number) => {
    await setBookingState(id, BookingState.PICKED_UP)
  }

  const lockingStateHandler = async (id: number) => {
    await setCarState(id, CarState.LOCKED)
    refetch()
  }

  const unLockingStateHandler = async (id: number) => {
    await setCarState(id, CarState.UNLOCKED)
    refetch()
  }

  const returnCarHandler = async (id: number) => {
    await setBookingState(id, BookingState.RETURNED)
    navigate('/cars')
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {bookingDetails?.map(bookingDetail => {
        const pickCarDate =
          dayjs(new Date().getTime()) >= dayjs(bookingDetail.carDetails.startDate) &&
          dayjs(new Date().getTime()) <= dayjs(bookingDetail.carDetails.endDate)

        return (
          <div key={bookingDetail?.carDetails.id} className="w-full border-b">
            <BookingCarCard
              key={bookingDetail?.carDetails.id}
              bookingDetails={bookingDetail?.carDetails}
            />
            <div className="flex flex-wrap justify-center gap-2 pb-8">
              {bookingDetail.bookingState === BookingState.PENDING && (
                <h2 className="text-lachs-200">Booking request pending</h2>
              )}
              {bookingDetail.bookingState === BookingState.RETURNED && (
                <h2 className="text-mustard-200">Car was returned.</h2>
              )}
              {bookingDetail.bookingState === BookingState.DECLINED && (
                <h2 className="text-lachs-200">Your booking was declined.</h2>
              )}
              {bookingDetail.bookingState === BookingState.ACCEPTED && (
                <div className="flex w-full flex-col items-center justify-center">
                  <h2 className="py-2 text-mustard-200">Booking accepted</h2>
                  {!pickCarDate && (
                    <h2 className="mt-2 text-lachs-200">
                      You can not pick up your car before or after the agreed time.
                    </h2>
                  )}
                  {pickCarDate && (
                    <Button onClick={() => pickUpCarHandler(bookingDetail.carDetails.id)}>
                      Pick Up
                    </Button>
                  )}
                </div>
              )}
              {bookingDetail.bookingState === BookingState.PICKED_UP && (
                <>
                  {!useCar && <Button onClick={() => setUseCar(true)}>Use Car</Button>}
                  {useCar && (
                    <>
                      <Button
                        disabled={bookingDetail.carState === CarState.UNLOCKED}
                        onClick={() => unLockingStateHandler(bookingDetail.carId)}
                      >
                        Unlock
                      </Button>

                      <Button
                        disabled={bookingDetail.carState === CarState.LOCKED}
                        onClick={() => lockingStateHandler(bookingDetail.carId)}
                      >
                        Lock
                      </Button>
                    </>
                  )}

                  <Button
                    filled={false}
                    onClick={() => returnCarHandler(bookingDetail.carDetails.id)}
                  >
                    Return
                  </Button>
                </>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
