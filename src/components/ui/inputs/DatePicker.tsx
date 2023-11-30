import { MobileDateTimePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'

interface Props {
  value: Dayjs
  label: string
  minDateTime: Dayjs | undefined
  onChange: (date: Dayjs | null) => void
}

const datePickerStyles = {
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-root .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiFormLabel-root': {
    color: 'white',
    fontSize: '14px',
    cursor: 'pointer',
    transform: 'translateY(-28px)',
  },
}

export default function DatePicker({ value, label, minDateTime, onChange }: Props) {
  return (
    <div className="grid">
      <MobileDateTimePicker
        value={value}
        onChange={onChange}
        label={label}
        minDateTime={minDateTime}
        className="rounded-full bg-indigo-200 text-white"
        sx={datePickerStyles}
      />
    </div>
  )
}
