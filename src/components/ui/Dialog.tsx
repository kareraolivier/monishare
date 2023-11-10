import { ReactElement, useState, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import Button from './Button'
import { ButtonVariant } from '../../types/enums'
import { Transition } from '@headlessui/react'

interface Props {
  closeModal: () => void
}
export default function MyDialog({ closeModal }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you an email with all
                    of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex gap-4 p-4">
                    <Button filled={false} variant={ButtonVariant.Delete} onClick={closeModal}>
                      Delete
                    </Button>
                    <Button
                      filled={false}
                      variant={ButtonVariant.Secondary}
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
