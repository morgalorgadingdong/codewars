function productFib(prod){
  let n1 = 0
  let output = []
  for (let i = 0; n1 <= prod; i++) {
    let n = fib(i)
    n1 = fib(i+1)
    if (n * n1 == prod) {
      output.push(n)
      output.push(n1)
      output.push(true)
      return output
    } else if (n * n1 > prod) {
      output.push(n)
      output.push(n1)
      output.push(false)
      return output
    }
  }
  
}

function fib(n) {
  if (n == 0) {return 0}
  if (n == 1) {return 1} 
  return fib(n-1) + fib(n-2)
}
