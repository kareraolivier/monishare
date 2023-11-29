import { ReactElement, useState } from 'react'
import Button from '../ui/Button'
import { setCarState } from '../../util/setCarState'

import BookingCarCard from './BookingCarCard'
import { BookingState, CarState } from '../../util/api'
import { BookingDetails } from '../../types/interfaces'

import dayjs from 'dayjs'
import { toast } from 'react-toastify'
interface Props {
  bookingDetails?: {
    carDetails: BookingDetails
    carId: number
    carState?: CarState
  }[]
  refetch: () => void
  returnCarHandler: (id: number) => Promise<void>
  pickUpCarHandler: (id: number) => Promise<void>
}

export default function MyBookingCard({
  bookingDetails,
  refetch,
  returnCarHandler,
  pickUpCarHandler,
}: Props): ReactElement {
  const [useCar, setUseCar] = useState(false)

  const lockingStateHandler = async (id: number) => {
    await setCarState(id, CarState.LOCKED)
    toast('Car is locked', {
      type: 'success',
    })
    refetch()
  }

  const unLockingStateHandler = async (id: number) => {
    await setCarState(id, CarState.UNLOCKED)
    toast('Car is unlocked', {
      type: 'success',
    })
    refetch()
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {bookingDetails?.map(bookingDetail => {
        const pickCarDate =
          dayjs() >= dayjs(bookingDetail.carDetails.startDate) &&
          dayjs() <= dayjs(bookingDetail.carDetails.endDate)

        return (
          <div key={bookingDetail?.carDetails.id} className="w-full border-b">
            <BookingCarCard
              key={bookingDetail?.carDetails.id}
              bookingDetails={bookingDetail?.carDetails}
            />
            <div className="flex flex-wrap justify-center gap-2 pb-8">
              {bookingDetail.carDetails.bookingState === BookingState.PENDING && (
                <p className="text-lachs-200">Booking request pending</p>
              )}
              {bookingDetail.carDetails.bookingState === BookingState.RETURNED && (
                <p className="text-mustard-200">Car was returned.</p>
              )}
              {bookingDetail.carDetails.bookingState === BookingState.DECLINED && (
                <p className="text-lachs-200">Your booking was declined.</p>
              )}
              {bookingDetail.carDetails.bookingState === BookingState.ACCEPTED && (
                <div className="flex w-full flex-col items-center justify-center">
                  <p className="py-2 text-mustard-200">Booking accepted</p>
                  {!pickCarDate && (
                    <p className="mt-2 text-lachs-200">
                      You can not pick up your car before the agreed time.
                    </p>
                  )}
                  {pickCarDate && (
                    <Button onClick={() => pickUpCarHandler(bookingDetail.carDetails.id)}>
                      Pick Up
                    </Button>
                  )}
                </div>
              )}
              {bookingDetail.carDetails.bookingState === BookingState.PICKED_UP && (
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
