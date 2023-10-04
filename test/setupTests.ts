import 'vitest-dom/extend-expect'
import createFetchMock from 'vitest-fetch-mock'
import { server } from './server'
import { vitest } from 'vitest'

const fetchMocker = createFetchMock(vitest)
fetchMocker.enableMocks()

// Establish API mocking before all tests.
beforeAll(() => server.listen())

/*
 * Reset any request handlers that we may add during the tests,
 * so they don't affect other tests.
 */
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
