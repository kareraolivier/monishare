# Ojemba Frontend

The Ojemba frontend uses the ReactJS framework.
Just for the interested reader, [here](./INITIAL_SETUP.md) you can find how the initial setup was done.

## External Documentation

External documentation for frontend libraries:

* [React](https://legacy.reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)

## Setup & Startup

1. Create a `.env` file based on the [`.env.example`](.env.example) inside the `frontend` directory. The most (and currently only) important variable is the `VITE_API_URL` which should point to the backend API, e.g. to http://3.66.182.10:3000
2. Install all packages: `npm install`
3. Run `npm start`

The frontend can then be found on [localhost:5173](http://localhost:5173).

## Interesting Packages and Links

You can use libraries of your choice. But we want to recommend you some

### Tailwind HeadlessUI Components

Install it with `npm install @headlessui/react@latest`

This package provides you with unstyled components that solve very common requirements for UI elements in a good and accessible way.
For example, you can find a dropdown there that you can use to implement a menu or something similar.
Unstyled means that you can assign all tailwind classes. Without this, the components still look like nothing.

### Axios Hooks 

Already installed.

Use the axios hooks to implement asynchronous behavior in React more easily and declaratively. Without these helpful hooks, you'll have to deal with the useEffect hooks and worry about extra state for the loading status, the error status and the successfully received data. The axios hook takes care of all of this for you.

Using the axios hooks makes your React components more readable and declarative. A basic example using axios hooks to fetch data looks like this:

```tsx
import useAxios from 'axios-hooks'

type TypeOfData = { page: number, total: number };

function App() {
  const [{ data, loading, error }, refetch] = useAxios<TypeOfData>(
    'https://reqres.in/api/users?delay=1'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
```

### Fetching Hooks

We have already set up some useful hooks for you to use. These hooks use the `axios-hooks` to fetch data. They are located in `src/hooks`.
