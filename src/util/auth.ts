export function getAuthToken(): string | null {
  const token = localStorage.getItem('token')
  return token ? token.replaceAll('"', '') : null
}
