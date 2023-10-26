import { UserDto } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'

export default function useUser(id: string | number) {
  return useAxios<UserDto>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/users/${id}`,
  })
}
