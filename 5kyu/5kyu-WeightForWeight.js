function orderWeight(strng) {
    if (strng == "") {return ""}
    let weights = strng.split(' ')
    let sums = []
    weights.forEach((weight,i) => {
      weight = weight.split('')
      let sum = weight.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue))
      sums.push([Number(sum),i])
    })
    sums.sort(function(a, b) {return a[0] - b[0]})
    let sumsCopy = []
    let specialCase1 = false
    for (let i = 1; i < sums.length; i++) {
      if (sums[i-1][0] == sums[i][0]) {
        let repeating = true
        let thisRun = []
        thisRun.push(sums[i-1])
        while (repeating === true) {
          thisRun.push(sums[i])
          if (i == sums.length - 1) {
            repeating = false
            break
          } else {
            i++
          }
          if (sums[i-1][0] != sums[i][0]) {
            repeating = false  
            if (i == sums.length - 1) {
              specialCase1 = true
            }
            break 
          }
        }
        thisRun.sort(function(a, b) {
          let x = weights[a[1]].toString()
          let y = weights[b[1]].toString()
          return x > y })
        thisRun.forEach(arr => sumsCopy.push(arr)) 
      } else if (i == sums.length - 1) {
        sumsCopy.push(sums[i-1])
        sumsCopy.push(sums[i])
      } else {
        sumsCopy.push(sums[i-1])
      }
      if (specialCase1 === true) {
        sumsCopy.push(sums[i])
       } 
    }
    let weightedWeights = `${weights[sumsCopy[0][1]]}`
    sumsCopy.forEach((sum,j) => {
      if (j != 0) {weightedWeights = weightedWeights.concat(' ', weights[sum[1]])}
    })
    return weightedWeights
  }