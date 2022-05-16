function expandedForm(num) {
    let arr = String(num).split('')
    let expanded = ''
    arr.forEach((number, i) => {
      if (number != 0) {
        if (i > 0) {
          expanded = expanded.concat(' + ')
        }
        let base = Math.pow(10, (arr.length - i-1))
        let baseNumber = number * base
        expanded = expanded.concat(baseNumber)
      }
    })
    return expanded
  }