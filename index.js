const list = require('./list')

module.exports = string => {
  const length = string.length
  let index = -1
  let result = ''
  while (++index < length) {
    const char = string[index]
    const entity = list[char]
    result += entity || char
  }
  return result
}
