import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import ProfileIcon from '../../assets/ProfileIcon'
import CarIcon from '../../assets/CarIcon'

function Car(): ReactElement {
  return (
    <div className="rounded-xl bg-indigo-400 px-8 py-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3 flex items-end justify-end">
          <img src="images/Car-Orange.png" alt="" />
        </div>
        <div className="col-span-2 flex flex-col gap-5">
          <h1 className="font-lora text-xl font-medium text-white">Mighty Mouse</h1>
          <div className="flex gap-x-3 text-sm font-normal text-gray-100">
            <ProfileIcon /> <span>Manuela</span>
          </div>
          <div className="flex gap-x-3 text-sm font-normal text-gray-100">
            <CarIcon /> <span>Moni cooper</span>
          </div>
        </div>
      </div>
      <div className="my-5 grid grid-cols-5 content-end gap-x-5">
        <div className="col-span-2 col-start-4">
          <Link to="#" className="text-sm font-bold text-mustard-100">
            Show details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Car
