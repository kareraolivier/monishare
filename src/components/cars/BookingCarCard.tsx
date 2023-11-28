import { ReactElement } from 'react'
import CalendarIcon from '../../assets/CalendarIcon'
import TimeIcon from '../../assets/TimeIcon'
import { Action } from '../../types/enums'
import { Dayjs } from 'dayjs'

interface Props {
  carDetails: {
    id: number
    name: string
    image: string
    action: Action
    user: string
    startDate: Dayjs
    endDate: Dayjs
  }
}

export default function BookingCarCard({ carDetails }: Props): ReactElement {
  const startDate = carDetails.startDate.format('DD MMM YYYY')
  const startTime = carDetails.startDate.format('HH:mm')

  const endDate = carDetails.endDate.format('DD MMM YYYY')
  const endTime = carDetails.endDate.format('HH:mm')

  return (
    <div className="flex max-w-xl flex-col justify-start overflow-x-hidden text-gray-100 md:max-w-none md:flex-row md:items-center">
      <img src={carDetails.image} alt={carDetails.name} className="animate-slideLeft md:w-1/2" />
      <div className="flex animate-slideRight flex-col gap-2 p-8">
        <div className="mb-5 space-y-2">
          <h3 className="font-lora text-2xl font-medium">{carDetails.name}</h3>
          <h5 className="font-inter font-normal">
            {carDetails.action} by {carDetails.user}
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
