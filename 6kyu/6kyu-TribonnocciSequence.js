function tribonacci(sig,n){
    if (n < 4) {
      return sig.slice(0,n)
    }
    let i = 2
    while (sig.length < n) {
      let next = sig[i-2]+sig[i-1]+sig[i]
      sig.push(next)
      i++
    }
    return sig
  }