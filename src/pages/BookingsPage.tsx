import { ReactElement, useState } from 'react'
import Header from '../components/ui/Header'
import BookingCarCard from '../components/cars/BookingCarCard'
import { Action } from '../types/enums'
import Button from '../components/ui/Button'
import { useReadLocalStorage } from 'usehooks-ts'
import useBookingData from '../hooks/useBookings'
import { setBookingState } from '../util/setBookingState'
import { BookingState, CarState } from '../util/api'
import { setCarState } from '../util/setCarState'
import CarsPage from './AllCarsPage'

const title = 'My bookings'

const carDetails = {
  id: 1389,
  name: 'karera 123',
  image: 'img',
  action: Action.Owned,
  user: 'Isabella',
  startDate: new Date(),
  endDate: new Date(),
}
export default function ManageBookingsPage(): ReactElement {
  const loggedInUserId = useReadLocalStorage('userId')
  const { data } = useBookingData()
  const loggedInUserBookings = data?.filter(data => data.renterId === Number(loggedInUserId))
  const [pickUp, SetPickUp] = useState(true)
  const [useCar, SetUseCar] = useState(true)
  const [navigation, SetNavigation] = useState(false)
  // const [returnCar, SetReturnCar] = useState(false)

  // const id = 1389
  console.log(data)
  console.log('looddodo', loggedInUserBookings)
  const pickUpHandler = async () => {
    SetPickUp(false)
    console.log('start')

    await setBookingState(232, BookingState.PICKED_UP)
    console.log('end')
  }
  const useCarHandler = () => {
    SetUseCar(false)
  }

  const lockingStateHandler = async () => {
    await setCarState(1392, CarState.LOCKED)
  }

  const unLockingStateHandler = async () => {
    await setCarState(1392, CarState.UNLOCKED)
  }

  const returnHandler = async () => {
    await setBookingState(232, BookingState.RETURNED)
    SetNavigation(true)
    // navigate('/cars')
  }
  return (
    <>
      <Header title={title} />
      <BookingCarCard carDetails={carDetails} />
      <div className="flex flex-col items-center gap-4 px-2 font-inter md:mx-auto md:w-2/3">
        {pickUp ? (
          <Button onClick={pickUpHandler}>Pick Up</Button>
        ) : (
          <>
            {useCar ? (
              <Button onClick={useCarHandler}>Use Car</Button>
            ) : (
              <>
                <Button onClick={unLockingStateHandler}>Unlock</Button>

                <Button onClick={lockingStateHandler}>Lock</Button>
              </>
            )}

            {navigation ? (
              <CarsPage />
            ) : (
              <Button filled={false} onClick={returnHandler}>
                Return
              </Button>
            )}
          </>
        )}
      </div>
      <hr className="my-4 h-px bg-gray-100" />
    </>
  )
}
