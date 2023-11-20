import { useReadLocalStorage } from 'usehooks-ts'
export function getAuthToken(): string | null {
  return useReadLocalStorage('token')
}
