import { ReactElement } from 'react'
import CalendarIcon from '../../assets/CalendarIcon'
import TimeIcon from '../../assets/TimeIcon'
import { BookingDetails } from '../../types/interfaces'

interface Props {
  bookingDetails: BookingDetails
}

export default function BookingCarCard({ bookingDetails }: Props): ReactElement {
  const startDate = bookingDetails.startDate.format('DD MMM YYYY')
  const startTime = bookingDetails.startDate.format('HH:mm')
  const endDate = bookingDetails.endDate.format('DD MMM YYYY')
  const endTime = bookingDetails.endDate.format('HH:mm')

  return (
    <div className="flex max-w-xl flex-col justify-start overflow-x-hidden text-gray-100 md:max-w-none md:flex-row md:items-center">
      <img
        src={bookingDetails.image}
        alt={bookingDetails.name}
        className="animate-slideLeft md:w-1/2"
      />
      <div className="flex animate-slideRight flex-col gap-2 p-8">
        <div className="mb-5 space-y-2">
          <h3 className="font-lora text-2xl font-medium">{bookingDetails.name}</h3>
          <h5 className="font-inter font-normal">
            {bookingDetails.action} by {bookingDetails.user}
          </h5>
        </div>
        <div className="flex flex-col justify-between gap-5 min-[325px]:flex-row">
          <div className="space-y-3">
            <h1>from</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <p>{startDate}</p>
            </div>
            <div className="flex items-center gap-2">
              <TimeIcon />
              <p>{startTime}</p>
            </div>
          </div>
          <div className="space-y-3">
            <h1>to</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <p>{endDate}</p>
            </div>
            <div className="flex items-center gap-2">
              <TimeIcon />
              <p>{endTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
