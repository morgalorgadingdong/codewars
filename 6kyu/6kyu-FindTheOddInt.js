function findOdd(A) {
    let min = Math.min(...A)
    let max = Math.max(...A)
    let span = max - min + 1
    let index = new Array(span).fill(0)
    let answer
    A.forEach(n => {
      index[n - min] = index[n - min] + 1
    })
    index.forEach(i => {
      if (i % 2 === 1) {
        answer = index.indexOf(i)+min
      }
    })
    return answer;
  }