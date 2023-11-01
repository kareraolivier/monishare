import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import ProfileIcon from '../assets/ProfileIcon'
import Logo from '../assets/Logo'
import { ReactElement } from 'react'
import { menuLink } from '../data/navbar'
import { MenuItemProps } from '../types/interfaces'

function NavBar(): ReactElement {
  return (
    <div className="fixed mx-auto flex w-full items-center justify-between bg-gray-800 p-5">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="text-gray-100">{open ? 'Close' : 'Menu'}</Menu.Button>
            <Menu.Items className="absolute top-24 flex animate-pop flex-col rounded-lg bg-indigo-400 text-gray-100 shadow-2xl">
              {menuLink.map((item: MenuItemProps) => {
                if (item.title)
                  return (
                    <h5 key={item.id} className="px-4 py-2 font-bold">
                      My Cars
                    </h5>
                  )
                if (item.link)
                  return (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <Link
                          className={`nav-link ${active && 'bg-gray-800'}`}
                          to={item.link as string}
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
            </Menu.Items>
          </>
        )}
      </Menu>
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 translate-y-2">
        <Logo className="w-18" />
      </Link>
      <button>
        <ProfileIcon />
      </button>
    </div>
  )
}

export default NavBar
