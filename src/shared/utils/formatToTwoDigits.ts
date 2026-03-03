export const formatToTwoDigits = (value: number) => {
    return value.toString().padStart(2, '0').split('')
}