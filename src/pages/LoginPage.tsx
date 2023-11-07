import { ReactElement, useState } from 'react'
import Input from '../components/ui/Input'
import Button from '../components/Button'
import ProfileIcon from '../assets/ProfileIcon'
import PasswordIcon from '../assets/PasswordIcon'
import useAuth from '../hooks/useAuth'
import Loading, { LoadingStyle } from '../components/Loading'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(): ReactElement {
  const navigate = useNavigate()

  const [{ data: user, loading: userLoading, error: userError }, executePost] = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameChangeHandler = (name: string) => {
    setUsername(name)
  }

  const passwordChangeHandler = (secrete: string) => {
    setPassword(secrete)
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    executePost({
      data: {
        username,
        password,
      },
    })
  }

  if (user) {
    localStorage.setItem('token', user.token)
    localStorage.setItem('userId', user.userId.toString())
    navigate('/')
  }

  return (
    <div className="py-10">
      <h1 className="text-center text-5xl font-extrabold text-gray-100">
        MONI<span className="block font-italic font-medium">share</span>
      </h1>

      <form onSubmit={submitHandler}>
        <h1 className="mb-10 mt-20 text-center font-lora text-2xl text-white">Login</h1>
        <div className="flex flex-col items-center gap-4">
          <Input
            Icon={ProfileIcon}
            userInput={usernameChangeHandler}
            placeholder="Username / e-mail"
          />
          <Input
            Icon={PasswordIcon}
            userInput={passwordChangeHandler}
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
