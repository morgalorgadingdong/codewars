var maxSequence = function(x){
  let potentialMaxes = []
  let arrLength = x.length
  function combine(arr) {
    let terrain = []
    let currentElevation = 0
    let indicator = 0
    arr.forEach((el,i) => {
      if (el > 0) {
        if (indicator < 0) {
          terrain.push(currentElevation)
          currentElevation = 0
        }
        currentElevation += el
        indicator = 1
        if ((i + 1) == arr.length) {
          terrain.push(currentElevation)
        }
      } else if (el < 0) {
        if (indicator > 0) {
          terrain.push(currentElevation)
          currentElevation = 0
        }
        currentElevation += el
        indicator = -1
        if ((i + 1) == arr.length) {
          terrain.push(currentElevation)
        }
      } else {
        if (i+1 == arr.length) {
          terrain.push(currentElevation)
        }
      }
    })
    return terrain
  }  
  function maxNumber(arr) {
      let max = arr.reduce(function(a, b) {
      return Math.max(a, b);
    })
    return max
    }
  function loopRight(arr) {
    let i = 0
    while (i < arr.length) {
      let thisSum = 0
      for (let j = 0; j <= i; j++) {
        thisSum += arr[j]
      }
      potentialMaxes.push(thisSum)
      i++
    }
    return potentialMaxes
  }

  if (arrLength > 0) {
    x = combine(x)
    x.forEach((el,i) => {
      let arr = x.slice(i)
      loopRight(arr)
    })
  } else {
    return 0
  }
  let max = maxNumber(potentialMaxes)  
  
return max < 0 ? 0 : max
  
}