import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers'
import { ReactElement, useState } from 'react'
import Button from '../ui/Button'
import Header from '../ui/Header'
import { useNavigate } from 'react-router-dom'

const title = 'BOOK CAR'
const datePickerStyles = {
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-root .MuiInputBase-input': {
    color: 'white',
  },
}

export default function DateRangePicker(): ReactElement {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())

  const navigate = useNavigate()

  const startDateChangeHandler = (newStartDate: Dayjs | null) => {
    if (newStartDate) setStartDate(newStartDate)
  }
  const endDateChangeHandler = (newEndDate: Dayjs | null) => {
    if (newEndDate) setEndDate(newEndDate)
  }

  const searchClickHandler = () => {
    const start = startDate.toISOString()
    const end = endDate.toISOString()
    navigate(`/available-cars?startDate=${start}&&endDate=${end}`)
  }
  return (
    <>
      <Header title={title} />
      <div className="mx-auto max-w-sm space-y-12 font-inter text-gray-100 ">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="grid gap-2">
            <label>Start date</label>
            <MobileDateTimePicker
              value={startDate}
              onChange={startDateChangeHandler}
              minDateTime={dayjs()}
              className="rounded-full bg-indigo-200 text-white"
              sx={datePickerStyles}
            />
          </div>
          <div className="grid gap-2">
            <label>End date</label>
            <MobileDateTimePicker
              value={startDate.add(2, 'hours')}
              onChange={endDateChangeHandler}
              minDateTime={startDate}
              className="rounded-full bg-indigo-200"
              sx={datePickerStyles}
            />
          </div>
        </LocalizationProvider>
        <Button filled={true} onClick={searchClickHandler}>
          Search Available Cars
        </Button>
      </div>
    </>
  )
}
