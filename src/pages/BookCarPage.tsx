import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from '../components/ui/inputs/DatePicker'
import Button from '../components/ui/Button'
import Header from '../components/ui/Header'

export default function BookCarPage(): ReactElement {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs().add(2, 'hours'))

  const navigate = useNavigate()

  const startDateChangeHandler = (date: Dayjs | null) => date && setStartDate(date)
  const endDateChangeHandler = (date: Dayjs | null) => date && setEndDate(date)

  const searchClickHandler = () => {
    navigate(
      `/available-cars?startDate=${startDate.toISOString()}&&endDate=${endDate.toISOString()}`,
    )
  }
  return (
    <>
      <Header title="BOOK CAR" />
      <div className="mx-auto max-w-sm space-y-12 font-inter text-gray-100 ">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={startDate}
            label="Start date"
            onChange={startDateChangeHandler}
            minDateTime={dayjs()}
          />
          <DatePicker
            value={startDate.add(2, 'hours')}
            label="End date"
            onChange={endDateChangeHandler}
            minDateTime={startDate}
          />
        </LocalizationProvider>
        <Button filled={true} onClick={searchClickHandler}>
          Search Available Cars
        </Button>
      </div>
    </>
  )
}
