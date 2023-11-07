import CarIcon from '../assets/CarIcon'
import BookingIcon from '../assets/BookingIcon'
import CarsIcon from '../assets/CarsIcon'
import ListIcon from '../assets/ListIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import LogoutIcon from '../assets/LogoutIcon'

interface MenuLink {
  id: number
  text?: string
  link?: string
  icon?: ({
    className,
  }: {
    className?: string
  }) => React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  title?: string
}

export const menuLink: MenuLink[] = [
  { id: 1, link: '/book', text: 'Book A Car', icon: CarIcon },
  { id: 2, link: '/bookings', text: 'My Bookings', icon: BookingIcon },
  { id: 3, text: 'divider' },
  { id: 4, title: 'My Cars' },
  { id: 5, link: '/cars', text: 'See My Cars', icon: CarsIcon },
  { id: 6, link: '/manage-bookings', text: "My Car's Bookings", icon: ListIcon },
  { id: 7, link: '/new-car', text: 'Add New Car', icon: CarPlusIcon },
  { id: 8, text: 'divider' },
  { id: 9, link: '/logout', text: 'Log Out', icon: LogoutIcon },
]
