function sortArray(array) {
    // loop through array, saving odd numbers to a new array
    let odds = []
    array.forEach(el => {
      if (el % 2 != 0) {
        odds.push(el)
      }
    })
    //Sort new array
    odds.sort(function(a, b) {
      return a - b;
    });
    //Loop back through original array, replacing each odd number with the new sorted number
    let oddCount = 0
    array.forEach((el,i) => {
      if (el % 2 != 0) {
        array[i] = odds[oddCount]
        oddCount++
      }
    })
    return array
  }