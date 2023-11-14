import { ReactElement, useState } from 'react'
import Input from '../components/ui/inputs/Input'
import Button from '../components/ui/Button'
import ProfileIcon from '../assets/ProfileIcon'
import PasswordIcon from '../assets/PasswordIcon'
import useAuth from '../hooks/useAuth'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { Navigate } from 'react-router-dom'
import Logo from '../components/Logo'

export default function LoginPage(): ReactElement {
  const [{ data: user, loading: userLoading, error: userError }, executePost] = useAuth()
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  if (user) {
    localStorage.setItem('token', user.token)
    localStorage.setItem('userId', user.userId.toString())
  }

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }))
  }

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await executePost({
      data: credentials,
    })
  }

  return (
    <div className="py-10 font-lora">
      {user && <Navigate to="/welcome" />}
      <Logo />

      <form onSubmit={submitHandler}>
        <h1 className="mb-10 mt-20 text-center font-lora text-2xl text-white">Login</h1>
        <div className="flex flex-col items-center gap-4">
          <Input
            Icon={ProfileIcon}
            name="username"
            value={credentials.username}
            onChange={inputChangeHandler}
            placeholder="Username / e-mail"
          />
          <Input
            Icon={PasswordIcon}
            name="password"
            value={credentials.password}
            onChange={inputChangeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col items-center py-20">
          <Button type="submit">
            {userLoading ? <Loading loadingStyle={LoadingStyle.Small} /> : 'Login'}
          </Button>
          <p className="py-3 text-red-200">{userError && userError.response?.data.message}</p>
        </div>
      </form>
    </div>
  )
}
