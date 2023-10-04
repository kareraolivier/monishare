import { render, screen } from '@testing-library/react'

// import AllCars from '../src/pages/AllCars/AllCars'
import App from '../src/App'
// import Home from '../src/pages/Home'
// import { MemoryRouter } from 'react-router-dom'

test('renders any HTML page', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1 })).toContainHTML('Hello to MoniShare')
})

// test('renders login page on start', () => {
//   render(<App />)
//   const heading = screen.getByRole('heading', { name: 'Log In' })
//   const email = screen.getByPlaceholderText('Username / e-mail')
//   const password = screen.getByPlaceholderText('Password')
//   const button = screen.getByRole('button', { name: 'Log In' })

//   expect(heading).toBeVisible()
//   expect(email).toBeVisible()
//   expect(password).toBeVisible()
//   expect(button).toBeVisible()
// })

// test('renders home page', () => {
//   const route = '/home'

//   render(
//     <MemoryRouter initialEntries={[route]}>
//       <Home />
//     </MemoryRouter>,
//   )

//   const heading = screen.getByText('MONI')
//   const button = screen.getByRole('button', { name: 'Book car' })
//   const button1 = screen.getByRole('button', { name: 'See my cars' })
//   const button2 = screen.getByRole('button', { name: 'See my bookings' })

//   expect(heading).toBeVisible()
//   expect(button).toBeVisible()
//   expect(button1).toBeVisible()
//   expect(button2).toBeVisible()
// })

// test('renders the all car page', async () => {
//   const route = '/cars'

//   render(
//     <MemoryRouter initialEntries={[route]}>
//       <AllCars />
//     </MemoryRouter>,
//   )
//   // await waitFor(() => expect(screen.getByText('Loading...')).toBeVisible)
//   await waitFor(() => expect(screen.getByText('All Cars')).toBeVisible())
//   await waitFor(() => expect(screen.getByRole('link', { name: 'Show details' })).toBeVisible())
// })
