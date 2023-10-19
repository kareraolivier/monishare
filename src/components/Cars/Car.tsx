import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import ProfileIcon from '../../assets/ProfileIcon'
import CarIcon from '../../assets/CarIcon'

function Car(): ReactElement {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Mighty Mouse</h1>
        <div>
          <ProfileIcon /> <span>Manuela</span>
        </div>
        <div>
          <CarIcon /> <span>Moni cooper</span>
        </div>
      </div>
      <Link to="#">Show details</Link>
    </div>
  )
}

export default Car
