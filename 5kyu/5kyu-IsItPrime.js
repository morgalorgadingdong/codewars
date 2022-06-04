function prime(num) {
    if (num < 2) {return []}
    let prime = [2]
    for (let i = 2; i <= num; i++) {
      let isItPrime = true
      prime.forEach(number => {
        if (i % number == 0) {isItPrime = false}
      })
      if (isItPrime) {prime.push(i)}
    }
    return prime
  }