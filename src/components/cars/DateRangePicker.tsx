import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import { ReactElement } from 'react'
import Button from '../ui/Button'
import { ButtonVariant } from '../../types/enums'
import Header from '../ui/Header'
import Cars from './Cars'

const title = 'BOOK CAR'

export default function DateRangePicker(): ReactElement {
  return (
    <div className="w-full max-w-sm space-y-12 font-inter text-gray-100">
      <Header title={title} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'DateTimePicker',
            'MobileDateTimePicker',
            'DesktopDateTimePicker',
            'StaticDateTimePicker',
          ]}
        >
          <DemoItem label="Start date">
            <MobileDateTimePicker
              defaultValue={dayjs('2022-04-17T15:30')}
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
              defaultValue={dayjs('2022-04-17T15:30')}
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
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      <Button filled={true} variant={ButtonVariant.Primary}>
        Search Available Cars
      </Button>
    </div>
  )
}
