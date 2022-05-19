multiplicationTable = function(size) {
    let arr = []
    for (let i = 1; i <= size; i++) {
      let innerArr = []
      for (let j = 1; j <= size; j++) {
        innerArr.push(j*(i))
      }
      arr.push(innerArr)
    }
    return arr
  }
  