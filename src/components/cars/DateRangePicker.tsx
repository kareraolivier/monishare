import dayjs, { Dayjs } from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import { ReactElement, SetStateAction } from 'react'
import Button from '../ui/Button'
import Header from '../ui/Header'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import ErrorMessage from '../ui/ErrorMessage'

const title = 'BOOK CAR'

export default function DateRangePicker(): ReactElement {
  const today = dayjs()
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [endDateError, setEndDateError] = useState<string | null>(null)
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null)

  const startDateChangeHandler = (newStartDate: dayjs.Dayjs | null) => {
    if (newStartDate) setStartDate(newStartDate)
  }
  const endDateChangeHandler = (newEndDate: dayjs.Dayjs | null) => {
    if (newEndDate && newEndDate.isBefore(startDate)) {
      setEndDateError('End date cannot be less than start date')
    } else {
      const newEndingDate = newEndDate as SetStateAction<Dayjs>
      setEndDateError(null)
      setEndDate(newEndingDate)
    }
  }

  const searchClickHandler = () => {
    const start = startDate.toISOString()
    const end = endDate.toISOString()
    const url = `/available-cars?startDate=${start}&&endDate=${end}`
    setRedirectUrl(url)
  }
  return (
    <>
      <Header title={title} />
      <div className="mx-auto max-w-sm space-y-12 font-inter text-gray-100 ">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['MobileDateTimePicker']}>
            <DemoItem label="Start date">
              <MobileDateTimePicker
                value={startDate}
                onChange={startDateChangeHandler}
                minDateTime={today}
                className="rounded-full  bg-indigo-200 text-white"
                sx={{
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  '& .MuiOutlinedInput-root .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              />
            </DemoItem>
            <DemoItem label="End date">
              <MobileDateTimePicker
                value={endDate}
                onChange={endDateChangeHandler}
                className=" rounded-full bg-indigo-200"
                sx={{
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  '& .MuiOutlinedInput-root .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              />
              {endDateError && <ErrorMessage>{endDateError}</ErrorMessage>}
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        <Button filled={true} disabled={endDateError ? true : false} onClick={searchClickHandler}>
          Search Available Cars
        </Button>
        {redirectUrl && <Navigate to={redirectUrl} />}
      </div>
    </>
  )
}
