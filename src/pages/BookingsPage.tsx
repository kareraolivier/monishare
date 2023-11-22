import { ReactElement, useState } from 'react'
import Header from '../components/ui/Header'
import BookingCarCard from '../components/cars/BookingCarCard'
import { Action } from '../types/enums'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const title = 'My bookings'

const carDetails = {
  id: 1,
  name: ' new car',
  image: 'img',
  action: Action.Owned,
  user: 'divine',
  startDate: new Date(),
  endDate: new Date(),
}
export default function ManageBookingsPage(): ReactElement {
  const [pickUp, SetPickUp] = useState(true)
  const [useCar, SetUseCar] = useState(true)
  const [locked, SetLocked] = useState(true)
  const [returnCar, SetReturnCar] = useState(false)
  const pickUpHandler = () => {
    SetPickUp(false)
  }
  const useCarHandler = () => {
    SetUseCar(false)
  }
  const lockingStateHandler = () => {
    SetLocked(prevState => !prevState)
  }
  const returnHandler = () => {
    SetReturnCar(prev => !prev)
    SetUseCar(false)
    SetLocked(false)
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
                <Button disabled={!locked} onClick={lockingStateHandler}>
                  Unlock
                </Button>

                <Button disabled={locked} onClick={lockingStateHandler}>
                  Lock
                </Button>
              </>
            )}
            <Link to="/cars" className="flex w-full justify-center">
              <Button disabled={returnCar} filled={false} onClick={returnHandler}>
                Return
              </Button>
            </Link>
          </>
        )}
      </div>
      <hr className="my-4 h-px bg-gray-100" />
    </>
  )
}
