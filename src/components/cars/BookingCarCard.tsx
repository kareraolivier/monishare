import { ReactElement } from 'react'
import { BookingDto } from '../../util/api'
import CalendarIcon from '../../assets/CalendarIcon'
import TimeIcon from '../../assets/TimeIcon'

interface Props {
  carDetails: BookingDto
  action: string
}

export default function BookingCarCard({ carDetails, action }: Props): ReactElement {
  console.log(carDetails)
  return (
    <div className="flex max-w-xl flex-col justify-start overflow-x-hidden text-gray-100 md:max-w-none md:flex-row md:items-center">
      <img
        src="https://s3.eu-central-1.amazonaws.com/assets.monishare.ojemba/cooper.png"
        alt="Booking car"
        className="animate-slideLeft md:w-1/2"
      />
      <div className="flex animate-slideRight flex-col gap-2 p-8">
        <div className="mb-5 space-y-2">
          <h3 className="font-lora text-2xl font-medium">Mighty Mouse</h3>
          <h5 className="font-inter font-normal">{action} by Manuela</h5>
        </div>
        <div className="flex flex-col justify-between gap-5 min-[325px]:flex-row">
          <div className="space-y-3">
            <h1>from</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <p>14 Jun 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <TimeIcon />
              <p>15:00</p>
            </div>
          </div>
          <div className="space-y-3">
            <h1>to</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <p>14 Jun 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <TimeIcon />
              <p>15:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
