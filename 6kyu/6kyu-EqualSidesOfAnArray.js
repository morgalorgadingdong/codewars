function findEvenIndex(arr) {
    let total = arr.reduce((a,b) => a+b)
    let index = -1
    for (let i = 0; i < arr.length; i++) {
      let tempArr = [...arr]
      tempArr = tempArr.splice(i,(arr.length-i))
      let thisSum = tempArr.reduce((a,b) => a+b)
      if ((total-arr[i-1]) == thisSum*2) {
          index = i-1
      }
    }
    if (total - arr[arr.length-1] == 0 && index < 0) {index = arr.length-1}
    return index
  }