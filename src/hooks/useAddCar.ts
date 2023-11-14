import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
export default function useAddCar() {
  return useAxios(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/cars`,
      method: 'POST',
    },
    { manual: true },
  )
}
