import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'

import ProfileIcon from '../assets/ProfileIcon'
import Logo from '../assets/Logo'
import CarIcon from '../assets/CarIcon'
import ListIcon from '../assets/ListIcon'
import PlateIcon from '../assets/PlateIcon'
import LogoutIcon from '../assets/LogoutIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import CarsIcon from '../assets/CarsIcon'

function NavBar() {
  return (
    <div className="relative flex items-center justify-between bg-gray-800 p-5">
      <Menu>
        <Menu.Button className="text-gray-100">Menu</Menu.Button>
        <Menu.Items className="absolute top-24 flex flex-col rounded-lg border bg-indigo-400 text-gray-100">
          <Menu.Item>
            {({ active }) => (
              <a className={`nav-link ${active && 'bg-gray-800'}`} href="/account-settings">
                <CarIcon />
                <span>Book A Car</span>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`nav-link ${active && 'bg-gray-800'}`} href="/account-settings">
                <PlateIcon />
                <span>My Bookings</span>
              </a>
            )}
          </Menu.Item>
          <div className="px-4 py-2">
            <hr className="h-[1px] bg-gray-100" />
          </div>
          <h5 className="px-4 py-2 font-bold">My Cars</h5>
          <Menu.Item>
            {({ active }) => (
              <a className={`nav-link ${active && 'bg-gray-800'}`} href="/account-settings">
                <CarsIcon />
                <span>See My Cars</span>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`nav-link ${active && 'bg-gray-800'}`} href="/account-settings">
                <ListIcon />
                <span>My Car&apos;s Bookings</span>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`nav-link ${active && 'bg-gray-800'}`} href="/account-settings">
                <CarPlusIcon />
                <span>Add New Car</span>
              </a>
            )}
          </Menu.Item>
          <div className="px-4 py-2">
            <hr className="h-[1px] bg-gray-100" />
          </div>
          <Menu.Item>
            {({ active }) => (
              <a className={`nav-link ${active && 'bg-gray-800'}`} href="/account-settings">
                <LogoutIcon />
                <span>Log Out</span>
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 translate-y-2">
        <Logo className="w-18" />
      </Link>
      <ProfileIcon className="" />
    </div>
  )
}

export default NavBar
