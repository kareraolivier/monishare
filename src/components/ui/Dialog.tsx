import { ReactElement, useState, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import Button from './Button'
import { ButtonVariant } from '../../types/enums'
import { Transition } from '@headlessui/react'

interface Props {
  onDeleteCar: () => void
}
export default function MyDialog({ onDeleteCar }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-indigo-800 p-6 text-left align-middle font-lora text-gray-100 shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                  Delete car
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm">Do you want to delete this car?</p>
                </div>

                <div className="mt-4">
                  <div className="flex gap-4 p-4">
                    <Button filled={false} variant={ButtonVariant.Delete} onClick={onDeleteCar}>
                      Delete
                    </Button>
                    <Button
                      filled={false}
                      variant={ButtonVariant.Primary}
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
