import { BookingState, CarState } from '../src/util/api'

import { apiUrl } from '../src/util/apiUrl'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(
  rest.get(`${apiUrl}/cars`, (_req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 1,
          name: 'Text Car',
          carTypeId: 1,
          carType: {
            name: 'Moni Cooper',
            imageUrl: 'https://placekitten.com/g/400/300',
          },
          fuelType: {
            name: 'petrol',
          },
          fuelTypeId: 1,
          ownerId: 1,
          owner: { name: 'TestUser' },
          info: 'This is a test information.',
        },
      ]),
    ),
  ),
  rest.get(`${apiUrl}/bookings`, (_req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 3,
          startDate: new Date('2023-08-17T14:00:00.000Z'),
          endDate: new Date('2023-08-17T15:00:00.000Z'),
          bookingState: BookingState.PENDING,
          renter: { id: 2, name: 'Test' },
          renterId: 2,
          carId: 2,
          car: {
            id: 2,
            name: 'Car 2',
            carState: CarState.LOCKED,
            owner: {
              name: 'TestUser',
            },
            carType: {
              id: 2,
              name: 'Moni Cooper',
              imageUrl: 'https://placekitten.com/g/400/300',
            },
          },
        },
      ]),
    ),
  ),
  rest.get(`${apiUrl}/users`, (_req, res, ctx) =>
    res(
      ctx.json([
        { id: 1, name: 'Beatrice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Izzeddin' },
      ]),
    ),
  ),
  rest.get(`${apiUrl}/car-types`, (_req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 1,
          name: 'Moni Cooper',
          imageUrl: 'https://images.local/moni-cooper.png',
        },
        {
          id: 2,
          name: 'Moni Electric',
          imageUrl: 'https://images.local/moni-electric.png',
        },
        {
          id: 3,
          name: 'Moni Countryman',
          imageUrl: 'https://images.local/moni-countryman.png',
        },
      ]),
    ),
  ),
)
