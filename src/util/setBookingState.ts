import { BookingState, ChangeBookingStateDto } from './api'

import { apiUrl } from './apiUrl'
import { getAuthToken } from './auth'

export const setBookingState = async (id: number, newState: BookingState): Promise<void> => {
  const changeBookingState: ChangeBookingStateDto = {
    state: newState,
  }

  const response = await fetch(`${apiUrl}/bookings/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(changeBookingState),
  })

  if (!response.ok) {
    throw new Error('Could not change booking state.')
  }
}
