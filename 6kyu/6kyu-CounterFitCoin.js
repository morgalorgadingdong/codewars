function howManyMeasurements(n){
    let count = 0
    if (n < 2) {return count}
    while (n > 3) {
      let rem = n % 3
      if (rem == (n - rem) / 3 && n > 4) {
        n = ((n - (n%2)) / 2) - rem
        count++
      } else {
        n = ((n-rem)/3) + (rem)
        count++
      }
    }
    return n > 1 ? count + 1 : count
  } 