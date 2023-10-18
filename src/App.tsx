import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import NavBar from './components/NavBar'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <div className="font-inter">
      <NavBar />
      <main className="mx-auto flex min-h-screen w-1/3 flex-col gap-8 py-10">
        <h1 className="text-4xl font-bold">Hello to MoniShare</h1>
        <p>If you can read this, you have successfully started the base frontend repository!</p>
        <p>Happy coding!</p>
      </main>
    </div>
  )
}

export default App
