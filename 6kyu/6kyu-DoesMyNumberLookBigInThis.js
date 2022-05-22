function narcissistic(value) {
    let arrVal = String(value).split('')
    let check = 0
    let base = arrVal.length 
    arrVal.forEach(val => {
      console.log(val,base)
      check += Math.pow(Number(val),base)
      console.log(check)
    })
    
    return check == value ? true : false
  }
  