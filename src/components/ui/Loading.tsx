import { ReactElement } from 'react'

export enum LoadingStyle {
  Default = 'h-24 w-24',
  Medium = 'h-16 w-16',
  Small = 'h-4 w-4',
}

export default function Loading({ loadingStyle }: { loadingStyle: LoadingStyle }): ReactElement {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className={`rounded-full border-y-8 ${loadingStyle}`}></div>
        <div
          className={`absolute left-0 top-0 animate-spin rounded-full border-y-8 border-indigo-800 ${loadingStyle}`}
        ></div>
      </div>
    </div>
  )
}
