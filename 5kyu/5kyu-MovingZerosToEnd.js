function moveZeros(arr) {
    let reArr = [...arr]
    let adjuster = 0
    arr.forEach((el,i) => {
      if (el === 0) {
        reArr.splice(i-adjuster,1)
        reArr.push(el)
        adjuster++
      }
    })
    return reArr
  }