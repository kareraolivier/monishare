// import { ReactElement, Suspense, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { CarDto, UserDto, CarTypeDto } from '../util/api'
// import CarDetail from '../components/cars/CarDetail'
// import { useCars, useCarTypes, useUser } from '../hooks'
// import Header from '../components/Header'
// export default function CarDetailsPage(): ReactElement {
//   const param = useParams()
//   const [cars, setCars] = useState<CarDto>()
//   const [users, setUsers] = useState<UserDto>()
//   const [images, setImages] = useState<CarTypeDto>()
//   const fetchData = async () => {
//     const [{ data, loading, error }] = await useCars()
//     if (loading) {
//       return <h1>Loading...</h1>
//     }

//     if (!data) return <h1>No cars found</h1>
//     const [{ data: image, loading: imageLoading }] = await useCarTypes()
//     const item: CarDto = data?.filter(car => car.id === Number(param.id))[0]
//     setCars(item)
//     const carImage = image?.filter(el => el.id === item?.carTypeId)[0]
//     if (carImage) {
//       setImages(carImage)
//     }
//     const itemId: string | number = item?.ownerId
//     const [{ data: owner, loading: ownerLoading, error: ownerError }] = await useUser(itemId)
//     owner && setUsers(owner[0])
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])
//   console.log(cars, users, images)
//   return (
//     <div className="bg-indigo-800 px-4">
//       <Header title="Available cars" />
//       <div className=" flex flex-col justify-center items-center ">
//         <CarDetail item={cars} owner={users} carImage={images} />
//       </div>
//     </div>
//   )
// }
