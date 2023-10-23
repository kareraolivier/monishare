// import { ReactElement } from 'react'
// import { useParams } from 'react-router-dom'
// import { CarDto, UserDto, CarTypeDto } from '../util/api'
// import CarDetail from '../components/cars/CarDetail'
// import { useCars, useCarTypes, useUser } from '../hooks'
// export default function CarDetailsPage(): ReactElement {
//   const param = useParams()

//   const [{ data }] = useCars()

//   const item: CarDto = data?.filter(car => car.id === Number(param.id))[0]

//   const [{ data: image }] = useCarTypes()
//   const carImage: CarTypeDto = image?.filter(el => el.id === item?.carTypeId)[0]
//   const [{ data: owner }] = useUser(item?.ownerId)

//   return (
//     <div>
//       <CarDetail item={item} owner={owner} carImage={carImage} />
//     </div>
//   )
// }
