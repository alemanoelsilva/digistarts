function sort(a, b) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}

function toNumber(group) {
  return [...group].reduce((acc, current) => `${acc} \n${current}`, '')
}

function getOrderedAndDeduplicatedGroup(group) {
  return new Set(group.sort(sort))
}

exports.start = (totalNumber, group) => {
  if (totalNumber !== group.length) {
    return "Quantidade de números do conjunto não permitidos"
  }
  return toNumber(getOrderedAndDeduplicatedGroup(group))
}



