export const narrowToString = (arg: unknown) => {
  if (typeof arg === 'string')
    return arg
  return undefined
}
export const narrowToNumber = (arg: unknown) => {
  if (!isNaN(Number(arg)))
    return Number(arg)
  return undefined
}
