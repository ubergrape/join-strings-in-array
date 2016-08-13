const defaultDelimeter = ' '
export default function joinStringsInArray(array, delimeter = defaultDelimeter, trimLast = false) {
  if (typeof delimeter === 'boolean') {
    /* eslint-disable no-param-reassign */
    delimeter = defaultDelimeter
    trimLast = delimeter
    /* eslint-enable no-param-reassign */
  }

  const originlLastIndex = array.length - 1
  return array.reduce((joined, item, index) => {
    let isLastLoop = false
    if (index === originlLastIndex) isLastLoop = true

    const lastChildIndex = joined.length - 1
    const lastChild = joined[lastChildIndex]

    if (typeof item !== 'string') {
      if (trimLast && typeof lastChild === 'string') {
        joined[lastChildIndex] = lastChild.slice(0, lastChild.lastIndexOf(delimeter))
      }
      joined.push(item)
      return joined
    }

    const spacedItem = item + (isLastLoop ? '' : delimeter)
    if (typeof lastChild !== 'string') {
      joined.push(spacedItem)
      return joined
    }

    joined[lastChildIndex] = lastChild + spacedItem
    return joined
  }, [])
}
