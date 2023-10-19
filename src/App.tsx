import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Button from './components/Button'
import { ButtonTypes } from './types/enums'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <main className="w-100 py-10s mx-auto flex min-h-screen flex-col gap-8 bg-green-700">
      <h1 className="text-4xl font-bold">Hello to MoniShare</h1>
      <p>If you can read this, you have successfully started the base frontend repository!</p>
      <p>Happy coding!</p>
      <Button type={ButtonTypes.PRIMARY}>Button</Button>
    </main>
  )
}

export default App
