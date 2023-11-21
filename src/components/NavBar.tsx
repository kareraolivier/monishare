import { Link, useNavigate } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import ProfileIcon from '../assets/ProfileIcon'
import { ReactElement } from 'react'
import { menuLinks } from '../data/navbar'
import LogoutIcon from '../assets/LogoutIcon'
import WelcomeLink from './WelcomeLink'
import { useReadLocalStorage } from 'usehooks-ts'

function NavBar(): ReactElement {
  const navigate = useNavigate()
  const token = useReadLocalStorage('token')
  const logoutHandler = () => {
    localStorage.clear()
    navigate('/', { replace: true })
  }

  const navBarStyles =
    'fixed z-10 mx-auto flex h-16 w-full items-center justify-between bg-gray-800 p-5'
  if (token === null)
    return (
      <div className={navBarStyles}>
        <WelcomeLink />
      </div>
    )
  return (
    <div className={navBarStyles}>
      {
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="text-gray-100">{open ? 'Close' : 'Menu'}</Menu.Button>
              <Menu.Items className="absolute top-24 flex animate-pop flex-col rounded-lg bg-indigo-400 text-gray-100 shadow-2xl">
                {menuLinks.map(item => {
                  if (item.title)
                    return (
                      <h5 key={item.id} className="px-4 py-2 font-bold">
                        {item.title}
                      </h5>
                    )
                  if (item.link)
                    return (
                      <Menu.Item key={item.id}>
                        {({ active }) => (
                          <Link
                            className={`nav-link ${active && 'bg-gray-800'}`}
                            to={`${item.link}`}
                          >
                            {item.icon && <item.icon />}
                            <span>{item.text}</span>
                          </Link>
                        )}
                      </Menu.Item>
                    )
                  return (
                    <div key={item.id} className="px-4 py-2">
                      <hr className="h-px bg-gray-100" />
                    </div>
                  )
                })}
                <Menu.Item>
                  <button className="nav-link hover:bg-gray-800" onClick={logoutHandler}>
                    <LogoutIcon />
                    <span>Logout</span>
                  </button>
                </Menu.Item>
              </Menu.Items>
            </>
          )}
        </Menu>
      }
      <WelcomeLink />
      <button>{<ProfileIcon />}</button>
    </div>
  )
}

export default NavBar
