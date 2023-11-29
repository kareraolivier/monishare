import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers'
import { ReactElement, useState } from 'react'
import Button from '../ui/Button'
import Header from '../ui/Header'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../ui/ErrorMessage'

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
  const initialStartDate = dayjs()
  const initialEndDate = dayjs().add(2, 'hours')
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)

  const isDateRangeInvalid = endDate.isBefore(startDate)

  const navigate = useNavigate()

  const startDateChangeHandler = (newStartDate: Dayjs | null) => {
    if (newStartDate) setStartDate(newStartDate)
  }
  const endDateChangeHandler = (newEndDate: Dayjs | null) => {
    if (newEndDate == null) return
    if (newEndDate.isBefore(startDate)) return
    setEndDate(newEndDate)
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
              minDateTime={initialStartDate}
              className="rounded-full bg-indigo-200 text-white"
              sx={datePickerStyles}
            />
          </div>
          <div className="grid gap-2">
            <label>End date</label>
            <MobileDateTimePicker
              value={endDate}
              onChange={endDateChangeHandler}
              minDateTime={initialEndDate}
              className="rounded-full bg-indigo-200"
              sx={datePickerStyles}
            />
            {isDateRangeInvalid && <ErrorMessage>End date should be after start date</ErrorMessage>}
          </div>
        </LocalizationProvider>
        <Button filled={true} onClick={searchClickHandler} disabled={isDateRangeInvalid}>
          Search Available Cars
        </Button>
      </div>
    </>
  )
}
