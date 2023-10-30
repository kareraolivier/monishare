import { ReactElement } from 'react'

export enum LoadingStyles {
  DEFAULT = 'h-24 w-24',
  MEDIUM = 'h-16 w-16',
  SMALL = 'h-4 w-4',
}

export default function Loading({ className }: { className: LoadingStyles }): ReactElement {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className={`${className} rounded-full border-y-8`}></div>
        <div
          className={`absolute left-0 top-0 animate-spin rounded-full border-y-8 ${className}  border-b-8 border-indigo-800`}
        ></div>
      </div>
    </div>
  )
}
