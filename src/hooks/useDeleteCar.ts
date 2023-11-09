import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
export default function useDeleteCar() {
  return useAxios(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      method: 'DELETE',
    },
    { manual: true },
  )
}
