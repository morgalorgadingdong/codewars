function findUniq(arr) {
    let num1 = arr[0]
    let num2
    let count1 = 1
    let count2 = 0
    arr.forEach((el, i) => {
      if (i>0) {
        if (el == num1) {
          count1++
        }
        else if (count2 < 1) {
          count2++
          num2 = el
        }
      }
    })
    return count1 > count2 ? num2 : num1
  }