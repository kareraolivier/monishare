import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers'
import { ReactElement, useState } from 'react'
import Button from '../ui/Button'
import Header from '../ui/Header'
import { Navigate, useNavigate } from 'react-router-dom'

const title = 'BOOK CAR'

export default function DateRangePicker(): ReactElement {
  const today = dayjs()
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [redirectUrl] = useState<string | null>(null)

  const startDateChangeHandler = (newStartDate: Dayjs | null) => {
    if (newStartDate) setStartDate(newStartDate)
  }

  const endDateChangeHandler = (newEndDate: dayjs.Dayjs | null) => {
    if (newEndDate == null) return
    if (newEndDate && newEndDate.isBefore(startDate)) {
      return
    }
    setEndDate(newEndDate)
  }

  const navigate = useNavigate()

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
              minDateTime={today}
              className="rounded-full bg-indigo-200 text-white"
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiOutlinedInput-root .MuiInputBase-input': {
                  color: 'white',
                },
              }}
            />
          </div>
          <div className="grid gap-2">
            <label>End date</label>
            <MobileDateTimePicker
              value={endDate}
              onChange={endDateChangeHandler}
              minDateTime={today}
              className="rounded-full bg-indigo-200"
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiOutlinedInput-root .MuiInputBase-input': {
                  color: 'white',
                },
              }}
            />
          </div>
        </LocalizationProvider>
        <Button filled={true} onClick={searchClickHandler}>
          Search Available Cars
        </Button>
        {redirectUrl && <Navigate to={redirectUrl} />}
      </div>
    </>
  )
}
