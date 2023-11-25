import { ReactElement, useState } from 'react'
import Button from '../ui/Button'
import { setCarState } from '../../util/setCarState'
import { setBookingState } from '../../util/setBookingState'
import BookingCarCard from './BookingCarCard'
import { BookingState, CarState } from '../../util/api'
import { BookingDetails } from '../../types/interfaces'

interface Props {
  allBookingDetails: {
    carDetails: BookingDetails
    carId: number
    bookingState: BookingState
    carState?: CarState
  }[]
}

export default function MyBookingCard({ allBookingDetails }: Props): ReactElement {
  const [useCar, setUseCar] = useState(false)

  const pickUpHandler = async (id: number) => {
    await setBookingState(id, BookingState.PICKED_UP)
  }

  const lockingStateHandler = async (id: number) => {
    await setCarState(id, CarState.LOCKED)
  }

  const unLockingStateHandler = async (id: number) => {
    await setCarState(id, CarState.UNLOCKED)
  }

  const returnHandler = async (id: number) => {
    await setBookingState(id, BookingState.RETURNED)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {allBookingDetails?.map(bookingDetail => {
        const canPickCar =
          new Date().getTime() >= new Date(bookingDetail.carDetails.startDate).getTime() &&
          new Date().getTime() <= new Date(bookingDetail.carDetails.endDate).getTime()

        return (
          <div key={bookingDetail?.carDetails.id} className="w-full border-b">
            <BookingCarCard
              key={bookingDetail?.carDetails.id}
              carDetails={bookingDetail?.carDetails}
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
                  {!canPickCar && (
                    <h2 className="mt-2 text-lachs-200">
                      You can not pick up your car before or after the agreed time.
                    </h2>
                  )}
                  {canPickCar && (
                    <Button onClick={() => pickUpHandler(bookingDetail.carDetails.id)}>
                      Pick Up
                    </Button>
                  )}
                </div>
              )}
              {bookingDetail.bookingState === BookingState.PICKED_UP && (
                <>
                  {!useCar ? (
                    <Button onClick={() => setUseCar(true)}>Use Car</Button>
                  ) : (
                    <>
                      <Button onClick={() => unLockingStateHandler(bookingDetail.carId)}>
                        Unlock
                      </Button>

                      <Button onClick={() => lockingStateHandler(bookingDetail.carId)}>Lock</Button>
                    </>
                  )}
                  <Button filled={false} onClick={() => returnHandler(bookingDetail.carDetails.id)}>
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
