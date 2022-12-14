import { ResponseResolver, rest, RestContext, RestRequest } from 'msw';
import { setupServer } from 'msw/node';

const baseUrl = 'https://dulces-petalos.herokuapp.com'
const server = setupServer()

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

export const mockGet = (path: string, body: ResponseResolver<RestRequest, RestContext>) => {
  server.use(
    rest.get(`${baseUrl}${path}`, body) 
  );
}