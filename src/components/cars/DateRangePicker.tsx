import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import { ReactElement } from 'react'
import Button from '../ui/Button'
import { ButtonVariant } from '../../types/enums'
import Header from '../ui/Header'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const title = 'BOOK CAR'

export default function DateRangePicker(): ReactElement {
  const [startDate, setStartDate] = useState(dayjs('2022-04-17T15:30'))
  const [endDate, setEndDate] = useState(dayjs('2022-04-17T15:30'))
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null)

  const handleStartDateChange = (newStartDate: dayjs.Dayjs | null) => {
    if (newStartDate) setStartDate(newStartDate)
  }

  const handleEndDateChange = (newEndDate: dayjs.Dayjs | null) => {
    if (newEndDate && newEndDate.isBefore(startDate)) {
      console.error('End date cannot be less than start date')
    } else {
      if (newEndDate) setEndDate(newEndDate)
    }
  }

  const handleSearchClick = () => {
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
                onChange={handleStartDateChange}
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
                onChange={handleEndDateChange}
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
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        <Button filled={true} variant={ButtonVariant.Primary} onClick={handleSearchClick}>
          Search Available Cars
        </Button>
        {redirectUrl && <Navigate to={redirectUrl} />}
      </div>
    </>
  )
}
