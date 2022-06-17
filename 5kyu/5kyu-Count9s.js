// return the number of 9's used to count out 1 to n
function number9(n){
    //0-10 - 1
    //0 - 100 - 20 (10 from 90's, 10 from 0-89)
    //1000 - 120 (20 from 100, 100 from 900's, )
    //Each 10 = 1 (up to 9)
    //Each 100 = 10
    //Each 1000 = 100
    //Each 10000 = 1000
    let count = 0
    let x = 1
    while (x <= (n/10)) {
      x *= 10
    }
    
    
    if (n < 10) {
      if (n == 9) {return 1}
      else {return 0}
    }
    
    let base = 10
    console.log('NEW NUMBER:', n)
    while (base <= n) {
      let specificity = (base/10)
      let inc = (Math.floor(n/base))*(base/10)
      let remainder = n % base
  //     console.log(remainder)
      let gateKeeper = 9 * specificity
      if (remainder >= 9 * specificity) {
        let diff = remainder - 9 + specificity
        let partialInc = diff/specificity
        console.log('Partial at base', base)
        console.log('Remainder:', remainder)
        console.log('Diff', diff)
        console.log('Bar', gateKeeper)
        inc += partialInc
      }
      count += inc
      console.log('Base, count', base, count)
      base*=10
    }
    return count
  }
  
  
  
  
  // 
  //     let temp = n/(counter)
  //     let temp2 = Math.floor(n/(counter))
  //     console.log(temp, temp2)
      
  //     let partial = temp - temp2
      
  // //     partial = (Math.floor(partial*counter))/counter
  //     console.log('Partial',partial,counter)
  //     if (partial >= .9 - specificity) {
  //       let diff = partial - (0.9 - specificity)
  //       let partialInc = diff/specificity
  //       inc += partialInc
  //       console.log('Partial at:',partial)
  //       console.log(specificity,diff,partialInc)
  //     }