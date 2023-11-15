export const isNotEmpty = (str: string) => str.trim().length !== 0

// Check if no special characters in included in a string
export const isNoSpecialCharacter = (str: string) => /^[\d\w ]+$/.test(str)

export const isInOptions = (value: string, list: string[]) => list.includes(value)

export const isOnlyNumber = (str: string) => /^\d+$/.test(str)

// String can contain only alphanumeric or space or hyphen
export const isOnlyAlphanumericHyphenSpace = (str: string) => /^[\d\w- ]+$/.test(str)

export function newCarValidation(inputName: string, inputValue: string, list?: string[]) {
  if (inputName === 'name') return isNotEmpty(inputValue) && isNoSpecialCharacter(inputValue)
  if (inputName === 'horsepower') return isOnlyNumber(inputValue)
  if (inputName === 'licensePlate')
    return isNotEmpty(inputValue) && isOnlyAlphanumericHyphenSpace(inputValue)
  if (inputName === 'info') return true
  if (inputName === 'carTypeId' || inputName === 'fuelType')
    return list && isInOptions(inputValue, list)
}
