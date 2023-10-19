import { ReactElement } from 'react'
import Button from '../components/Button'

export default function HomePage(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen flex-col gap-8 bg-indigo-200 py-10">
      <h1 className="text-4xl font-bold">Hello to MoniShare</h1>
      <p>If you can read this, you have successfully started the base frontend repository!</p>
      <p>Happy coding!</p>
      <Button filled={false}>Button</Button>
    </main>
  )
}
