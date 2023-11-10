// import { useState } from 'react'
import AddCarForm from '../components/cars/AddCarForm'
import Header from '../components/ui/Header'
import Loading, { LoadingStyle } from '../components/ui/Loading'
import { useCarTypes } from '../hooks'
// import { addNewCar } from '../hooks'
// import { CarDto, CarState, FuelType } from '../util/api'
export default function AddCarPage() {
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()

  if (carTypesError) throw 'Sorry for the inconvenience'

  if (carTypesLoading)
    return (
      <>
        <Header title="All Cars" />
        <Loading loadingStyle={LoadingStyle.Default} />
      </>
    )

  if (!carTypes) throw 'The page could not be reached, sorry for the inconvenience'

  return (
    <div>
      <Header title="NEW CAR" />
      <AddCarForm carTypes={carTypes} />
    </div>
  )
}
