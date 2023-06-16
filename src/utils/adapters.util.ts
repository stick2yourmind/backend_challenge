export const snakeCaseWord = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)

export const objectArrayToObjectSnake = (arr: Array<Record<string, string>>) => {
  let newObject = {}
  arr.forEach(item => {
    Object.entries(item).forEach(([key, value]) => {
      newObject = { ...newObject, [snakeCaseWord(key)]: snakeCaseWord(value) }
    })
  })
  return newObject
}
