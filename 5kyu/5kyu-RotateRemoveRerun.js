function rotateAndRemove(arr){
    let n = arr[0].length
    while (n > 2) {
      let tempArr = []
      for (let i = arr[0].length - 1; i >= 0; i--) {
        let col = []
        for (let j = 0; j < arr.length; j++) {
          col.push(arr[j][i])
        }
        tempArr.push(col)
      }
      let reduced = []
      tempArr.forEach(row => {
        let indexMin = row.indexOf(Math.min(...row))
        row.splice(indexMin,1)
        let indexMax = row.indexOf(Math.max(...row))
        row.splice(indexMax,1)
        reduced.push(row)
      })
      arr = [...reduced]
      n = arr.length
    }  
    n = Number(arr[0])
    return n
  }