export const isNotEmpty = (str: string) => str.trim().length !== 0

export const isInOptions = (value: string, list: string[]) => list.includes(value)

export const isOnlyNumber = (str: string) => /^\d+$/.test(str)

export const isOnlyNumberLetter = (str: string) => /^[\d\w]+$/.test(str)

export function newCarValidation(inputName: string, inputValue: string, list?: string[]) {
  if (inputName === 'name') return isNotEmpty(inputValue)
  if (inputName === 'horsepower') return isOnlyNumber(inputValue)
  if (inputName === 'licensePlate') return isOnlyNumberLetter(inputValue)
  if (inputName === 'carTypeId' || inputName === 'fuelType')
    return list && isInOptions(inputValue, list)
}

// const carDataState={ {isTouched:false, carTypeId: { value: String(carTypes[0].id), isValid: true }},
//   {isTouched:false, name: { value: '', isValid: false }},
//   {isTouched:false, fuelType: { value: FuelType.PETROL, isValid: true }},
//   {isTouched:false, horsepower: { value: '', isValid: false }},
//   {isTouched:false, licensePlate: { value: '', isValid: false }},
//   {isTouched:false, info: { value: '', isValid: false }}

// }
