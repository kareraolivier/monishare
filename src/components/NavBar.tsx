import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import ProfileIcon from '../assets/ProfileIcon'
import Logo from '../assets/Logo'
import CarIcon from '../assets/CarIcon'
import ListIcon from '../assets/ListIcon'
import LogoutIcon from '../assets/LogoutIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import CarsIcon from '../assets/CarsIcon'
import { ReactElement } from 'react'
import BookingIcon from '../assets/BookingIcon'

function NavBar(): ReactElement {
  return (
    <div className="fixed mx-auto flex w-full max-w-[1500px] items-center justify-between bg-gray-800 p-5">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="text-gray-100">{open ? 'Close' : 'Menu'}</Menu.Button>
            <Menu.Items className="absolute top-24 flex flex-col rounded-lg border bg-indigo-400 text-gray-100">
              <Menu.Item>
                {({ active }) => (
                  <Link className={`nav-link ${active && 'bg-gray-800'}`} to="/book">
                    <CarIcon />
                    <span>Book A Car</span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link className={`nav-link ${active && 'bg-gray-800'}`} to="/bookings">
                    <BookingIcon />
                    <span>My Bookings</span>
                  </Link>
                )}
              </Menu.Item>
              <div className="px-4 py-2">
                <hr className="h-px bg-gray-100" />
              </div>
              <h5 className="px-4 py-2 font-bold">My Cars</h5>
              <Menu.Item>
                {({ active }) => (
                  <Link className={`nav-link ${active && 'bg-gray-800'}`} to="/cars">
                    <CarsIcon />
                    <span>See My Cars</span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link className={`nav-link ${active && 'bg-gray-800'}`} to="/manage-bookings">
                    <ListIcon />
                    <span>My Car&apos;s Bookings</span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link className={`nav-link ${active && 'bg-gray-800'}`} to="/new-car">
                    <CarPlusIcon />
                    <span>Add New Car</span>
                  </Link>
                )}
              </Menu.Item>
              <div className="px-4 py-2">
                <hr className="h-px bg-gray-100" />
              </div>
              <Menu.Item>
                {({ active }) => (
                  <Link className={`nav-link ${active && 'bg-gray-800'}`} to="/logout">
                    <LogoutIcon />
                    <span>Log Out</span>
                  </Link>
                )}
              </Menu.Item>
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
